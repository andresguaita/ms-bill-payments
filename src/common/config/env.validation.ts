import {Logger} from '@nestjs/common';
import {plainToClass} from 'class-transformer';
import {IsNumber, validateSync, IsString, IsOptional} from 'class-validator';

/* Por favor incluye todas las variables de entorno necesarias para ejecutar el proyecto */
class EnvironmentVariables {
  @IsNumber()
  @IsOptional()
  PORT!: number;

  @IsString()
  APP_ENV!: string;

  @IsString()
  AWS_REGION!: string;

 
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    const variables = errors.map(error => error.property);
    Logger.error('Configuration error.', variables);

    throw new Error(
      'You do not have the necessary configuration to run the microservice.'
    );
  }

  return validatedConfig;
}
