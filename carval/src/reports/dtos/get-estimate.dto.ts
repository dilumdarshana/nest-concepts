import { IsString, IsNumber, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1900)
  @Max(2050)
  year: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(1000)
  mileage: number;
}
