import { Item } from '@charity-app-production/api-interfaces';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() item: Item) {
    return this.itemsService.create(item);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.itemsService.findOne(_id);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.itemsService.remove(_id);
  }
}
