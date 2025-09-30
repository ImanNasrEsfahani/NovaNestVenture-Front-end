import React from 'react';
import Image from 'next/image';
import Accordion from '@/components/startup/OurServicesAccardions';
import { getServerTranslation } from 'app/i18n';

export default function OurService({lang}: {lang: string}) {
    const { t } = getServerTranslation(lang, 'pnp');


    return (
        <section className="py-16 max-w-responsive mx-auto">
            <h3 className="text-4xl font-header leading-loose text-center font-bold mb-16">
                {t('services', { returnObjects: true }).title}
            </h3>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="text-gray-600 text-base mb-6">
                        {t('services', { returnObjects: true }).description}
                    </p>
                    <Accordion data={t('service-details', { returnObjects: true })} />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={t('services', { returnObjects: true }).image.src}
                        alt={t('services', { returnObjects: true }).image.alt}
                        className="mx-auto w-auto max-w-sm rounded-lg"
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};