import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import '../../[lang]/globals.css';

import Intro from '@/components/our-team/Intro';
// import PeopleCarousel from '@/components/our-team/PeopleCarousel';
import TeamPersons from '@/components/our-team/TeamPersons';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Our Team',
  description:
    'Meet the dedicated and talented individuals who make up the NovaNest Venture team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.'
};

type Person = {
  image: string;
  position: string;
  name: string;
  linkedIn: string;
  category: string;
};

type Role = {
  title: string;
  people: Person[];
};

export default function TeamPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'ourTeam');

  const roles = (t('roles', { returnObjects: true }) as unknown as Role[]) || [];
  console.log('Rendering Our Team page for roles:', roles);
  
  // console.log('Rendering Our Team page for roles:', t('roles', { returnObjects: true }));
  // const roles = t('roles', { returnObjects: true })[0].people as Array<{ title: string; people: Person[] }>;

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

      <div className="max-w-responsive mx-auto">
        <Intro lang={lang} />
        {/* {roles?.map((role, idx) => (
          <PeopleCarousel
            key={idx}
            people={role.people}
            title={role.title}
          />
        ))} */}
        <TeamPersons lang={lang} />
      </div>
    </div>
  );
}
