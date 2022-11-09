import { Module } from '@nestjs/common';
import { CharitiesService } from './charities.service';
import { CharitiesController } from './charities.controller';

@Module({
  controllers: [CharitiesController],
  providers: [CharitiesService]
})
export class CharitiesModule {}
