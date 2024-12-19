import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes} from 'mongoose';
import { Chat } from './chat.schema';
import { User } from './user.schema';

@Schema({ versionKey: false, timestamps: true })
export class Message extends AbstractDocument {
  @Prop({ ref: Chat.name, type: SchemaTypes.ObjectId })
  chat_id: string

  @Prop({ ref: User.name, type: SchemaTypes.ObjectId })
  sender_id: string;

  @Prop()
  message: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);