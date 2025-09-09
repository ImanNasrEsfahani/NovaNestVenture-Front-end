import React from 'react';
import { getServerTranslation } from 'app/i18n';
import Data from '@/components/icons/startup/Data';
import MoneyRecive from '@/components/icons/startup/MoneyRecive';
import MusicPlay from '@/components/icons/startup/MusicPlay';
import PresentionChart from '@/components/icons/startup/PresentionChart';
import ArrowRight from '@/components/icons/common/ArrowRight';

const iconComponents = {
  Data: Data,
  MoneyRecive: MoneyRecive,
  MusicPlay: MusicPlay,
  PresentionChart: PresentionChart,
} as const;

interface ServiceItem {
  icon: keyof typeof iconComponents;
  title: string;
  description: string;
}

export default async function Services({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'startUp');

  return (
    <div className='md:mb-20 mt-16 md:mt-40 '>
      <section className='mb-20 md:mb-32'>
        <h1 className='text-xl md:text-4xl font-semibold mb-4 md:mb-10'>{t('service-title')}</h1>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t('service-list', { returnObjects: true }).map(
              (e: ServiceItem, index: number) => {
                const IconComponent = iconComponents[e.icon as keyof typeof iconComponents];
                return (
                  <div className="w-full get-shadow-g px-3 md:px-4 py-4 rounded-xl" key={index}>
                    <div className='w-16 mx-auto'>{IconComponent && <IconComponent />}</div>
                    <h2 className=' md:text-lg font-semibold my-3'>{e.title}</h2>
                    <p className='text-xs md:text-base text-justify'>{e.description}</p>
                  </div>
                );
              }
            )}
          </div>
          <button
            className='flex items-center mt-10 px-6 py-2 rounded-xl font-condensed text-lg text-white bg-black hover:bg-primary transition-all'
          >
            {t('button')}
            <ArrowRight />
          </button>
        </div>
      </section>
      <section>
        <h1 className='text-xl md:text-4xl font-semibold mb-5 md:mb-10'>{t('services-title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-wrap justify-between">
          {t('services-list', { returnObjects: true }).map(
            (e: string[], index: number) => {
              return (
                <p key={index} className='col-span-1 text-sm md:text-base bg-whiteGold rounded-lg py-4 text-center font-condensed tracking-wider'>{e}</p>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}