import { getServerTranslation } from 'app/i18n';
import AccelerationApplicantFormClient from './AccelerationApplicantFormClient';

export default function AcademyApplicantForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCountry } = getServerTranslation(lang, 'countryInput');
  
  // Pass translations as props to client component
  const translations = {
    formTitle: t("AccelerationApplicantForm", { returnObjects: true }).formTitle,
    formSubtitle: t("AccelerationApplicantForm", { returnObjects: true }).formSubtitle,
    formDescription: t("AccelerationApplicantForm", { returnObjects: true }).formDescription,

    sendingButton: t("sendingButton"),
    ReserveButton: t("ReserveButton"),
    sendButton: t("sendButton"),

    successMessage: t('successMessage'),
    failedMessage: t('failedMessage'),

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

    TypeOfCollaboration: t('TypeOfCollaboration'),
    TypeOfCollaborationRequired: t('TypeOfCollaborationRequired'),
    TypeOfCollaborationPlaceholder: t('TypeOfCollaborationPlaceholder'),
    TypeOfCollaborationData: t('TypeOfCollaborationData', { returnObjects: true }),

    FieldOfExpert: t('FieldOfExpert'),
    FieldOfExpertRequired: t('FieldOfExpertRequired'),
    FieldOfExpertPlaceholder: t('FieldOfExpertPlaceholder'),
    FieldOfExpertData: t('FieldOfExpertData', { returnObjects: true }),
  };
  
  return <AccelerationApplicantFormClient lang={lang} translations={translations} />;
}