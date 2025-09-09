import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import EntrepreneursForm from '@/components/entrepreneurs/EntrepreneursForm';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Entrepreneurs',
  description:
    'Explore the NovaNest Venture Entrepreneurs Form and connect with us to share your entrepreneurial ideas and projects. We are interested in hearing from creative minds and visionaries. Lets collaborate to turn your entrepreneurial dreams into reality.'
};

export default async function EntrepreneursPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await getServerTranslation(lang, 'entrepreneur');

  return (
    <div>
      <Banner
        image="/static/images/work-with-us/header.png"
        title={t('banner')}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto">
        <EntrepreneursForm lang={lang} />
      </div>
    </div>
  );
}
