import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default function Why({lang}: {lang: string}) {
    const { t } = getServerTranslation(lang, 'startUp');

    return (
        <section className="w-full bg-gradient-to-r from-grayDark to-gray-800 py-16 my-24">
            <div className="max-w-responsive mx-auto text-white text-center">
                <h2 className="text-3xl font-header font-bold mb-4">
                    {t('whyChooseUs.title')}
                </h2>
                <p className="text-lg mb-8">{t('whyChooseUs.subtitle')}</p>
                <ul className="space-y-3 text-lg">
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