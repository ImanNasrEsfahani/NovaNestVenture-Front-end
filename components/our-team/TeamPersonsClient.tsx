'use client';
import React, { useEffect, useState } from 'react';
import TeamRolesContainer from './TeamRolesContainer';
import PersonalTab from '@/components/common/PersonalTab';
// TODO: read from i18n instead of statics
// import { personsEN, personsFA } from '../../app/[lang]/statics';
// import { rolesEN, rolesFA } from '../../app/[lang]/statics';

interface item {
  image: string;
  position: string;
  name: string;
  linkedIn: string;
  category: string;
}

interface Translations {
  persons: item[];
  roles: string[];
  defaultRole: string;
}

interface TeamPersonsClientProps {
  lang: string;
  translations: Translations;
}

export default function TeamPersonsClient({ lang, translations }: TeamPersonsClientProps) {

  // const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [filteredPersons, setFilteredPersons] = useState(Array<item>);

  // const L: Array<item> = translations.persons.map((person: item) => {
  //   return person
  // })

  useEffect(() => {
    setFilteredPersons(translations.persons);
  }, [translations.persons]);

  function handleRoleSelect(role: string) {
    if (role === translations.defaultRole) {
      setFilteredPersons(translations.persons);
    } else {
      const filteredPersons = translations.persons.filter(
        ({ category }: { category: string }) =>
          category?.toLowerCase().includes(role.toLowerCase())
      );
      setFilteredPersons(filteredPersons);
    }
  }

  
  return (
    <div>
      <div className="flex w-full justify-center">
        <TeamRolesContainer
          lang={lang || 'en'}
          onRoleSelect={handleRoleSelect}
          roles={translations.roles}
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-12 md:gap-x-40 py-5 md:container md:mx-auto md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-10 xl:grid-cols-4  xl:px-28">
        {filteredPersons.map(
          (
            {
              image,
              position,
              name,
              linkedIn
            }: {
              image: string;
              position: string;
              name: string;
              linkedIn: string;
            },
            index: number
          ) => (
            <PersonalTab
              key={index}
              image={image}
              position={position}
              name={name}
              linkedIn={linkedIn}
            />
          )
        )}
      </div>
    </div>
  );
}
