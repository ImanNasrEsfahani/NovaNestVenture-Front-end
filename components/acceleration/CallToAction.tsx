import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default function CallToAction({ lang }: { lang: string }) {
    const { t } = getServerTranslation(lang, 'formComponent');

    return (
        <section className="pt-6 pb-20 max-w-5xl mx-auto lg:px-4 text-center">
            {t("AccelerationApplicantForm", { returnObjects: true }).formDescription.map((text: string, index: number) => (
                <p className="text-xl" key={index}>{text}</p>
            ))}
        </section>
    );
};