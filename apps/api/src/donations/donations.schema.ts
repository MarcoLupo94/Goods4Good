import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { charity } from '../charities/charities.schema';

export type DonationDocument = HydratedDocument<donation>;

@Schema()
export class donation {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  amount: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'charity' })
  charity: charity;
}

export const DonationSchema = SchemaFactory.createForClass(donation);
