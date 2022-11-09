import { Charity } from '@charity-app-production/api-interfaces';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CharitiesService } from './charities.service';

@Controller('charities')
export class CharitiesController {
  constructor(private readonly charitiesService: CharitiesService) {}

  @Post()
  async create(@Body() charity: Charity) {
    try {
      return this.charitiesService.create(charity);
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
      return this.charitiesService.findAll();
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
      return this.charitiesService.findOne(id);
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() charityUpdated: Charity) {
    try {
      return this.charitiesService.update(id, charityUpdated);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: 'NOT_MODIFIED',
        },
        HttpStatus.NOT_MODIFIED,
        {
          cause: error,
        }
      );
    }
  }
}
