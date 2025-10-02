import { getServerTranslation } from 'app/i18n';
import JoinAsaPartnerFormClient from '@/components/partner-membership/JoinAsaPartnerFormClient';

export default function JoinAsaPartnerForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = getServerTranslation(lang, 'countryInput');

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
    successMessage: t('successMessage'),
    failedMessage: t('failedMessage'),

    countries: tCountry('countries', { returnObjects: true }),

    countryName: tCountry('countryName'),
    countryNameRequired: tCountry('countryNameRequired'),
    countryNamePlaceholder: tCountry('countryNamePlaceholder'),

    provinceOfResidence: tCountry('provinceOfResidence'),
    provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
    provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder'),

    cityOfResidence: tCountry('cityOfResidence'),
    cityOfResidenceRequired: tCountry('cityOfResidenceRequired'),
    cityOfResidencePlaceholder: tCountry('cityOfResidencePlaceholder'),

    website: t('website'),
    websiteRequired: t('websiteRequired'),
    websitePlaceholder: t('websitePlaceholder'),

    linkedin: t('linkedin'),
    linkedinRequired: t('linkedinRequired'),
    linkedinPlaceholder: t('linkedinPlaceholder'),

    breifIntroduction: t('breifIntroduction'),
    breifIntroductionRequired: t('breifIntroductionRequired'),
    breifIntroductionPlaceholder: t('breifIntroductionPlaceholder'),

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

    TypeOfCollaboration: t('TypeOfCollaboration'),
    TypeOfCollaborationRequired: t('TypeOfCollaborationRequired'),
    TypeOfCollaborationPlaceholder: t('TypeOfCollaborationPlaceholder'),

    FieldOfExpert: t('FieldOfExpert'),
    FieldOfExpertRequired: t('FieldOfExpertRequired'),
    FieldOfExpertPlaceholder: t('FieldOfExpertPlaceholder'),
  };

  return <JoinAsaPartnerFormClient lang={lang} translations={translations} />;
}