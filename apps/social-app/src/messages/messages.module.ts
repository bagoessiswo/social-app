import { Module } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from '../schemas/chat.schema';
import { MessagesGateway } from './messages.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository, MessagesGateway],
  exports: [MessagesService, MessagesGateway],
})
export class MessagesModule {}
