import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "@app/common";
import { SchemaTypes, Types } from 'mongoose';
import { User } from "./user.schema";

@Schema({ versionKey: false })
export class Profile extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  birthday: string;

  @Prop()
  horoscope: string;

  @Prop()
  zodiac: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  interest: string[];

  @Prop([{ type: SchemaTypes.ObjectId, ref: User }])
  user: User;

}

export const ProfileSchema = SchemaFactory.createForClass(Profile)