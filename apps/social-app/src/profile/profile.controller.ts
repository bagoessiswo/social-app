import { Body, Param, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { CreateProfileRequest } from './dto/create-profile.request';
import { JwtAuthGuard } from '@app/common';
import { ProfileService } from './profile.service';

@Controller('api/profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() request: CreateProfileRequest) {
    return this.profileService.createProfile(request);
  }

  @Put()
  async update(@Param(':id') id: string, request: CreateProfileRequest) {
    return this.profileService.updateProfile(id, request)
  }
  
}
