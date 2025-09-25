import React from 'react'
import TextArea from '@/components/common/TextArea'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'

type translations = {
  solutionsUniqueValue: string;
  solutionsUniqueValueRequired: string;
  solutionsUniqueValuePlaceholder: string;
  solutionsLevel: string;
  solutionsLevelList: string[];
};

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    solutionsLevel: number
    handleSolutionsLevelChange: (index: number) => void
    setValue: UseFormSetValue<StartupsFormData>
    translations: translations
}

export default function SolutionLevel(props: Props) {

  const {
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange,
    setValue,
    translations
  } = props;

  return (
    <>
      <div className='w-full bg-gray-100 py-8 px-4'>
        <div className="w-full lg:max-w-xl xl:max-w-2xl mx-auto">
          <TextArea 
              title={translations.solutionsUniqueValue}
              register={register}
              errors={errors} 
              required={translations.solutionsUniqueValueRequired} 
              nameTextArea={"scalable"} 
              patternValue={''} 
              patternMessage={''} 
              placeholder={translations.solutionsUniqueValuePlaceholder}                                                 
          />
          <div className='w-full mt-4'>
              <p className='mb-2'>{translations.solutionsLevel}</p>
              <div className="w-full flex flex-col gap-1 px-4" role="radiogroup" aria-label="Solution level">
                {translations.solutionsLevelList.map((item: string, index: number) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-50"
                  >
                    {/* hidden radio as peer */}
                    <input
                      type="radio"
                      name="productLevel"
                      className="peer sr-only"
                      checked={solutionsLevel === index}
                      onChange={() => {
                        handleSolutionsLevelChange(index);
                        setValue('productLevel', item);
                      }}
                    />

                    {/* visual control; reacts to peer-checked */}
                    <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-primary transition-colors
                                      peer-checked:bg-primary peer-checked:border-primary">
                      <span className={`w-2.5 h-2.5 rounded-full transition-colors ${solutionsLevel === index ? 'bg-white' : 'bg-transparent'}`} />
                    </span>

                    {/* label text */}
                    <span className="text-sm text-gray-800">{item}</span>
                  </label>
                ))}
              </div>
            </div>
        </div>
      </div>
    </>
  )
}