import { IsEmail, IsString, minLength, IsNotEmpty, isNotEmpty } from 'class-validator';

export class SignupPayloadDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
