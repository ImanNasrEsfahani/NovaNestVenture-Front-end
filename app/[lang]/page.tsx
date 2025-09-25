import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
// import Hero2 from '@/components/home/Hero2';
import SpecialFeatures from '@/components/home/SpecialFeatures';
import Priority from '@/components/home/Priority';
import LatestStartups from '@/components/home/LatestStartups';
import HalvesCards from '@/components/home/HalvesCards';
import HomeCardsContainer2 from '@/components/home/HomeCardsContainer2';
// import UpcomingEvents from '@/components/home/UpcomingEvents';
// import AerialViewBusinessTeam from '@/components/home/BusinessTeam';

// import HomeUpComingStartups from '@/components/home/HomeUpComingStartups';
import Academy from '@/components/home/Academy';
import AboutUs from '@/components/home/AboutUs';
import { getServerTranslation } from 'app/i18n';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';

export const metadata: Metadata = {
  title: 'NovaNest Venture',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({ params }: { params: { lang: string } }) {
  const { t } = getServerTranslation(params.lang, 'mainPage');

  return (
    <div className="relative w-full mb-8">
      {/* TODO: read t inside hero components using zustend */}
      <Hero
        lang={params.lang}
        titles={[t('investment'), t('Acceleration'), t('StartUp Visa'), t('Entrepreneurship - PNP')] }
        backgroundImage="hero.webp"
      />
      {/* <Hero2 lang={lang} /> */}

      <section className='max-w-responsive mx-auto px-4 w-100 lg:px-16'>
        <AboutUs lang={params.lang} />
        <HomeCardsContainer2 lang={params.lang} />
        <SpecialFeatures lang={params.lang} />
        
        {/* <HomeUpComingStartups /> */}
        <Academy lang={params.lang} />
        <HalvesCards lang={params.lang} />
        <LatestStartups lang={params.lang} />
        <Priority lang={params.lang} />
        {/* <Partners /> */}

        {/* <HomeUpcomingEvents /> */}
        {/* <AerialViewBusinessTeam /> */}
      </section>
    </div>
  );
}