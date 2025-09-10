import { getServerTranslation } from 'app/i18n';
import PartnerMembershipFormClient from '@/components/partner-membership/PartnerMembershipFormClient';

export default async function PartnerMembershipForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = await getServerTranslation(lang, 'countryInput');
  
  // Pass translations as props to client component
  const translations = {
    formTitle: t('partnerForm', { returnObjects: true }).formTitle,
    formSubtitle: t('partnerForm', { returnObjects: true }).formSubtitle,
    birthDate: t('birthDate'),
    birthDateErrorMessage: t('birthDateErrorMessage'),
    birthDatePlaceholder: t('birthDatePlaceholder'),
    companyName: t('companyName'),
    companyNameRequired: t('companyNameRequired'),
    companyNamePlaceholder: t('companyNamePlaceholder'),
    investmentCeiling: t('investmentCeiling'),
    investmentCeilingRequired: t('investmentCeilingRequired'),
    investmentCeilingPlaceholder: t('investmentCeilingPlaceholder'),
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

  return <PartnerMembershipFormClient lang={lang} translations={translations} />;
}