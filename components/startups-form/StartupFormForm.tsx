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

    countries: tCountry('countries', { returnObjects: true }),
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),
    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder'),

    howDidYouKnowUs: t('howDidYouKnowUs'),
    howDidYouKnowUsRequired: t('howDidYouKnowUsRequired'),
    howDidYouKnowUsPlaceholder: t('howDidYouKnowUsPlaceholder'),
  };

  return (
    <div className="max-w-responsive mx-auto py-20">
        <h1 className="font-header text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 mt-12">
          Join the NovaNest Venture Startup Network
        </h1>
        <p className="text-lg mb-4 leading-relaxed">
          Thank you for your interest in seeking investment from NovaNest. This form is designed to help us understand your startup, its potential, and your vision as an entrepreneur. By providing detailed and accurate information, you enable our team to evaluate your business efficiently and fairly.
        </p>
        
        <p className="text-base mb-4 leading-relaxed">
          Please take your time to answer all questions thoughtfully. The information you provide will remain confidential and will only be used for the purpose of investment evaluation.
        </p>
        
        <p className="text-base leading-relaxed">
          Completing this form is the first step toward a potential partnership and investment with us. We look forward to learning more about your startup and exploring how we can support your growth.
        </p>
      <StartupFormFormClient lang={lang} translations={translations} />
    </div>
  );
}