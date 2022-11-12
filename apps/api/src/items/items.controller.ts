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

  @Get(':id')
  find(@Param('id') _id: string) {
    try {
      return this.itemsService.find(_id);
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
}
