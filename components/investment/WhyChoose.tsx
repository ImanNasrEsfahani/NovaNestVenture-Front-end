import React from 'react';
import { getServerTranslation } from 'app/i18n';
import Image from 'next/image';

export default function WhyChoose({ lang }: { lang: string }) {
    const { t } = getServerTranslation(lang, 'investment');

    const title = t('why', { returnObjects: true }).title;
    const items = (t('why', { returnObjects: true }).items as string[]) || [];

    return (
        <div className="w-full max-w-responsive mx-auto py-24 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-4">
            <div className="mx-auto flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-3xl text-center lg:text-left font-header font-bold text-gray-800 mb-8">{title}</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 items-center pl-6">
                    {items.map((item, i) => (
                        <li key={i} className="font-medium">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <Image
                    src="/static/images/investment/investment-why-choose-us.png"
                    alt={t('why.imageAlt') || 'Why Choose Us - Nova Nest Venture'}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg object-cover h-auto mx-auto"
                />
            </div>
        </div>
    );
}