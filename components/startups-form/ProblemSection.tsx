import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';
import TextArea from '@/components/common/TextArea';

type Props = {
  textAreaTitle: string;
  textAreaRequired: string;
  textAreaPlaceholder: string;
  register: UseFormRegister<StartupsFormData>;
  errors: FieldErrors<StartupsFormData>;
  nameTextArea?: string;
};

export default function ProblemsSection({
  textAreaTitle,
  textAreaRequired,
  textAreaPlaceholder,
  register,
  errors,
  nameTextArea = 'customerProblem'
}: Props) {

  return (
    <>
      <div className="w-full bg-gray-100 py-8 px-4">
        <div className="w-full lg:max-w-xl xl:max-w-2xl mx-auto">
          <TextArea
            title={textAreaTitle}
            register={register}
            errors={errors}
            required={textAreaRequired}
            nameTextArea={nameTextArea}
            patternValue={''}
            patternMessage={''}
            placeholder={textAreaPlaceholder}
          />
        </div>
      </div>
    </>
  );
}