import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AppService } from './app.service';
import { S3serviceService } from './s3service/s3service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private service: S3serviceService
  ) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file', {}))
  async uploadFile(@UploadedFile() file) {
    console.log(file);
    const fileUp = await this.service.upload(file);
    return fileUp;
  }
}
