import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default async function AboutUs({ lang }: { lang: string }) {
    const { t } = await getServerTranslation(lang, 'mainPage');

    return (
        <section className="pt-20 pb-10 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 relative">
                        <span className="relative inline-block">{t('AboutUs')}</span>
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed tracking-wide mb-8 px-6">
                        {t('AboutUsContent')}
                    </p>
                </div>
            </div>
        </section>
    );
};