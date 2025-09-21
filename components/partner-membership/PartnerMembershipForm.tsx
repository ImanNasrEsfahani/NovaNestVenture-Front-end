import { getServerTranslation } from 'app/i18n';
import PartnerMembershipFormClient from '@/components/partner-membership/PartnerMembershipFormClient';

export default function PartnerMembershipForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');
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
    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),

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

  return <PartnerMembershipFormClient lang={lang} translations={translations} />;
}