import React from 'react';
import { getServerTranslation } from 'app/i18n';
import Profile from '@/components/profile/Profile';
import { Person } from '@/types/global';
import { notFound } from 'next/navigation';
import Banner from '@/components/common/Banner';


export default async function Page({
  params: { slug, lang }
}: {
  params: { slug: string; lang: string };
}) {

  const base = process.env.NEXT_PUBLIC_BASE_URL || '';
  const { t } = getServerTranslation(lang, 'ourTeam');

  // get roles from translations (returns array of { title, people })
  const roles = (t('roles', { returnObjects: true }) as unknown) as Array<{ title: string; people?: Person[] }> | undefined;

  // flatten all people from every role into a single array
  const allPeople: Person[] = roles?.flatMap((r) => r.people ?? []) ?? [];

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