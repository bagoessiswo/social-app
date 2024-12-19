import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { User } from './user.schema';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false, timestamps: true })
export class Chat extends AbstractDocument {
  @Prop([{ ref: User.name, type: SchemaTypes.ObjectId }])
  members: [User];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);