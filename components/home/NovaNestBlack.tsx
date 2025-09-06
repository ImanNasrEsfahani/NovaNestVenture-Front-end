'use client'
import React from 'react';
import UlList from '@/components/List/UlList';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function NovaNestBlack() {
  const lang = useLang().lang;
  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <div className="relative flex flex-col items-stretch justify-evenly  md:gap-10  md:pt-10 md:flex-row ">
      <div className="bg-[#ffffff] z-10 flex mb-10 p-6 xl:px-16 flex-col md:justify-start gap-5 rtl:mr-1 get-shadow-g xl:w-1/2 max-w-[40rem] md:h-auto md:mb-0 rounded-xl">
        <div className="flex flex-col items-center">
            {/* <span className='font-gilda mt-12'>
              {t('TitleBlackFirst')}
            </span> */}
            <span className="pb-2 pt-4 text-center md:text-center font-gilda text-3xl font-bold text-black md:text-4xl md:pt-5">
              {t('SubtitleBlackFirst')}
            </span>
        </div>
        <p>{t('TextBlackFirst', { returnObjects: true })}</p>
        <UlList
          list={t('landaHoldingBlackFirst', { returnObjects: true })}
          style1="pl-8"
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto mx-auto w-[200px] md:w-[224px] p-2 md:pb-8 mt-auto">
          <ButtonRefactor
            text={t('Register')}
            type="link"
            href={`${base}/investor-registration`}
            bgColor="black"
          />
        </div>
      </div>
 
      <div className="bg-[#ffffff] z-10 flex mb-10 p-6 xl:px-16 flex-col md:justify-start gap-5 rtl:mr-1 get-shadow-g xl:w-1/2 max-w-[40rem] md:h-auto md:mb-0 rounded-xl">
        <div className="flex flex-col items-center">
          {/* <span className='font-gilda mt-12'>
            {t('TitleBlackSecond')}
          </span> */}
          <span className="pb-2 pt-4 text-center md:text-center font-gilda text-3xl font-bold text-black md:text-4xl md:pt-5">
            {t('SubtitleBlackSecond')}
          </span>
        </div>
        {/* TODO: Why pass 3 styles? */}
        <p>{t('TextBlackSecond', { returnObjects: true })}</p>
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={'pl-8'}
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto mx-auto w-[200px] md:w-[224px] mt-auto p-2 md:pb-8">
          <ButtonRefactor
            text={t('Register')}
            type="link"
            href={`${base}/formEntrepreneurs`}
            bgColor="black"
          />
        </div>
      </div>
    </div>
  );
}
