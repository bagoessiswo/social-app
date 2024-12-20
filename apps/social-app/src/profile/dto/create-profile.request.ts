import { IsArray, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { User } from "../../schemas/user.schema";
export class CreateProfileRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  birthday: string;

  @IsString()
  horoscope: string;

  @IsString()
  zodiac: string;

  @IsPositive()
  height: number;

  @IsPositive()
  weight: number;

  @IsArray()
  interest: Array<string>;

  @IsString()
  @IsNotEmpty()
  user: User;
}