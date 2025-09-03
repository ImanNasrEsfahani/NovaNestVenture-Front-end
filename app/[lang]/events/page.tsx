import EventCardsContainer from '@/components/EventCardsContainer';
import Banner from '@/components/common/Banner';
import { getServerTranslation } from 'app/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Events',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await getServerTranslation(lang, 'events');

  return (
    <div>
      <Banner
        image="/static/images/EventsBanner.webp"
        title={t('banner')}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto">
        <EventCardsContainer />
      </div>
    </div>
  );
}
