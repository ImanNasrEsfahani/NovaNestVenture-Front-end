import { getServerTranslation } from 'app/i18n';
import InvestorRegistrationFormClient from '@/components/investor-registration/InvestorRegistrationFormClient';

export default function InvestorRegistrationForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = getServerTranslation(lang, 'countryInput');
  // const { t: tInvestment } = getServerTranslation(lang, 'investment');

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
    successMessage: t('successMessage'),
    failedMessage: t('failedMessage'),

    countries: tCountry('countries', { returnObjects: true }),
    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),
    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder'),

    
    INTERN: t('INTERN'),
    EMPLOYEE: t('EMPLOYEE'),

    Developer: t('Developer'),
    Marketing: t('Marketing'),
    Graphist: t('Graphist'),
    Immigration: t('Immigration'),
    Accountant: t('Accountant'),
    Administrative: t('Administrative'),

    firstName: t('firstName'),
    firstNameRequired: t('firstNameRequired'),
    firstNamePlaceholder: t('firstNamePlaceholder'),

    lastName: t('lastName'),
    lastNameRequired: t('lastNameRequired'),
    lastNamePlaceholder: t('lastNamePlaceholder'),
    
    email: t('email'),
    emailRequired: t('emailRequired'),
    emailErrorMessage: t('emailErrorMessage'),
    emailPlaceholder: t('emailPlaceholder'),

    phoneNumber: t('phoneNumber'),
    phoneNumberRequired: t('phoneNumberRequired'),
    phoneNumberErrorMessage: t('phoneNumberErrorMessage'),
    phoneNumberPlaceholder: t('phoneNumberPlaceholder'),

    jobPosition: t('jobPosition'),
    jobPositionRequired: t('jobPositionRequired'),
    jobPositionPlaceholder: t('jobPositionPlaceholder'),

    application: t('application'),
    applicationRequired: t('applicationRequired'),
    applicationPlaceholder: t('applicationPlaceholder'),
  };


  return (
  <>
    <div className='max-w-responsive mx-auto'>
      <h1 className="font-header text-4xl font-bold text-center text-gray-800 mb-4 mt-20">
        Become a NovaNest Venture Investor
      </h1>

      <div className="text-xl mb-8">
        <p className="font-bold text-center text-gray-500 mb-12">
          Would you like to access unique investment opportunities? By joining the NovaNest Venture Investor Network, you will not only gain early access to innovative projects but also enjoy exclusive benefits, including:
        </p>
        
        <ul className="list-disc list-inside space-y-2 font-base">
          <li>Early access to high-potential startups and projects</li>
          <li>In-depth market analyses and exclusive reports</li>
          <li>A diverse portfolio of opportunities with varying risk and return levels</li>
          <li>Direct interaction with founders and access to a professional network</li>
          <li>Full transparency in the investment process and returns</li>
        </ul>

        <p className="mt-8">
          To take advantage of these opportunities, please complete the form below. Our team will contact you shortly.
        </p>
    </div>
    <InvestorRegistrationFormClient lang={lang} translations={translations} />
    </div>
  </>
  );
}