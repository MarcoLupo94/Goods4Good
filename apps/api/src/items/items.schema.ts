import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<item>;

@Schema()
export class item {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  img_url: string;

  @Prop()
  price: number;

  @Prop()
  size: string;

  @Prop()
  charity_shop: string;

  @Prop()
  user_owner: string;
}

export const ItemSchema = SchemaFactory.createForClass(item);
