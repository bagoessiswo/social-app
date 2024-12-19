import { Body, Param, Controller, Post, Get } from '@nestjs/common';
import { CreateMessageRequest } from './dto/create-message.request';
import { MessagesService } from './messages.service';

@Controller('api/messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService
  ) {}

  @Post()
  async create(@Body() request: CreateMessageRequest) {
    return this.messagesService.createMessage(request);
  }

  @Get(':id')
  async getAllMessagesByChatId(@Param('id') id: string) {
    return await this.messagesService.findAllMessages(id);
  }

  
}
