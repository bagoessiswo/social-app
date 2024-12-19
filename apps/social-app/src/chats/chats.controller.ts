import { Body, Param, Controller, Post, Get } from '@nestjs/common';
import { CreateChatRequest } from './dto/create-chat.request';
import { ChatsService } from './chats.service';

@Controller('api/chat')
export class ChatsController {
  constructor(
    private readonly chatService: ChatsService
  ) {}

  @Post()
  async create(@Body() request: CreateChatRequest) {
    return this.chatService.createChat(request);
  }

  @Get(':id')
  async getAllChatsByUserId(@Param(':id') id: string) {
    return await this.chatService.findAllChats(id);
  }

  
}
