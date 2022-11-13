import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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

  @Prop()
  given_name: string;

  @Prop()
  family_name: string;

  @Prop()
  picture: string;

  @Prop()
  cart: string[];

  @Prop()
  donations: string[];
}

export const UserSchema = SchemaFactory.createForClass(user);
