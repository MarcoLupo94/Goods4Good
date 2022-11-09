import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { item, ItemSchema } from './items.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: item.name, schema: ItemSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: item.name, schema: ItemSchema }]),
  ],

  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
