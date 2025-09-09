import { getServerTranslation } from 'app/i18n';
import React from 'react';

export default async function UpcomingEvents({ lang }: { lang: string }) {
  const { t } = await getServerTranslation(lang, "mainPage")

  return (
    <div className='min-h-[400px] g-whiteGold'>
        <div className='relative'>
            <div className='absolute left-20 p-2 md:left-[185px] md:top-[29px] md:text-4xl rtl:right-28 md:rtl:right-48 rtl:md:top-[24px]'>
                <h3 className="font-header text-2xl font-normal text-neutral-800 md:text-4xl">
                    {t('upcomingEvents', {returnObjects: true}).title}
                </h3>
            </div>
        </div>
        <div className='relative'>
            <div className="absolute top-[52px] hidden h-[313.88px] w-16 md:block ltr:left-10 ltr:md:left-[121px] rtl:right-10 rtl:md:right-[121px]">
                <div className="absolute top-0 h-0 w-[306px] origin-top-right -rotate-90 border border-neutral-800 bg-neutral-800 ltr:left-0 ltr:top-[307px] ltr:origin-top-left rtl:right-0"></div>
                <div className="absolute top-[103.03px] h-0 w-14 border border-neutral-800 bg-neutral-800 ltr:left-0 rtl:right-0"></div>
                <div className="absolute top-[305px] h-0 w-14 border border-neutral-800 bg-neutral-800 ltr:left-0 rtl:right-0"></div>
                <div className="absolute top-0 h-0 w-14 border border-neutral-800 bg-neutral-800 ltr:left-0 rtl:right-0"></div>
                <div className="absolute top-[198.51px] h-0 w-14 border border-neutral-800 bg-neutral-800 ltr:left-0 rtl:right-0"></div>
                <div className="absolute left-14 top-[97px] size-3 rounded-full border border-neutral-800 bg-neutral-800" />
                <div className="absolute left-14 top-[194px] size-3 rounded-full border border-neutral-800 bg-neutral-800" />
                <div className="absolute left-14 top-[300px] size-3 rounded-full border border-neutral-800 bg-neutral-800" />
            </div>
        </div>
    </div>
  )
}