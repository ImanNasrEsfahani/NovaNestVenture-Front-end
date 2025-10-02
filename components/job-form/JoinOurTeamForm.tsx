import { getServerTranslation } from 'app/i18n';
import JoinOurTeamFormClient from '@/components/job-form/JoinOurTeamFormClient';

export default function JoinOurTeamForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');

  // Pass translations as props to client component
  const translations = {
    
    formTitle: t('join-our-team', { returnObjects: true }).formTitle,
    formSubtitle: t('join-our-team', { returnObjects: true }).formSubtitle,
    resumeFile: t('join-our-team', { returnObjects: true }).resumeFile,
    choseFile: t('join-our-team', { returnObjects: true }).choseFile,
    
    successMessage: t('successMessage'),
    failedMessage: t('failedMessage'),
    
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

    title: t('join-our-team', { returnObjects: true }).resumeQuestion,
    yesLabel: t('yes'),
    noLabel: t('no'),

    birthDate: t('birthDate'),
    birthDateRequired: t('birthDateRequired'),
    birthDateErrorMessage: t('birthDateErrorMessage'),
    birthDatePlaceholder: t('birthDatePlaceholder'),

    EducationLevels: t('EducationLevels'),
    EducationLevelsRequired: t('EducationLevelsRequired'),
    EducationLevelsPlaceholder: t('EducationLevelsPlaceholder'),

    EducationField: t('EducationField'),
    EducationFieldRequired: t('EducationFieldRequired'),
    EducationFieldPlaceholder: t('EducationFieldPlaceholder'),
    
    workHistorySummary: t('workHistorySummary'),
    workHistorySummaryRequired: t('workHistorySummaryRequired'),
    workHistorySummaryPlaceholder: t('workHistorySummaryPlaceholder'),

  };

  return <JoinOurTeamFormClient lang={lang} translations={translations} />;
}