'use client'
import React from 'react';
import UlList from '@/components/List/UlList';
import { getServerTranslation } from 'app/i18n';
import ButtonRefactor from '@/components/common/ButtonRefactor';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function NovaNestBlack({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');

  // Get the cards array directly from translation
  const specialFeatureCards = t('specialFeatureCards', { returnObjects: true });

  return (
    <div className="relative flex flex-col items-stretch justify-evenly md:gap-10 md:pt-10 md:flex-row">
      {specialFeatureCards.map((card: any) => (
        <div
          key={card.id}
          className="bg-[#ffffff] z-10 flex mb-10 px-4 py-6 xl:px-12 flex-col md:justify-start gap-5 rtl:mr-1 get-shadow-g xl:w-1/2 max-w-[40rem] md:h-auto md:mb-0 rounded-xl"
        >
          <div className="flex flex-col items-center">
            <span className="pb-1 pt-8 text-center font-header text-4xl font-bold text-black">
              {card.subtitle}
            </span>
          </div>
          <p className="text-base text-justify">{card.text}</p>
          <UlList
            list={card.benefits}
            style1="pl-8"
            style2="space-y-2"
            style3="pt-1"
          />
          <div className="h-auto mx-auto w-[200px] md:w-[224px] p-2 mt-auto">
            <ButtonRefactor
              text={card.buttonText}
              type="link"
              href={`${base}${card.href}`}
              bgColor="black"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
