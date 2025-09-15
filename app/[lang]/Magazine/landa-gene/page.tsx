import Banner from '@/components/common/Banner';
import LandaGeneClient from '@/components/landa-gene/LandaGeneClient';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Landa Gene',
  description: ''
};

export default function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {

  const { t } = getServerTranslation(lang, 'landaGene');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');

  // Prepare all translations that the client component needs
  const translations = {
    // Content translations
    textUp: t('textUp'),
    textMid: t('textMid'),
    textDown: t('textDown'),
    formText: t('formText'),
    
    // Form field translations
    emailRequired: t('emailRequired'),
    emailErrorMessage: t('emailErrorMessage'),
    emailPlaceholder: t('emailPlaceholder'),
    companyNamePlaceholder: t('companyNamePlaceholder'),
    
    // Banner translation
    banner: t('banner'),

    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage'),
  };

  return (
    <div>
      <Banner
        image="/static/images/gene-desctop.jpg"
        title={translations.banner}
        lang={lang}
      />
      <div className="max-w-responsive mx-auto">
        <LandaGeneClient translations={translations} lang={lang} />
      </div>
    </div>
  );
}