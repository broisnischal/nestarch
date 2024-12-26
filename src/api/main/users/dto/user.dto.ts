import { i18nValidationMessage } from 'nestjs-i18n';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

const credentialsSchema = z.object({
  username: z.string({}),
  password: z.string(),
});

class ICredentialsDto extends createZodDto(credentialsSchema) {}

export { ICredentialsDto, credentialsSchema };

export class IUserDto extends ICredentialsDto {
  username: string;
}
