import EventCardsContainer from '@/components/EventCardsContainer';
import Banner from '@/components/common/Banner';
import { useTranslation } from 'app/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Holding | Events',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'events');

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
