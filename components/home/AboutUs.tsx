import React from 'react';
import { getServerTranslation } from 'app/i18n';
import ButtonRefactor from '@/components/common/ButtonRefactor';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function AboutUs({ lang }: { lang: string }) {
    const { t } = getServerTranslation(lang, 'mainPage');

    return (
        <section className="w-full max-w-responsive mx-auto text-center pt-20 pb-10 bg-gradient-to-b from-white to-gray-50">
            <h2 className="text-3xl md:text-4xl font-header font-bold mb-8 text-gray-800 relative">
                <span className="relative inline-block">{t('AboutUs')}</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide mb-8 px-6">
                {t('AboutUsContent')} and ...
            </p>
            {/* <a href="/about" className="btn btn-neutral normal-case text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary hover:border-primary transition-all duration-300">
            Read more</a> */}
            <div className="max-w-container-xxs mx-auto">
                <ButtonRefactor text={t('ReadMore')} type="link" href={`${base}/about-us`} />
            </div>
        </section>
    );
};