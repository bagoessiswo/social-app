import { IsNotEmpty, IsArray, ArrayNotEmpty, MinLength } from 'class-validator';

export class CreateChatRequest {
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty({ each: true })
  @MinLength(1)
  members: Array<string>;
}