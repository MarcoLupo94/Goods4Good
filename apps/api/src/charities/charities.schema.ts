import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Item } from '../items/items.schema';
import * as mongoose from 'mongoose';

export type CharityDocument = HydratedDocument<Charity>;

@Schema()
export class Charity {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  img_url: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Item' })
  shop_items: Item[];
}

export const CharitySchema = SchemaFactory.createForClass(Charity);
