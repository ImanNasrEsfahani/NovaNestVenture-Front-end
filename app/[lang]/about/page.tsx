import { Metadata } from 'next';
import AboutUsLandaHolding from '@/components/about/AboutUsLandaHolding';
import AboutUsProfile from '@/components/about/AboutUsProfile';
import Banner from '@/components/common/Banner';
import SubsidiaryCompanies from '@/components/about/SubsidiaryCompanies';
import StoryOfLanda from '@/components/about/StoryOfLanda';
import KeyDifferentiating from '@/components/KeyDifferentiating';
import { useTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | About',
  description:
    'Learn about NovaNest Venture, a forward-thinking company dedicated to innovation and excellence. Discover our mission, values, and the team behind our success. Join us on our journey towards a brighter future.',
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await useTranslation(lang, "aboutUs")

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
      
      <div className='px-8 md:px-24 max-w-[1600px] mx-auto'>
        <AboutUsLandaHolding   />
        <SubsidiaryCompanies />
        <StoryOfLanda />
        <KeyDifferentiating />
        <AboutUsProfile />
      </div>
    </div>
  );
}