import { getServerTranslation } from 'app/i18n';
import PNPApplicantFormClient from './PNPApplicantFormClient';

export default function PNPApplicantForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');

  // Pass translations as props to client component
  const translations = {
    formTitle: t("PNPApplicantForm", { returnObjects: true }).formTitle,
    formSubtitle: t("PNPApplicantForm", { returnObjects: true }).formSubtitle,

    sendingButton: t("sendingButton"),
    sendButton: t("sendButton"),

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
  };

  return <PNPApplicantFormClient lang={lang} translations={translations} />;
}