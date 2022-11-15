import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { environment } from '../environments/environment';
import { AppService } from './app.service';
import { S3serviceService } from './s3service/s3service.service';

const stripe = require('stripe')(environment.STRIPE_KEY);

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private service: S3serviceService
  ) {}
  calculateOrderAmount = (items: Item[]) => {
    const total = items.reduce(
      (prev, current): number => prev + current.price,
      0
    );
    return total;
  };

  @Post('file')
  @UseInterceptors(FileInterceptor('file', {}))
  async uploadFile(@UploadedFile() file) {
    console.log(file);
    const fileUp = await this.service.upload(file);
    return fileUp;
  }

  @Post('checkout')
  async checkout(@Body() body: any) {
    const { items } = body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: this.calculateOrderAmount(items),
      currency: 'gbp',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return {
      clientSecret: paymentIntent.client_secret,
    };
  }
}
