import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './setting';
// import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
// import i18next from 'i18next';


const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(lng, ns)
    });
  return i18nInstance;
};

// const initI18next = async (lng: any, ns: any) => {
//   const i18nInstance = createInstance();
//   await i18nInstance
//     .use(initReactI18next)
//     .use(i18nextBrowserLanguagedetector)
//     .use(
//       resourcesToBackend(
//         (language: any, namespace: any) =>
//           import(`./locales/${language}/${namespace}.json`)
//       )
//     )
//     .init({
//       backend: {
//         loadPath: './locales/{{lng}}/{{ns}}.json' 
//       },
//       cache: {
//         enabled: true,
//         prefix: 'i18n',
//       },
//       detection: {
//         order: ['path', 'cookie', 'navigator'],
//         caches: ['cookie'],
//         lookupFromPathIndex: 0
//       },
//       ...getOptions(lng, ns)
//     });
//     // preload languages
//     // i18next.loadLanguages('en'); 
//     // i18next.loadLanguages('fa');
//   return i18nInstance;
// };

export function getServerTranslation(
  lng: string | undefined,
  ns: string | string[],
  options: { keyPrefix?: string } = {}
) {
  const safeLang = lng ?? 'en'; // fallback if undefined
  
  return initI18next(safeLang, ns).then(i18nextInstance => {
    const primaryNs = (Array.isArray(ns) ? ns[0] : ns) as any;
    return {
      t: i18nextInstance.getFixedT(
        safeLang,
        primaryNs,
        options.keyPrefix
      ),
      i18n: i18nextInstance
    };
  });
}