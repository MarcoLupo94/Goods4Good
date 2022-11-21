import validator from "validator";
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
import { throwError } from 'rxjs';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) { }

  @Post()
  create(@Body() item: Item) {
    try {
      /* - Adding validation for price and escaping for all string inputs- */
      function escapeAll(object) {
        Object.keys(object).forEach(function (k) {
          if (typeof object[k] === 'string' && k !== 'img_url') {
            object[k] = validator.escape(object[k]);
          }
        })
      }
      escapeAll(item);
      console.log(item);
      if (!validator.isCurrency('' + item.price, {
        require_symbol: false,
        decimal_separator: '.',
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [0, 1, 2]
      })) throw 'Price format is not correct';
      /* -------------------------- */
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
