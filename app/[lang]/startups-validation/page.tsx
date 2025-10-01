import Banner from '@/components/common/Banner';
import StartupFormForm from '@/components/startups-form/StartupFormForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Startups',
  description:
    'Explore the NovaNest Venture Startup Form and share your innovative ideas with us. We are interested in hearing from startups and entrepreneurs. Lets work together to bring your vision to life.'
};

export default function StartupValidationPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <div dir={t('dir')} className="relative overflow-hidden">
      <Banner
        image="/static/images/work-with-us/header.png"
        title={t('startUp', { returnObjects: true }).banner}
        lang={lang}
      />
      <div className="max-w-responsive mx-auto">
        <StartupFormForm lang={lang} />
      </div>
    </div>
  );
}
