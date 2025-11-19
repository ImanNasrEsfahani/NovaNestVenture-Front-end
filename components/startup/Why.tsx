import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default function Why({lang}: {lang: string}) {
    const { t } = getServerTranslation(lang, 'startUp');

    return (
        <section className="w-full bg-gradient-to-r from-grayDark to-gray-800 py-16 my-24">
            <div className="w-full max-w-responsive mx-auto text-white">
                <h2 className="text-3xl font-header font-bold text-center mb-4">
                    {t('whyChooseUs.title')}
                </h2>
                <ul className="space-y-3 text-lg lg:text-center mx-auto w-max">
                    {t('whyChooseUs.list', { returnObjects: true }).map(
                        (item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};