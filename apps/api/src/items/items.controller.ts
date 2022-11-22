import { validatePrice, sanitizeInputs } from "./items.security.checks";
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
      /* - Adding validation for price and escaping for all string properties- */
      console.log("Before checks:", item);
      validatePrice(item);
      const safeItem = sanitizeInputs(item);
      console.log("After checks:", safeItem);
      /* -------------------------- */
      return this.itemsService.create(safeItem);
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
