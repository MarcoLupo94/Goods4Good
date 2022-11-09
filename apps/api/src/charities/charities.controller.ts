import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharitiesService } from './charities.service';
import { CreateCharityDto } from './dto/create-charity.dto';
import { UpdateCharityDto } from './dto/update-charity.dto';

@Controller('charities')
export class CharitiesController {
  constructor(private readonly charitiesService: CharitiesService) {}

  @Post()
  create(@Body() createCharityDto: CreateCharityDto) {
    return this.charitiesService.create(createCharityDto);
  }

  @Get()
  findAll() {
    return this.charitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharityDto: UpdateCharityDto) {
    return this.charitiesService.update(+id, updateCharityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charitiesService.remove(+id);
  }
}
