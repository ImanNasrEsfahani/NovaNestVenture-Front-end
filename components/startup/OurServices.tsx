import React from 'react';
import Accordion from '@/components/startup/OurServicesAccardions';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';

export default function OurServices({lang}: {lang: string}) {
    const { t } = getServerTranslation(lang, 'startUp');


    return (
        <section className="py-16 max-w-responsive mx-auto">
            <h3 className="text-4xl font-header leading-loose text-center font-bold mb-4">
                {t('ourServices.title')}
            </h3>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="text-gray-600 text-base mb-4">
                        {t('ourServices.description')}
                    </p>
                    <Accordion data={t('service-details', { returnObjects: true })} />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/static/images/startup/team.png"
                        alt={t('ourServices.imageAlt')}
                        className="mx-auto w-auto max-w-sm rounded-lg"
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};