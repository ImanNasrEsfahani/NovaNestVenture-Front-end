'use client';
import Image from 'next/image';
import React from 'react';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function Gateway() {
  const lang = useLang().lang;
  const { t } = getServerTranslation(lang, 'startUp');

  return (
    <section className="flex flex-col-reverse md:flex-row justify-between gap-10 items-stretch font-EBGaramond my-14">
      <div className="w-full md:w-[70%] flex flex-col justify-between gap-3 md:gap-5">
        <h1 className="text-lg md:text-4xl font-semibold">{t('gateway-title')}</h1>
        <p className="text-sm md:text-base text-justify leading-5">{t('gateway-detail')}</p>
      </div>
      <Image
        className="w-full md:w-[30%] object-cover"
        src={'/static/images/startup/gateway.webp'}
        alt="team image"
        width={300}
        height={500}
      />
    </section>
  );
}
