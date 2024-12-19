import { Injectable } from '@nestjs/common';
import { CreateProfileRequest } from './dto/create-profile.request';
import { ProfileRepository } from './profile.repository';
import { User } from '../schemas/user.schema';

@Injectable()
export class ProfileService {
  constructor(
    private readonly profileRepository: ProfileRepository
  ) {}
  
  async createProfile(request: CreateProfileRequest) {
    return this.profileRepository.create(request)
  }

  async getProfile(user: User) {
    return this.profileRepository.find({
      user: user._id
    })
  }

  async updateProfile(id: string, request: CreateProfileRequest) {
    return this.profileRepository.upsert({ _id: id}, request)
  }
}
