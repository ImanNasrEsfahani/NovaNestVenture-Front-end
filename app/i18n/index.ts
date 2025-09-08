import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './setting';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
// import i18next from 'i18next';

const initI18next = async (lng: any, ns: any) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(i18nextBrowserLanguagedetector)
    .use(
      resourcesToBackend(
        (language: any, namespace: any) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init({
      backend: {
        loadPath: './locales/{{lng}}/{{ns}}.json' 
      },
      cache: {
        enabled: true,
        prefix: 'i18n',
      },
      detection: {
        order: ['path', 'cookie', 'navigator'],
        caches: ['cookie'],
        lookupFromPathIndex: 0
      },
      ...getOptions(lng, ns)
    });
    // preload languages
    // i18next.loadLanguages('en'); 
    // i18next.loadLanguages('fa');
  return i18nInstance;
};

export async function getServerTranslation(
  lng: string | undefined,
  ns: string | string[],
  options: { keyPrefix?: string } = {}
) {
  const safeLang = lng ?? 'en'; // fallback if undefined
  const i18nextInstance = await initI18next(safeLang, ns);
  const primaryNs = (Array.isArray(ns) ? ns[0] : ns) as any; // cast to Namespace
  return {
    t: i18nextInstance.getFixedT(
      safeLang,
      primaryNs,
      options.keyPrefix
    ),
    i18n: i18nextInstance
  };
}