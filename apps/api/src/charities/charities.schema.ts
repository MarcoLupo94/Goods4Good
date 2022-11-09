import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { item } from '../items/items.schema';
import * as mongoose from 'mongoose';

export type CharityDocument = HydratedDocument<charity>;

@Schema()
export class charity {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  img_url: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'item' })
  shop_items: item[];
}

export const CharitySchema = SchemaFactory.createForClass(charity);
