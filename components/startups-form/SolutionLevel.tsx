import React, { useEffect } from 'react'
import TextArea from '@/components/common/TextArea'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'

type translations = {
  solutionsUniqueValue: string;
  solutionsUniqueValueRequired: string;
  solutionsUniqueValuePlaceholder: string;
  solutionsUniqueValueErrorMessage: string;
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

  // ensure RHF knows about the radio field so it's included on submit/validation
  useEffect(() => {
    register('technologyReadinessLevel', { required: true });
  }, [register]);

  return (
    <div className='w-full p-6'>
      <TextArea
        title={translations.solutionsUniqueValue}
        register={register}
        errors={errors}
        required={true}
        nameTextArea={"uniqueValueProposition"}
        patternValue={''}
        patternMessage={''}
        placeholder={translations.solutionsUniqueValuePlaceholder}
        maxLength={1450}
        maxLengthMessage={translations.solutionsUniqueValueErrorMessage}
        validate=""
      />
      <div className='w-full mt-4'>
        <p className='mb-2'>{translations.solutionsLevel}</p>
        <div className="w-full flex flex-col gap-1 px-4" role="radiogroup" aria-label="Solution level">
          {translations.solutionsLevelList.map((item: string, index: number) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-gray-50"
            >
              <input
                type="radio"
                name="technologyReadinessLevel"
                className="peer sr-only"
                checked={solutionsLevel === index}
                onChange={() => {
                  handleSolutionsLevelChange(index);
                  // update RHF value so it's submitted
                  setValue('technologyReadinessLevel', item, { shouldDirty: true, shouldTouch: true });
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
  )
}