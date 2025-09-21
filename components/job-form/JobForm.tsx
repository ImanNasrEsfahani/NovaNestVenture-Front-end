import { getServerTranslation } from 'app/i18n';
import JobFormClient from '@/components/job-form/JobFormClient';

export default function JobForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');

  // Pass translations as props to client component
  const translations = {
    formTitle: t('jobForm', { returnObjects: true }).formTitle,
    formSubtitle: t('jobForm', { returnObjects: true }).formSubtitle,
    resumeFile: t('jobForm', { returnObjects: true }).resumeFile,

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
    
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

  return <JobFormClient lang={lang} translations={translations} />;
}