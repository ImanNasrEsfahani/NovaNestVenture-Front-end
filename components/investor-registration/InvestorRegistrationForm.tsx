import { getServerTranslation } from 'app/i18n';
import InvestorRegistrationFormClient from '@/components/investor-registration/InvestorRegistrationFormClient';

export default async function InvestorRegistrationFormWrapper({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  
  // Pass translations as props to client component
  const translations = {
    formTitle: t('investorForm', { returnObjects: true }).formTitle,
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
    sendButton: t('sendButton')
  };

  return <InvestorRegistrationFormClient lang={lang} translations={translations} />;
}