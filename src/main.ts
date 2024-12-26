import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';
import { CustomZodValidationPipe } from './common/pipes';
import { ZodValidationExceptionFilter } from './common/pipes/zod-validation.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new I18nValidationPipe());

  app.useGlobalFilters(
    new I18nValidationExceptionFilter({
      detailedErrors: false,
    }),
  );

  app.useGlobalPipes(new CustomZodValidationPipe());

  app.useGlobalFilters(new ZodValidationExceptionFilter());

  await app.listen(3000);
}
bootstrap();
