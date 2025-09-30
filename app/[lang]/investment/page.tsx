import React from 'react';
import { Metadata } from 'next';

import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import InvestmentIntro from '@/components/investment/InvestmentIntro';
import InvestmentSection from '@/components/investment/InvestmentSection';
import WhyChoose from '@/components/investment/WhyChoose';
import NovaNestPriority from '@/components/home/Priority';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Investment',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'investment');

  return (
    <>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/investment/investment-hero.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/investment/mobile-hero.jpg"
          title={t('banner')}
          lang={lang}
        />
      </div>

      <InvestmentIntro lang={lang} />
      <InvestmentSection lang={lang} />
      <WhyChoose lang={lang} />
      <NovaNestPriority lang={lang} />
    </>
  );
}
