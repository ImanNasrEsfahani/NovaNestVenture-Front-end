import { getServerTranslation } from 'app/i18n';
import Image from 'next/image';
// import React, { useState } from 'react'; 

// const paragraphStyles: React.CSSProperties = {
//   WebkitLineClamp: 10,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   display: '-webkit-box'
// };

export default function KeyDifferentiating({lang}: {lang: string}) {

  const { t } = getServerTranslation(lang, 'aboutUs');

  return (
    // TODO: don't use [0], [1] for translations
    <div className="flex justify-between ">
      <div className=" my-20 flex flex-col gap-5 w-full md:w-[62%]">
        <span className="font-header font-bold md:pb-8 text-2xl leading-8 md:text-4xl">
          {t('KeyDifferentiatingFactors', { returnObjects: true })[0].title}
        </span>
        <div className="font-header text-justify">
          {t('KeyDifferentiatingFactors', { returnObjects: true })[0].titleText}
          <div className='text-primary'>
            {t('KeyDifferentiatingFactors', { returnObjects: true })[0].title2}
            <div className='text-black'>
              {t('KeyDifferentiatingFactors', { returnObjects: true })[0].text2}
              <div className=''>
                {t('KeyDifferentiatingFactors', { returnObjects: true })[0].text3}
                <div className=''>{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text4}
                  <div className=''>
                    {t('KeyDifferentiatingFactors', { returnObjects: true })[0].text5}
                    <div className=''>{t('KeyDifferentiatingFactors', { returnObjects: true })[0].text6}
                      <div className=''>
                        {t('KeyDifferentiatingFactors', { returnObjects: true })[0].text7}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden items-center w-[30%] md:flex md:justify-end">
        <Image
          src="/static/images/home/key-differentiating/Vector 58.png"
          alt="NovaNest Venture Key Differentiating"
          width={486}
          height={741}
          loading="lazy"
        />
      </div>
    </div>
  );
}