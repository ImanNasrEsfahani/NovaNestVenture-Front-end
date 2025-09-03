'use client'
import Image from 'next/image'
import React from 'react'
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function Differences() {
  const lang = useLang().lang;
  const { t } = getServerTranslation(lang, 'startUp');
 
  return (
    <section className='flex flex-col-reverse md:flex-row justify-between gap-10 items-stretch  my-14'>
        <div className='w-full md:w-[70%] flex flex-col justify-between gap-3 md:gap-5'>
            <h1 className='text-xl md:text-4xl font-semibold'>{t('differences-title')}</h1>
            <p className='text-sm md:text-base text-justify leading-5'>{t('differences-detail')}</p>
            <ul className='list-disc text-xs md:text-sm ml-6 font-medium '>
                {t('differences-list', { returnObjects: true }).map((e : any, index: number) => (
                    <li key={index}>{e}</li>
                ))}
            </ul>
        </div>
        <Image
            className='w-full md:w-1/4 object-cover'
            src={'/static/images/Startup/team.webp'}
            alt='team image'
            width={300}
            height={500}
        />
    </section>
  )
}
