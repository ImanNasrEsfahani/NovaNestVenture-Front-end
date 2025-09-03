import Banner from '@/components/common/Banner';
import LandaGene from '@/components/landa-gene/LandaGene';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Landa Gene',
  description: ''
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await getServerTranslation(lang, 'landaGene');

  return (
    <div>
      <Banner
        image="/static/images/gene-desctop.jpg"
        title={t('banner')}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto">
        <LandaGene />
      </div>
    </div>
  );
}
