import React from 'react';
import Image from 'next/image';
import Accordion from '@/components/startup/Accordions';
import { getServerTranslation } from 'app/i18n';

export default function OurPNPService({ lang }: { lang: string }) {
    const { t } = getServerTranslation(lang, 'pnp');


    return (
        <section className="py-16 max-w-responsive mx-auto">
            <h3 className="text-4xl font-header leading-loose text-center font-bold">{t('services', { returnObjects: true }).title}</h3>
            <p className="text-gray-600 text-base text-center mb-4 max-w-5xl mx-auto">{t('services', { returnObjects: true }).description}</p>

            <div className="grid lg:grid-cols-2 gap-12 pt-12 items-stretch">
                <div className="flex flex-col justify-center">
                    <Accordion data={t('services', { returnObjects: true }).serviceDetails} />
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-full rounded-lg overflow-hidden h-full relative">
                        <Image
                            src={t('services', { returnObjects: true }).image.src}
                            alt={t('services', { returnObjects: true }).image.alt}
                            fill
                            className="object-contain rounded-lg"
                            sizes="(min-width: 1024px) 400px, 100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};