import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import TeamPersons from '@/components/our-team/TeamPersons';
import { getServerTranslation } from 'app/i18n';
import '../../[lang]/globals.css';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Our Team',
  description:
    'Meet the dedicated and talented individuals who make up the NovaNest Venture team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.'
};

export default async function TeamPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await getServerTranslation(lang, 'ourTeam');

  return (
    <div>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/our-team/header.webp"
          title={t('title')}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/our-team/header-mobile.webp"
          title={t('title')}
          lang={lang}
        />
      </div>
      <div className="max-w-[1600px] mx-auto">
        <TeamPersons lang={lang}/>
      </div>
    </div>
  );
}
