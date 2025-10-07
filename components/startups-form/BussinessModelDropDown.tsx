'use client';
import React from 'react';
import TextArea from '@/components/common/TextArea';
import { useForm, FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';

type Props = {
  register: UseFormRegister<StartupsFormData>
  errors: FieldErrors<StartupsFormData>
  handleFinancialModelFileChange: (file: any) => void;
  translations: {
    title: string;
    monetization: string;
    monetizationRequired: string;
    monetizationPlaceholder: string;
    monetizationErrorMessage: string;
    delivery: string;
    deliveryRequired: string;
    deliveryPlaceholder: string;
    deliveryErrorMessage: string;
    financial: string;
    choseFile: string;
  };
};

export default function BussinessModelDropDown({
  errors,
  translations,
}: Props) {
  const { register, formState } = useForm<StartupsFormData>();


  return (
    <div className='w-full p-6'>
      <TextArea
        title={translations.monetization}
        register={register}
        errors={formState.errors}
        required={translations.monetizationRequired}
        nameTextArea={'MonetizationOfYourPlan'}
        patternValue={''}
        patternMessage={''}
        placeholder={translations.monetizationPlaceholder}
        maxLength={1450}
        maxLengthMessage={translations.monetizationErrorMessage}
        validate=""
      />
      <div className="w-full">
        <TextArea
          title={translations.delivery}
          register={register}
          errors={errors}
          required={translations.deliveryRequired}
          nameTextArea={'structureOfYourSales'}
          patternValue={''}
          patternMessage={''}
          placeholder={translations.deliveryPlaceholder}
          maxLength={1450}
          maxLengthMessage={translations.deliveryErrorMessage}
          validate=""
        />
      </div>
    </div>
  );
};
