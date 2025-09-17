import React from 'react';

interface FormTitleProps {
  formName: string;
  lang: string;
  translations: {
    formTitle: string;
    formSubtitle: string;
  };
}

export default function FormTitle({ formName, lang, translations }: FormTitleProps) {
  return (
    <div className='w-full h-[200px] md:h-[300px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg'>
      <div className='size-full flex justify-center items-center'>
        <div className='w-full h-auto flex flex-col items-center'>
          <p className="text-white font-header font-medium text-5xl pb-8">
            {translations.formTitle}
          </p>
          <p className="text-white font-header font-medium text-2xl">
            {translations.formSubtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
