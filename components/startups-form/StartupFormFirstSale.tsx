import { getServerTranslation } from 'app/i18n';
import StartupFormFirstSaleClient from '@/components/startups-form/StartupFormFirstSaleClient';

export default async function StartupFormFirstSale({
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
  const { t } = await getServerTranslation(lang, 'formComponent');
  
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
    financialFile: t('startUp', { returnObjects: true }).financialFile,
    financialFileRequired: t('startUp', { returnObjects: true }).financialFileRequired
  };

  return (
    <StartupFormFirstSaleClient 
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