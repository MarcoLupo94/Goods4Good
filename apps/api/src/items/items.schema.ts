import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Charity } from '../charities/charities.schema';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  img_url: string;

  @Prop()
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Charity' })
  charity_shop: Charity;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
