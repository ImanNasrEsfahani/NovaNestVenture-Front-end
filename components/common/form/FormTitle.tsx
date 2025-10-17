import React from 'react';

interface Props {
  formTitle: string;
  formSubtitle: string;
}

export default function FormTitle({ formTitle, formSubtitle}: Props) {
  return (
    <div className='w-full h-[100px] md:h-[200px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg'>
      <div className='size-full flex justify-center items-center'>
        <div className='w-full h-auto flex flex-col items-center'>
          <p className="text-white font-header font-medium text-lg md:text-3xl">
            {formTitle}
          </p>
        </div>
      </div>
    </div>
  )
}
