import { Body, Param, Controller, Post, Put } from '@nestjs/common';
import { CreateProfileRequest } from './dto/create-profile.request';
import { ProfileService } from './profile.service';

@Controller('api/profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService
  ) {}

  @Post()
  async create(@Body() request: CreateProfileRequest) {
    return this.profileService.createProfile(request);
  }

  @Put()
  async update(@Param(':id') id: string, request: CreateProfileRequest) {
    return this.profileService.updateProfile(id, request)
  }
  
}
