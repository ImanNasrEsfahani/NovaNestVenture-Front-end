import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import '../../[lang]/globals.css';

import Intro from '@/components/our-team/Intro';
// import PeopleCarousel from '@/components/our-team/PeopleCarousel';
import TeamPersons from '@/components/our-team/TeamPersons';
import PeopleCarousel from '@/components/our-team/PeopleCarousel';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Our Team',
  description:
    'Meet the dedicated and talented individuals who make up the NovaNest Venture team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.'
};

export default function TeamPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'ourTeam');

  const roles = t('roles', { returnObjects: true });

  const safeRoles = Array.isArray(roles) ? roles : [];

  const mentors = safeRoles.find(r => String(r.title).toLowerCase().includes('mentor'))?.people ?? [];
  const trainees = safeRoles.find(r => String(r.title).toLowerCase().includes('trainee'))?.people ?? [];
  const coreTeams = safeRoles.find(r => String(r.title).toLowerCase().includes('core'))?.people ?? [];

  // console.log('Mentors:', mentors);
  // console.log('Trainees:', trainees);
  // console.log('Core Teams:', coreTeams);

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


        <div className="max-w-responsive mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-header font-bold text-blue text-center">
            Mentors
          </h2>
          <PeopleCarousel
            people={mentors}
          />
        </div>

        <div className="max-w-responsive mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-header font-bold text-blue text-center">
            Trainees
          </h2>
          <PeopleCarousel
            people={mentors}
          />
        </div>

        <div className="max-w-responsive mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-header font-bold text-blue text-center">
            Core Team
          </h2>
          <PeopleCarousel
            people={mentors}
          />
        </div>

        {/* <TeamPersons lang={lang} /> */}
      </div>
    </div>
  );
}
