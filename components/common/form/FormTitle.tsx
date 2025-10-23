import React from 'react';

interface Props {
  formTitle: string;
  formSubtitle: string;
}

export default function FormTitle({ formTitle, formSubtitle }: Props) {
  return (
    <div className={`w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg flex items-center justify-center`}>
      <div className='text-center px-4'>
          <p className="text-white font-header font-medium text-lg md:text-3xl">
            {formTitle}
          </p>
      </div>
    </div>
  )
}
