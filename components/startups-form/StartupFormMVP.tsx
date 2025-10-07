import { getServerTranslation } from 'app/i18n';
import StartupFormMVPClient from '@/components/startups-form/StartupFormMVPClient';

export default function StartupFormMVP({
  lang,
  register,
  errors,
  handlePitchFileChange,
  handleBusinessFileChange,
  handleFinancialFileChange
}: {
  lang: string;
  register: any;
  errors: any;
  handlePitchFileChange: any;
  handleBusinessFileChange: any;
  handleFinancialFileChange: any;
}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  
  // Pass translations as props to client component
  const translations = {
    pitchDeck: t('startUp', { returnObjects: true }).pitchDeck,
    pitchDeckRequired: t('startUp', { returnObjects: true }).pitchDeckRequired,
    businessPlan: t('startUp', { returnObjects: true }).businessPlan,
    businessPlanRequired: t('startUp', { returnObjects: true }).businessPlanRequired,
    productName: t('startUp', { returnObjects: true }).productName,
    productNameRequired: t('startUp', { returnObjects: true }).productNameRequired,
    productNamePlaceholder: t('startUp', { returnObjects: true }).productNamePlaceholder,
    siteAddress: t('startUp', { returnObjects: true }).siteAddress,
    siteAddressRequired: t('startUp', { returnObjects: true }).siteAddressRequired,
    siteAddressPlaceholder: t('startUp', { returnObjects: true }).siteAddressPlaceholder,
    cooperatedWithInvestors: t('startUp', { returnObjects: true }).cooperatedWithInvestors,
    cooperatedWithInvestorsPlaceholder: t('startUp', { returnObjects: true }).cooperatedWithInvestorsPlaceholder,
    cooperatedWithInvestorsErrorMessage: t('startUp', { returnObjects: true }).cooperatedWithInvestorsErrorMessage,
    howDidYouKnowUs: t('howDidYouKnowUs'),
    howDidYouKnowUsPlaceholder: t('howDidYouKnowUsPlaceholder'),
    howDidYouKnowUsRequired: t('howDidYouKnowUsRequired'),
    howDidYouKnowUsErrorMessage: t('howDidYouKnowUsErrorMessage')
  };

  return (
    <StartupFormMVPClient 
      lang={lang}
      translations={translations}
      register={register}
      errors={errors}
      handlePitchFileChange={handlePitchFileChange}
      handleBusinessFileChange={handleBusinessFileChange}
      handleFinancialFileChange={handleFinancialFileChange}
    />
  );
}