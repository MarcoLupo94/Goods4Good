import { Module } from '@nestjs/common';
import { CharitiesService } from './charities.service';
import { CharitiesController } from './charities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { charity, CharitySchema } from './charities.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: charity.name, schema: CharitySchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: charity.name, schema: CharitySchema }]),
  ],
  controllers: [CharitiesController],
  providers: [CharitiesService],
})
export class CharitiesModule {}
