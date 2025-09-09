import { getServerTranslation } from 'app/i18n';
import MentorRegistrationFormClient from '@/components/join-as-mentor/MentorRegistrationFormClient';

export default async function MentorRegistrationForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  
  // Pass translations as props to client component
  const translations = {
    formTitle: t('joinUsForm', { returnObjects: true }).formTitle,
    formSubtitle: t('joinUsForm', { returnObjects: true }).formSubtitle,
    birthDate: t('birthDate'),
    birthDateErrorMessage: t('birthDateErrorMessage'),
    birthDatePlaceholder: t('birthDatePlaceholder'),
    preferredAreas: t('preferredAreas'),
    preferredAreasPlaceholder: t('preferredAreasPlaceholder'),
    preferredAreasRequired: t('preferredAreasRequired'),
    howDidYouKnowUs: t('howDidYouKnowUs'),
    howDidYouKnowUsPlaceholder: t('howDidYouKnowUsPlaceholder'),
    howDidYouKnowUsRequired: t('howDidYouKnowUsRequired'),
    sendButton: t('sendButton')
  };

  return <MentorRegistrationFormClient lang={lang} translations={translations} />;
}