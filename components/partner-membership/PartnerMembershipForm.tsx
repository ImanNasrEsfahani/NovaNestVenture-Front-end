import { getServerTranslation } from 'app/i18n';
import PartnerMembershipFormClient from '@/components/partner-membership/PartnerMembershipFormClient';

export default async function PartnerMembershipForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = await getServerTranslation(lang, 'common');
  const { t: tCountry } = await getServerTranslation(lang, 'country');
  
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
    countriesData: tCountry('countries',{ returnObjects: true })
  };

  return <PartnerMembershipFormClient lang={lang} translations={translations} />;
}