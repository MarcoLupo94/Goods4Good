import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { item } from '../items/items.schema';

export type UserDocument = HydratedDocument<user>;

@Schema()
export class user {
  @Prop({
    unique: [true, 'login field must be unique'],
    required: [true, 'login field must be defined'],
  })
  email: string;

  @Prop({
    unique: [true, 'login field must be unique'],
  })
  username: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'item' })
  cart: item[];

  @Prop()
  donations: string[];
}

export const UserSchema = SchemaFactory.createForClass(user);
