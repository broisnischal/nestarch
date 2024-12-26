import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService<I18nTranslation>) {}

  getHello(): string {
    // $t(validation.{property}) cannot be empty

    const message = this.i18n.t('validation.NOT_EMPTY', {
      args: {},
    });

    console.log(message);

    return this.i18n.t('test.HELLO');
  }
}
