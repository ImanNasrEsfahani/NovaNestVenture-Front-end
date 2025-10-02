import { getServerTranslation } from 'app/i18n';
import AcademyApplicantFormClient from './AcademyApplicantFormClient';

export default function AcademyApplicantForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');

  // Pass translations as props to client component
  const translations = {
    formTitle: t("AcademyApplicantForm", { returnObjects: true }).formTitle,
    formSubtitle: t("AcademyApplicantForm", { returnObjects: true }).formSubtitle,

    sendingButton: t("sendingButton", { returnObjects: true }),
    ReserveButton: t("ReserveButton", { returnObjects: true }),
    sendButton: t("sendButton", { returnObjects: true }),

    successMessage: t('successMessage', { returnObjects: true }),
    failedMessage: t('failedMessage', { returnObjects: true }),

    firstName: t('firstName', { returnObjects: true }),
    firstNameRequired: t('firstNameRequired', { returnObjects: true }),
    firstNamePlaceholder: t('firstNamePlaceholder', { returnObjects: true }),

    lastName: t('lastName', { returnObjects: true }),
    lastNameRequired: t('lastNameRequired', { returnObjects: true }),
    lastNamePlaceholder: t('lastNamePlaceholder', { returnObjects: true }),
    
    email: t('email', { returnObjects: true }),
    emailRequired: t('emailRequired', { returnObjects: true }),
    emailErrorMessage: t('emailErrorMessage', { returnObjects: true }),
    emailPlaceholder: t('emailPlaceholder', { returnObjects: true }),

    phoneNumber: t('phoneNumber', { returnObjects: true }),
    phoneNumberRequired: t('phoneNumberRequired', { returnObjects: true }),
    phoneNumberErrorMessage: t('phoneNumberErrorMessage', { returnObjects: true }),
    phoneNumberPlaceholder: t('phoneNumberPlaceholder', { returnObjects: true }),

    TypeOfCollaboration: t('TypeOfCollaboration', { returnObjects: true }),
    TypeOfCollaborationRequired: t('TypeOfCollaborationRequired', { returnObjects: true }),
    TypeOfCollaborationPlaceholder: t('TypeOfCollaborationPlaceholder', { returnObjects: true }),
    TypeOfCollaborationData: t('TypeOfCollaborationData', { returnObjects: true }),

    FieldOfExpert: t('FieldOfExpert', { returnObjects: true }),
    FieldOfExpertRequired: t('FieldOfExpertRequired', { returnObjects: true }),
    FieldOfExpertPlaceholder: t('FieldOfExpertPlaceholder', { returnObjects: true }),
    FieldOfExpertData: t('FieldOfExpertData', { returnObjects: true }),
  };

  return <AcademyApplicantFormClient lang={lang} translations={translations} />;
}