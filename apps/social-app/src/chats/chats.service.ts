import { Injectable } from '@nestjs/common';
import { CreateChatRequest } from './dto/create-chat.request';
import { ChatsRepository } from './chats.repository';

@Injectable()
export class ChatsService {
  constructor(
    private readonly chatsRepository: ChatsRepository
  ) {}
  
  async createChat(request: CreateChatRequest) {
    return this.chatsRepository.createChat(request)
  }

  async findAllChats(id: string) {
    return await this.chatsRepository.findAllChats(id);
  }
}
