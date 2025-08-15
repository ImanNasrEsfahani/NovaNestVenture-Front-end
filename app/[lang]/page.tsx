import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import LandaHoldingPriority from '@/components/home/LandaHoldingPriority';
import LatestStartups from '@/components/home/LatestStartups';
import LandaHoldingBlack from '@/components/home/LandaHoldingBlack';
import HomeCardsContainer from '@/components/home/HomeCardsContainer';
import Partners from '@/components/home/Partners';
// import UpcomingEvents from '@/components/home/UpcomingEvents';
// import AerialViewBusinessTeam from '@/components/home/BusinessTeam';

import { useTranslation } from '../i18n';
import HomeUpComingStartups from '@/components/home/HomeUpComingStartups';
import HomeLandaAcademy from '@/components/home/HomeLandaAcademy';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';

export const metadata: Metadata = {
  title: 'Landa Holding',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div className="relative w-full">
      {/* TODO: read t inside hero components using zustend */}
      <Hero
        lang={lang}
        showLanda
        titles={[t('Investment'), t('Acceleration'), t('Academy')]}
        title={t('LandaHolding')}
        subTitle={t('HeroSubtitle')}
        backgroundImage="Hero.webp"
        // leftImage="Landa.svg"
        showButton={false}
      />

      <section className='max-w-[1600px] mx-auto px-5 md:px-20'>
        <HomeCardsContainer />
        <LandaHoldingBlack />
        <HomeUpComingStartups />
        <HomeLandaAcademy />
        <LatestStartups />
        <LandaHoldingPriority />
        <Partners />

        {/* <HomeUpcomingEvents /> */}
        {/* <AerialViewBusinessTeam /> */}
      </section>
    </div>
  );
}