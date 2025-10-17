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

import WhatIsStartupVisa from '@/components/startup/WhatIsStartupVisa';
import OurServices from '@/components/startup/OurServices';
import Intro from "@/components/pnp/Intro";
import OurService from '@/components/pnp/OurService';

export const metadata: Metadata = {
  title: 'NovaNest Venture',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({ params }: { params: { lang: string } }) {
  const { t } = getServerTranslation(params.lang, 'mainPage');
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <>
      <Hero
        lang={params.lang}
        titles={[t('investment'), t('Acceleration'), t('StartUp Visa'), t('Entrepreneurship - PNP')]}
        backgroundImage="hero.webp"
      />

      <section className='w-full max-w-responsive mx-auto w-100'>
        <AboutUs lang={params.lang} />
        <HomeCardsContainer lang={params.lang} />
        <SpecialFeatures lang={params.lang} />

        <WhatIsStartupVisa lang={params.lang} />
        <OurServices lang={params.lang} />
        <div className="max-w-xs mx-auto mb-24">
          <ButtonRefactor text={t('ReserveMyFreeConsultation')} type="simple-link" href={`${base}${params.lang}/startup/#startup-application-form`} />
        </div>

        <Intro lang={params.lang} />
        <OurService lang={params.lang} />
        <div className="max-w-xs mx-auto mb-24">
          <ButtonRefactor text={t('ReserveMyFreeConsultation')} type="simple-link" href={`${base}${params.lang}/pnp/#pnp-application-form`} />
        </div>

        <Academy lang={params.lang} />
        <HalvesCards lang={params.lang} />
        <LatestStartups lang={params.lang} />
        <Differentiators lang={params.lang} />

        <Priority lang={params.lang} />
      </section>
    </>
  );
}