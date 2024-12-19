import { Injectable } from '@nestjs/common';
import { CreateMessageRequest } from './dto/create-message.request';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(
    private readonly messagesRepository: MessagesRepository
  ) {}
  
  async createMessage(request: CreateMessageRequest) {
    return this.messagesRepository.create(request)
  }

  async findAllMessages(id: string) {
    return await this.messagesRepository.findAllMessages(id);
  }
}
