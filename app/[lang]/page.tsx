import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import SpecialFeatures from '@/components/home/SpecialFeatures';
import Differentiators from '@/components/about/Differentiators';
import Priority from '@/components/home/Priority';
import LatestStartups from '@/components/home/LatestStartups';
import HalvesCards from '@/components/home/HalvesCards';
import HomeCardsContainer from '@/components/home/HomeCardsContainer';
import Academy from '@/components/home/Academy';
import AboutUs from '@/components/home/AboutUs';

import { getServerTranslation } from 'app/i18n';

import ButtonRefactor from '@/components/common/ButtonRefactor';

import OurStartupService from '@/components/startup/OurStartupService';
import Intro from "@/components/common/Intro";
import OurPNPService from '@/components/pnp/OurPNPService';

export const metadata: Metadata = {
  title: 'NovaNest Venture',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({ params }: { params: { lang: string } }) {
  const { t } = getServerTranslation(params.lang, 'mainPage');
  const { t: tPNP } = getServerTranslation(params.lang, 'pnp');
  const { t: tStartup } = getServerTranslation(params.lang, 'startUp');

  const base = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <>
      <Hero
        lang={params.lang}
        titles={[t('investment'), t('Acceleration'), t('StartUp Visa'), t('Entrepreneurship - PNP')]}
        backgroundImage="hero.webp"
      />

      <section className='w-full max-w-responsive mx-auto w-100'>
        <AboutUs 
          lang={params.lang} 
          translations={{
              AboutUs: t('AboutUs'),
              AboutUsContent: t('AboutUsContent'),
              ReadMore: t('ReadMore'),
          }} 
          href={`${base}/about-us`} 
        />

        <HomeCardsContainer lang={params.lang} />
        <SpecialFeatures lang={params.lang} />

        <Intro
          title={tStartup('whatIsStartupVisa.title')}
          subtitle={tStartup('whatIsStartupVisa.subtitle')}
          description={tStartup('whatIsStartupVisa.description')}
        />

        <OurStartupService lang={params.lang} />
        <div className="max-w-xs mx-auto mb-24">
          <ButtonRefactor text={t('ReserveMyFreeConsultation')} type="simple-link" href={`${base}${params.lang}/startup/#startup-application-form`} />
        </div>

        <Intro
          title={tPNP('Intro.title', { returnObjects: true })}
          subtitle={tPNP('Intro.subtitle', { returnObjects: true })}
          description={tPNP('Intro.description', { returnObjects: true })}
        />

        <OurPNPService lang={params.lang} />
        <div className="max-w-xs mx-auto mb-24">
          <ButtonRefactor text={t('ReserveMyFreeConsultation')} type="simple-link" href={`${base}${params.lang}/pnp/#pnp-application-form`} />
        </div>

        <Academy lang={params.lang} />
        <HalvesCards lang={params.lang} />
        <LatestStartups lang={params.lang} />
        <Differentiators lang={params.lang} />

        <Priority
          Priorities={t('Priorities', { returnObjects: true })}
          cardData={(t('cardData1', { returnObjects: true }) || []) as Array<{ title: string; image: string }>}
         />
      </section>
    </>
  );
}