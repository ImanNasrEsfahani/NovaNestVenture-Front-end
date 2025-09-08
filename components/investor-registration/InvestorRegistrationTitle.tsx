import React from 'react';
import { getServerTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default function InvestorRegistrationTitle(
  {formName} : {formName: string}
) {

  const lang = useLang((s) => s.lang)

  const { t } = await getServerTranslation(lang, 'formComponent');

  return (
    <>
      <div className='text-center'>
        <p className='mb-20 pt-8 font-condensed text-2xl tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>{t(formName,{ returnObjects: true }).formTitle}</p>
      </div>
      <div>
        <p className='mb-4 text-xl lg:text-2xl'>{t(formName,{ returnObjects: true }).formSubtitle}</p>
      </div>
      <div>
        <hr className="mb-5 border-[#000000]" />
      </div>
    </>
  )
}