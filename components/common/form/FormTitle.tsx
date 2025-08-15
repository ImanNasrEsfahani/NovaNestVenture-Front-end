import React from 'react';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function FormTitle(
  {formName} : {formName: string}
) {

  const lang = useLang((s) => s.lang)

  const { t } = useTranslation(lang, 'formComponent');

  return (
    <div className='w-full h-[200px] md:h-[300px] bg-black'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full h-auto flex flex-col items-center'>
          <p className='text-white font-gilda font-medium md:text-[64px]'>{t(formName,{ returnObjects: true }).formTitle}</p>
          <p className='text-white font-gilda font-medium md:text-[32px]'>{t(formName,{ returnObjects: true }).formSubtitle}</p>
        </div>
      </div>
      {/* <div className='text-center'>
        <p className='mb-20 pt-8 ltr:font-gilda rtl:font-EBGaramond text-4xl tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>{t(formName,{ returnObjects: true }).formTitle}</p>
      </div>
      <div className='text-center'>
        <p className='mb-4 text-xl lg:text-2xl'>{t(formName,{ returnObjects: true }).formSubtitle}</p>
      </div>
      <div>
        <hr className="mx-3 border-[#000000]" />
      </div> */}
    </div>
  )
}
