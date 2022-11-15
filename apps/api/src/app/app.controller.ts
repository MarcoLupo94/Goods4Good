import { Item } from '@charity-app-production/api-interfaces';
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { environment } from '../environments/environment';
import { AppService } from './app.service';
import { S3serviceService } from './s3service/s3service.service';
import Stripe from 'stripe';

const stripe = new Stripe(environment.STRIPE_SECRET, {
  apiVersion: '2022-08-01',
});

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
    const fileUp = await this.service.upload(file);
    return fileUp;
  }

  @Post('checkout')
  async checkout(@Body() body: any) {
    try {
      const { items } = body;
      const mappedItems = items.map((item: Item) => {
        return {
          quantity: 1,
          price_data: {
            currency: 'gbp',
            product_data: {
              name: item.title,
              images: [item.img_url],
            },
            unit_amount: item.price * 100,
          },
        };
      });
      const session = await stripe.checkout.sessions.create({
        line_items: mappedItems,
        mode: 'payment',
        success_url: environment.CLIENT_URL + 'thank-you',
        cancel_url: environment.CLIENT_URL,
      });
      return { session };
    } catch (err) {
      console.log(err);
    }
  }
}
