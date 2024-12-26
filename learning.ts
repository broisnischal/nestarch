// import { I18nService, Path } from 'nestjs-i18n';
// import validationJson from './src/i18n/en/validation.json';

// // Helper to extract argument names from the translation string
// type ExtractArgs<T extends string> =
//   T extends `${string}{${infer Arg}}${string}`
//     ? Arg | ExtractArgs<`${string}${infer Rest}`>
//     : never;

// // Type to extract all argument names for a given translation key
// type Args<Key extends keyof I18nTranslation['validation']> = ExtractArgs<
//   I18nTranslation['validation'][Key]
// >;

// // Type to define the structure of args for each translation key
// type ArgValue<Key extends keyof I18nTranslation['validation']> = {
//   [K in Args<Key>]: string | number;
// };

// // Type-safe getUtil function
// export function getUtil<Key extends I18nPath>(
//   i18n: I18nService<I18nTranslation>,
//   key: Key,
//   args: Path<ArgValue<Key>>,
// ): string {
//   return i18n.t(key, { args });
// }
