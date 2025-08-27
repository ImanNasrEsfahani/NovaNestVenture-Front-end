import { Metadata } from 'next';
import Hero2 from '@/components/home/Hero2';
import NovaNestPriority from '@/components/home/NovaNestPriority';
import LatestStartups from '@/components/home/LatestStartups';
import NovaNestBlack from '@/components/home/NovaNestBlack';
import HomeCardsContainer2 from '@/components/home/HomeCardsContainer2';
import Partners from '@/components/home/Partners';
// import UpcomingEvents from '@/components/home/UpcomingEvents';
// import AerialViewBusinessTeam from '@/components/home/BusinessTeam';

import { useTranslation } from '../i18n';
import HomeUpComingStartups from '@/components/home/HomeUpComingStartups';
import HomeNovaNestAcademy from '@/components/home/HomeNovaNestAcademy';
import AboutUs from '@/components/home/AboutUs';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';

export const metadata: Metadata = {
  title: 'NovaNest Venture',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div className="relative w-full mb-8">
      {/* TODO: read t inside hero components using zustend */}
      {/* <Hero
        lang={lang}
        titles={[t('investment'), t('StartUp'), t('Acceleration'), t('Academy')]}
        backgroundImage="Hero.webp"
      /> */}
      <Hero2 />

      <section className='max-w-[1600px] px-4 mx-auto w-100 lg:px-16'>
        <AboutUs />
        <HomeCardsContainer2 />
        {/* <NovaNestBlack />
        <HomeUpComingStartups />
        <HomeNovaNestAcademy />
        <LatestStartups />
        <NovaNestPriority />
        <Partners /> */}

        {/* <HomeUpcomingEvents /> */}
        {/* <AerialViewBusinessTeam /> */}
      </section>
    </div>
  );
}