import { getServerTranslation } from 'app/i18n';
import MentorRegistrationFormClient from '@/components/join-as-mentor/MentorRegistrationFormClient';

export default async function MentorRegistrationForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = await getServerTranslation(lang, 'countryInput');
  
  // Pass translations as props to client component
  const translations = {
    formTitle: t('joinUsForm', { returnObjects: true }).formTitle,
    formSubtitle: t('joinUsForm', { returnObjects: true }).formSubtitle,
    birthDate: t('birthDate'),
    birthDateErrorMessage: t('birthDateErrorMessage'),
    birthDatePlaceholder: t('birthDatePlaceholder'),
    preferredAreas: t('preferredAreas'),
    preferredAreasPlaceholder: t('preferredAreasPlaceholder'),
    preferredAreasRequired: t('preferredAreasRequired'),
    howDidYouKnowUs: t('howDidYouKnowUs'),
    howDidYouKnowUsPlaceholder: t('howDidYouKnowUsPlaceholder'),
    howDidYouKnowUsRequired: t('howDidYouKnowUsRequired'),
    sendButton: t('sendButton'),

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),

    countriesData: tCountry('countries'),
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),
    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder')
  };

  return <MentorRegistrationFormClient lang={lang} translations={translations} />;
}