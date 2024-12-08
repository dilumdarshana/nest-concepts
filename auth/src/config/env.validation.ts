import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNotEmpty()
  NODE_ENV: string;

  @IsNotEmpty()
  APP_PORT: number;

  @IsNotEmpty()
  DATABASE_URL: string;

  @IsNotEmpty()
  JWT_SECRET: string;

  @IsNotEmpty()
  JWT_EXPIRATION: string;

  @IsNotEmpty()
  JWT_REFRESH_SECRET: string;

  @IsNotEmpty()
  JWT_REFRESH_EXPIRATION: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) throw new Error(errors.toString());

  return validatedConfig;
}
