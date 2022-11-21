import validator from "validator";
import { Donation } from '@charity-app-production/api-interfaces';
import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { DonationsService } from './donations.service';
import { HttpStatus } from '@nestjs/common';

// CHECK https://docs.nestjs.com/exception-filters for error handling
@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) { }

  @Post()
  async create(@Body() donation: Donation) {
    try {
      return this.donationsService.create(donation);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: 'Not Created',
        },
        HttpStatus.NOT_MODIFIED,
        {
          cause: error,
        }
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return this.donationsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not Found',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        }
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.donationsService.findOne(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not Found',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        }
      );
    }
  }
}
