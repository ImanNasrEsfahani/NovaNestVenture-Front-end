import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default function WhatIsStartupVisa({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'startUp');

    return (
        <section className="w-full max-w-responsive mx-auto pt-24 pb-12 px-6">
            <h1 className="text-3xl font-header md:text-5xl font-bold mb-4 text-gray-800 text-center">
                {t('whatIsStartupVisa.title')}
            </h1>
            <p className="text-lg md:text-2xl font-semibold mb-12 text-gray-500 text-center">
                {t('whatIsStartupVisa.subtitle')}
            </p>
            <p className="text-lg mb-6 text-center">
                {t('whatIsStartupVisa.description')}
            </p>
            {/* <ul className="list-disc list-inside text-base space-y-2 pl-9">
                {t('whatIsStartupVisa.list', { returnObjects: true }).map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul> */}
        </section>
    );
};