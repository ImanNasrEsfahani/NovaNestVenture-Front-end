import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import AboutUs from '@/components/about/AboutUs';
import StoryLine from '@/components/about/StoryLine';

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
    <>
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/about/group.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/about/group-mobile.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>

      <div className='w-full max-w-responsive mx-auto'>
        <AboutUs lang={lang} />

        <StoryLine lang={lang} />
      </div>
    </>
  );
}