import { getServerTranslation } from 'app/i18n';
import StartupFormFormClient from '@/components/startups-form/StartupFormFormClient';

export default function StartupFormForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
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
    successMessage: t('successMessage'),
    failedMessage: t('failedMessage'),
    
    formTitle: t('startUp', { returnObjects: true }).formTitle,
    formSubtitle: t('startUp', { returnObjects: true }).formSubtitle,

    countries: tCountry('countries', { returnObjects: true }) || [],
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),

    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder'),

    cityOfResidence: tCountry('cityOfResidence'),
    cityOfResidenceRequired: tCountry('cityOfResidenceRequired'),
    cityOfResidencePlaceholder: tCountry('cityOfResidencePlaceholder'),

    accelerators: t('startUp', { returnObjects: true }).commons.accelerators,
    acceleratorsRequired: t('startUp', { returnObjects: true }).commons.acceleratorsRequired,
    acceleratorsPlaceholder: t('startUp', { returnObjects: true }).commons.acceleratorsPlaceholder,
    howDidYouKnowUs: t('startUp', { returnObjects: true }).commons.knowUs,
    howDidYouKnowUsRequired: t('startUp', { returnObjects: true }).commons.KnowUsRequired,
    howDidYouKnowUsPlaceholder: t('startUp', { returnObjects: true }).commons.KnowUsPlaceholder,
  };

  return (
    <div className="max-w-responsive mx-auto py-20">
        <h1 className="font-header text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 mt-12">
          {t('startUp', { returnObjects: true }).formHeader}
        </h1>
        {(t('startUp', { returnObjects: true }).formContent || []).map((paragraph: string, index: number) => (
          <p key={index} className="text-lg mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}

      <StartupFormFormClient lang={lang} translations={translations} />
    </div>
  );
}