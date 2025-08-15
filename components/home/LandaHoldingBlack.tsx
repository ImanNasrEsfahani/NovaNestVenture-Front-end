'use client'
import React from 'react';
import UlList from '@/components/List/UlList';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import ButtonRefactor from '../common/ButtonRefactor';

export default function LandaHoldingBlack() {
  const lang = useLang().lang;
  const { t } = useTranslation(lang, 'mainPage');

  return (
    <div className="relative flex flex-col items-stretch justify-evenly  md:gap-10 bg-[#ffffff]  md:pt-10 md:flex-row ">
      {/* <Lines /> */}
      <div className="z-10 flex mb-10 px-16 h-[36rem] flex-col md:justify-start gap-5 rtl:mr-1 get-shadow-g md:w-[50%] max-w-[40rem] md:h-auto md:mb-0 rounded-xl">
        <div className="flex flex-col items-center">
            <span className='font-gilda mt-12'>
              {t('LandaHolding')}
            </span>
            <span className="pb-3 font-gilda text-4xl font-bold pt-4 uppercase">
              {t('InvestorCenter')}
            </span>
        </div>

        <UlList
          list={t('landaHoldingBlackFirst', { returnObjects: true })}
          style1=""
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto mx-auto w-[200px] md:w-[224px] p-2 md:pb-8 mt-auto">
          <ButtonRefactor
            text={t('Register')}
            type="link"
            href="/investor-registration"
            bgColor="black"
          />
        </div>
      </div>
 
      <div className="z-10 flex h-[37rem] px-16 md:justify-start flex-col gap-5 rtl:mr-1 get-shadow-g  md:w-[50%] max-w-[40rem] md:h-auto rounded-xl">
        <div className="flex flex-col items-center">
          <span className='font-gilda mt-12'>
            {t('LandaHolding')}
          </span>
          <span className="pb-2 pt-4 text-center md:text-center font-gilda text-3xl font-bold text-black md:text-4xl md:pt-5">
            {t('EntrepreneurCenter')}
          </span>
        </div>
        {/* TODO: Why pass 3 styles? */}
        <UlList
          list={t('landaHoldingBlackSecond', { returnObjects: true })}
          style1={''}
          style2="space-y-2"
          style3="pt-1"
        />

        <div className="h-auto mx-auto w-[200px] md:w-[224px] mt-auto p-2 md:pb-8">
          <ButtonRefactor
            text={t('Register')}
            type="link"
            href="/formEntrepreneurs"
            bgColor="black"
          />
        </div>
      </div>
    </div>
  );
}
