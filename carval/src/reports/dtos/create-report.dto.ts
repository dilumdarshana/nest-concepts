import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateReportDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1900)
  @Max(2050)
  year: number;

  @IsNumber()
  @Min(0)
  @Max(1000)
  mileage: number;

  @IsNumber()
  @Min(100)
  @Max(1000000)
  price: number;
}
