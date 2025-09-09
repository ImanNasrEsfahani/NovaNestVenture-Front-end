import { Metadata } from 'next';
import Hero2 from '@/components/home/Hero2';
import SpecialFeatures from '@/components/home/SpecialFeatures';
import NovaNestPriority from '@/components/home/NovaNestPriority';
import LatestStartups from '@/components/home/LatestStartups';
import NovaNestBlack from '@/components/home/NovaNestBlack';
import HomeCardsContainer2 from '@/components/home/HomeCardsContainer2';
// import UpcomingEvents from '@/components/home/UpcomingEvents';
// import AerialViewBusinessTeam from '@/components/home/BusinessTeam';

// import HomeUpComingStartups from '@/components/home/HomeUpComingStartups';
import HomeNovaNestAcademy from '@/components/home/HomeNovaNestAcademy';
import AboutUs from '@/components/home/AboutUs';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';

export const metadata: Metadata = {
  title: 'NovaNest Venture',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;

  return (
    <div className="relative w-full mb-8">
      {/* TODO: read t inside hero components using zustend */}
      {/* <Hero
        lang={lang}
        titles={[t('investment'), t('StartUp'), t('Acceleration'), t('Academy')]}
        backgroundImage="Hero.webp"
      /> */}
      <Hero2 lang={lang} />

      <section className='max-w-[1600px] px-4 mx-auto w-100 lg:px-16'>
        <AboutUs lang={lang} />
        <HomeCardsContainer2 lang={lang} />
        <SpecialFeatures lang={lang} />
        
        {/* <HomeUpComingStartups /> */}
        <HomeNovaNestAcademy lang={lang} />
        <NovaNestBlack lang={lang} />
        <LatestStartups lang={lang} />
        <NovaNestPriority lang={lang} />
        {/* <Partners /> */}

        {/* <HomeUpcomingEvents /> */}
        {/* <AerialViewBusinessTeam /> */}
      </section>
    </div>
  );
}