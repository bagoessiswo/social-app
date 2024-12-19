import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageRequest {
  @IsNotEmpty()
  @IsString()
  chat_id: string;

  @IsNotEmpty()
  @IsString()
  sender_id: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}