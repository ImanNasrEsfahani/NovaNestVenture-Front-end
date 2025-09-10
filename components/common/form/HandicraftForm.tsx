import { getServerTranslation } from 'app/i18n';
import HandicraftFormClient from '@/components/common/form/HandicraftFormClient';

export default function HandicraftForm({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'handicraft');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');

  // Pass translations as props to client component
  const translations = {
    button: t('button'),

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
  };

  return <HandicraftFormClient lang={lang} translations={translations} />;
}