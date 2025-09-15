import { getServerTranslation } from 'app/i18n';
import InvestorRegistrationFormClient from '@/components/investor-registration/InvestorRegistrationFormClient';

export default function InvestorRegistrationForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = getServerTranslation(lang, 'countryInput');

  // Pass translations as props to client component
  const translations = {
    formTitle: t('investorForm', { returnObjects: true }).formTitle,
    formDescriptionStart: t('investorForm', { returnObjects: true }).formDescriptionStart,
    formList: t('investorForm', { returnObjects: true }).formList,
    formDescriptionEnd: t('investorForm', { returnObjects: true }).formDescriptionEnd,
    
    formSubtitle: t('investorForm', { returnObjects: true }).formSubtitle,
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

    countries: tCountry('countries', { returnObjects: true }),
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),
    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder')
  };

  return <InvestorRegistrationFormClient lang={lang} translations={translations} />;
}