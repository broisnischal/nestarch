import { I18nTranslations, I18nPath as I18nPathh } from 'i18n';

declare global {
  namespace NodeJS {}

  namespace Express {
    interface Request {}
  }

  interface I18nTranslation extends I18nTranslations {}

  interface I18nPath extends I18nPathh {}

  type File = Express.Multer.File;
}
