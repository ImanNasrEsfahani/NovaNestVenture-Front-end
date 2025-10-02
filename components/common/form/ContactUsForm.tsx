import { getServerTranslation } from 'app/i18n';
import ContactUsFormClient from '@/components/common/form/ContactUsFormClient';

export default function ContactUsFormWrapper({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');

  // Pass translations as props to client component
  const translations = {
    title: t('contactForm', { returnObjects: true }).title,
    subjectRequired: t('contactForm', { returnObjects: true }).subjectRequired,
    subjectPlaceholder: t('contactForm', { returnObjects: true }).subjectPlaceholder,
    messageRequired: t('contactForm', { returnObjects: true }).messageRequired,
    messagePlaceholder: t('contactForm', { returnObjects: true }).messagePlaceholder,
    sendingButton: t("sendingButton"),
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

    TypeOfCollaboration: t('TypeOfCollaboration'),
    TypeOfCollaborationRequired: t('TypeOfCollaborationRequired'),
    TypeOfCollaborationPlaceholder: t('TypeOfCollaborationPlaceholder'),
    TypeOfCollaborationData: t('TypeOfCollaborationData', { returnObjects: true }) || [],
    
    FieldOfExpert: t('FieldOfExpert'),
    FieldOfExpertRequired: t('FieldOfExpertRequired'),
    FieldOfExpertPlaceholder: t('FieldOfExpertPlaceholder'),
    FieldOfExpertData: t('FieldOfExpertData', { returnObjects: true }) || [],
  };

  return <ContactUsFormClient lang={lang} translations={translations} />;
}