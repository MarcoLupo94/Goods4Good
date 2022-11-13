import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { user, UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { item, ItemSchema } from '../items/items.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: user.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: item.name, schema: ItemSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: user.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
