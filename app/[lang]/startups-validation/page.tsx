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
    <>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/startup-validation-form/header.png"
          title={t('startUp', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/startup-validation-form/header-mobile.png"
          title={t('startUp', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>

      <div className="max-w-responsive mx-auto">
        <StartupFormForm lang={lang} />
      </div>
    </>
  );
}
