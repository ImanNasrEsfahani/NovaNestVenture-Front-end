import { getServerTranslation } from 'app/i18n';
import HandicraftFormClient from '@/components/common/form/HandicraftFormClient';

export default async function HandicraftForm({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'handicraft');
  
  // Pass translations as props to client component
  const translations = {
    button: t('button')
  };

  return <HandicraftFormClient lang={lang} translations={translations} />;
}