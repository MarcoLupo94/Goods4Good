import { Item } from '@charity-app-production/api-interfaces';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() item: Item) {
    try {
      return this.itemsService.create(item);
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
  findAll() {
    try {
      return this.itemsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not FOUND',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        }
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    try {
      return this.itemsService.findOne(_id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not found',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        }
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    try {
      return this.itemsService.remove(_id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: 'Not Deleted',
        },
        HttpStatus.NOT_MODIFIED,
        {
          cause: error,
        }
      );
    }
  }
}
