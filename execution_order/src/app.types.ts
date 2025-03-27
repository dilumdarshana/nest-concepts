import { IsEmail, IsNumber, IsString } from 'class-validator';

export class PostHelloDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;
}
