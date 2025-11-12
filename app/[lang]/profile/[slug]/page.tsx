import React from 'react';
import { getServerTranslation } from 'app/i18n';
import Profile from '@/components/profile/Profile';
import { Person } from '@/types/global';
import { notFound } from 'next/navigation';


export default async function Page({
  params: { slug, lang }
}: {
  params: { slug: string; lang: string };
}) {

  const { t } = getServerTranslation(lang, 'ourTeam');

  const roles = t('roles', { returnObjects: true });
  const mentors = roles.Mentors ?? [];
  const trainees = roles.Trainees ?? [];
  const coreTeam = roles["Core Team"] ?? [];

  // concat the three arrays into one (and dedupe by slug)
  const allPeople: Person[] = [...mentors.people, ...trainees.people, ...coreTeam.people];

  const peopleBySlug = new Map<string, Person>();
  for (const p of allPeople) {
    if (p?.slug) peopleBySlug.set(p.slug, p);
  }
  const uniquePeople = Array.from(peopleBySlug.values());
  const person = uniquePeople[0];

  if (!person) {
    notFound();
  }

  return (
    <>
      {/* <div className="hidden md:inline">
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
      </div> */}
      <br />
      <br />
      <br />
      <Profile person={person} lang={lang} />
    </>
  );
}