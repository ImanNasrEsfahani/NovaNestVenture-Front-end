import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default function FormTitle(
  {formName, lang} : {formName: string, lang: string}
) {

  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <div className='w-full h-[200px] md:h-[300px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg'>
      <div className='size-full flex justify-center items-center'>
        <div className='w-full h-auto flex flex-col items-center'>
          <p className="text-white font-header font-medium text-5xl pb-8">{t(formName,{ returnObjects: true }).formTitle}</p>
          <p className="text-white font-header font-medium text-2xl">{t(formName,{ returnObjects: true }).formSubtitle}</p>
        </div>
      </div>
    </div>
  )
}
