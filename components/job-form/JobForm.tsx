import { getServerTranslation } from 'app/i18n';
import JobFormClient from '@/components/job-form/JobFormClient';

export default async function JobForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = await getServerTranslation(lang, 'common');

  // Pass translations as props to client component
  const translations = {
    formTitle: t('jobForm', { returnObjects: true }).formTitle,
    formSubtitle: t('jobForm', { returnObjects: true }).formSubtitle,
    resumeFile: t('jobForm', { returnObjects: true }).resumeFile,

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
  };

  return <JobFormClient lang={lang} translations={translations} />;
}