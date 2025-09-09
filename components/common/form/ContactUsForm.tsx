import { getServerTranslation } from 'app/i18n';
import ContactUsFormClient from '@/components/common/form/ContactUsFormClient';

export default async function ContactUsFormWrapper({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = await getServerTranslation(lang, 'common');

  // Pass translations as props to client component
  const translations = {
    title: t('contactForm', { returnObjects: true }).title,
    subjectRequired: t('contactForm', { returnObjects: true }).subjectRequired,
    subjectPlaceholder: t('contactForm', { returnObjects: true }).subjectPlaceholder,
    messageRequired: t('contactForm', { returnObjects: true }).messageRequired,
    messagePlaceholder: t('contactForm', { returnObjects: true }).messagePlaceholder,
    sendingButton: t("sendingButton"),
    sendButton: t("sendButton"),
    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
  };

  return <ContactUsFormClient lang={lang} translations={translations} />;
}