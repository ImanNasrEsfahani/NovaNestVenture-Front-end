import { getServerTranslation } from 'app/i18n';
import EntrepreneursFormClient from '@/components/entrepreneurs/EntrepreneursFormClient';

export default async function EntrepreneursForm({lang}: {lang: string}) {

  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = await getServerTranslation(lang, 'countryInput');

  // Add logging
  console.log('Countries data type:', typeof tCountry('countries', { returnObjects: true }));
  console.log('Countries data:', tCountry('countries', { returnObjects: true }));
  console.log('Is array:', Array.isArray(tCountry('countries', { returnObjects: true })));

  // Pass translations as props to client component
  const translations = {
    formTitle: t('entrepreneurForm', { returnObjects: true }).formTitle,
    formSubtitle: t('entrepreneurForm', { returnObjects: true }).formSubtitle,
    birthDate: t('birthDate'),
    birthDateErrorMessage: t('birthDateErrorMessage'),
    birthDatePlaceholder: t('birthDatePlaceholder'),
    companyName: t('companyName'),
    companyNameRequired: t('companyNameRequired'),
    companyNamePlaceholder: t('companyNamePlaceholder'),
    maximumInvestment: t('maximumInvestment'),
    maximumInvestmentRequired: t('maximumInvestmentRequired'),
    maximumInvestmentPlaceholder: t('maximumInvestmentPlaceholder'),
    preferredAreas: t('preferredAreas'),
    preferredAreasPlaceholder: t('preferredAreasPlaceholder'),
    preferredAreasRequired: t('preferredAreasRequired'),
    howDidYouKnowUs: t('howDidYouKnowUs'),
    howDidYouKnowUsPlaceholder: t('howDidYouKnowUsPlaceholder'),
    howDidYouKnowUsRequired: t('howDidYouKnowUsRequired'),
    sendButton: t('sendButton'),

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),

    countriesData: tCountry('countries', { returnObjects: true }),
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),
    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder')
  };

  return <EntrepreneursFormClient lang={lang} translations={translations} />;
}