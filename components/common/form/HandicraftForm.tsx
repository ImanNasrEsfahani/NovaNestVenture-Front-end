import { getServerTranslation } from 'app/i18n';
import HandicraftFormClient from '@/components/common/form/HandicraftFormClient';

export default async function HandicraftForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'handicraft');
  const { t: tCommon } = await getServerTranslation(lang, 'common');

  // Pass translations as props to client component
  const translations = {
    button: t('button'),

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
  };

  return <HandicraftFormClient lang={lang} translations={translations} />;
}