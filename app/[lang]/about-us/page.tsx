import { Metadata } from 'next';
import AboutUs from '@/components/about/AboutUs';
import SubsidiaryCompanies from '@/components/about/SubsidiaryCompanies';
import StoryOfUs from '@/components/about/StoryOfUs';
import KeyDifferentiating from '@/components/KeyDifferentiating';
import Profile from '@/components/about/Profile';
import Banner from '@/components/common/Banner';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | About',
  description:
    'Learn about NovaNest Venture, a forward-thinking company dedicated to innovation and excellence. Discover our mission, values, and the team behind our success. Join us on our journey towards a brighter future.',
};

export default function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, "aboutUs");

  return (
    <div>
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/group.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/group-mobile.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      
      
      <div className='px-8 md:px-24 max-w-responsive mx-auto'>
        <AboutUs lang={lang} />
        <SubsidiaryCompanies lang={lang}/>
        <StoryOfUs lang={lang}/>
        <KeyDifferentiating lang={lang} />
        <Profile lang={lang} />
      </div>
    </div>
  );
}