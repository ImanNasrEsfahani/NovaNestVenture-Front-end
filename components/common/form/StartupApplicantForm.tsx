import { getServerTranslation } from 'app/i18n';
import StartupApplicantFormClient from './StartupApplicantFormClient';

export default function StartupApplicantForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');

  // Pass translations as props to client component
  const translations = {
    formTitle: t("startupApplicantForm", { returnObjects: true }).formTitle,
    formSubtitle: t("startupApplicantForm", { returnObjects: true }).formSubtitle,

    sendingButton: t("sendingButton"),
    sendButton: t("sendButton"),

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
  };

  return <StartupApplicantFormClient lang={lang} translations={translations} />;
}