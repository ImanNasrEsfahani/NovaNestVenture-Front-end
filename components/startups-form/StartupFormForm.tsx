import { getServerTranslation } from 'app/i18n';
import StartupFormFormClient from './StartupFormFormClient';

export default async function StartupFormForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = await getServerTranslation(lang, 'common');
  const { t: tCountry } = await getServerTranslation(lang, 'country');
  
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
    
    // countriesData: tCountry('countries'),
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),
    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder')
  };

  return <StartupFormFormClient lang={lang} translations={translations} />;
}