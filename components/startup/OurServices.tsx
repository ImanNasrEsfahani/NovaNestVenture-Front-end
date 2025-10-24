import React from 'react';
import Accordion from '@/components/startup/Accordions';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';

export default function OurServices({ lang }: { lang: string }) {
    const { t } = getServerTranslation(lang, 'startUp');

    return (
        <section className="py-16 max-w-responsive mx-auto">
            <h3 className="text-4xl font-header leading-loose text-center font-bold">
                {t('services.title')}
            </h3>
            <p className="text-gray-600 text-base text-center mb-4 max-w-5xl mx-auto" dangerouslySetInnerHTML={{ __html: t('services.description') }} />

            <div className="grid lg:grid-cols-2 space-x-12 pt-12">
                <div className="flex flex-col justify-center">
                    <Accordion data={t('services', { returnObjects: true }).serviceDetails} />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={t('services.image.src')}
                        alt={t('services.image.alt')}
                        className="mx-auto w-auto rounded-lg"
                        width={t('services', { returnObjects: true }).image.width}
                        height={t('services', { returnObjects: true }).image.height}
                    />
                </div>
            </div>
        </section>
    );
};