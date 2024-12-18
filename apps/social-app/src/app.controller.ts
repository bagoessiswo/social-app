import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createProfile(
    @Body() request: CreateProfileRequest
  ) {
    return this.appService.createProfile(request)
  }
}
