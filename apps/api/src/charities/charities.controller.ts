import { Charity } from '@charity-app-production/api-interfaces';
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CharitiesService } from './charities.service';

@Controller('charities')
export class CharitiesController {
  constructor(private readonly charitiesService: CharitiesService) {}

  @Post()
  create(@Body() charity: Charity) {
    return this.charitiesService.create(charity);
  }

  @Get()
  findAll() {
    return this.charitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charitiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() charityUpdated: Charity) {
    return this.charitiesService.update(id, charityUpdated);
  }
}
