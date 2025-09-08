import Image from 'next/image'
import React from 'react'
import { getServerTranslation } from 'app/i18n';

export default async function NatureOfStartups({lang}: {lang: string}) {
  const { t } = await getServerTranslation(lang, 'startUp');
 
  return (
    <section className='flex justify-between flex-col md:flex-row gap-10 items-stretch my-20 md:my-28'>
      <Image
          className='w-full md:w-[30%] object-cover'
          src={'/static/images/startup/nature-of-startups.webp'}
          alt='team image'
          width={300}
          height={300}
      />
      <div className='w-full md:w-[70%] flex flex-col justify-between gap-3 md:gap-5'>
          <h1 className='text-xl md:text-4xl font-semibold'>{t('nature-title')}</h1>
          <p className='text-sm md:text-base text-justify leading-5'>{t('nature-detail')}</p>
      </div>
    </section>
  )
}
