import { getServerTranslation } from 'app/i18n';
import StartupFormFormClient from '@/components/startups-form/StartupFormFormClient';

export default function StartupFormForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = getServerTranslation(lang, 'countryInput');
  
  // Pass translations as props to client component
  const translations = {
    secondTitle: t('startUp', { returnObjects: true }).secondTitle,
    IDEA: t('IDEA'),
    TRIAL: t('TRIAL'),
    MVP: t('MVP'),
    FisrtSale: t('FisrtSale'),
    SaleDevelopment: t('SaleDevelopment'),
    sendButton: t('sendButton'),
    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
    
    formTitle: t('startUp', { returnObjects: true }).formTitle,
    formSubtitle: t('startUp', { returnObjects: true }).formSubtitle,

    countries: tCountry('countries', { returnObjects: true }),
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),
    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder')
  };

  return <StartupFormFormClient lang={lang} translations={translations} />;
}