import Banner from '../../../components/common/Banner';
import StartupFormForm from '../../../components/StartupsForm/StartupFormForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import { LandaBgBig } from 'public/static/logos/LandaBgBig';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Startups',
  description:
    'Explore the NovaNest Venture Startup Form and share your innovative ideas with us. We are interested in hearing from startups and entrepreneurs. Lets work together to bring your vision to life.'
};

async function getPageTranslations(lang: string) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  return t;
}

export default async function StartupValidationPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const t = await getPageTranslations(lang);

  return (
    <div dir={t('dir')} className="relative overflow-hidden">
      <div className="hidden lg:block rotate-[1.3deg] w-auto h-auto absolute right-0 top-1/2">
        <LandaBgBig />
      </div>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={t('startUp', { returnObjects: true }).banner}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto">
        <StartupFormForm />
      </div>
    </div>
  );
}
