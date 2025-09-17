'use client';
import React, { useState } from 'react';
import TextArea from '@/components/common/TextArea';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';
import CollapsibleHeader from '@/components/startups-form/CollapsibleHeader';

type Props = {
  register: UseFormRegister<StartupsFormData>;
  errors: FieldErrors<StartupsFormData>;
  handleFinancialModelFileChange: (file: any) => void;
  translations: {
    title: string;
    monetization: string;
    monetizationRequired: string;
    monetizationPlaceholder: string;
    delivery: string;
    deliveryRequired: string;
    deliveryPlaceholder: string;
    financial: string;
    choseFile: string;
    accelerators: string;
    acceleratorsRequired: string;
    acceleratorsPlaceholder: string;
    knowUs: string;
    knowUsRequired: string;
    knowUsPlaceholder: string;
  };
};

export default function BussinessModelDropDown(props: Props) {

const { register, errors, handleFinancialModelFileChange, translations } = props;
const [businessOpen, setBusinessOpen] = useState<boolean>(false);

const handleToggle = () => {
  console.log('Toggle clicked, current state:', businessOpen);
  setBusinessOpen(!businessOpen);
};

  return (
    <div>
      <CollapsibleHeader
        title={translations.title}
        isOpen={businessOpen}
        onToggle={handleToggle}
      />

      {businessOpen && (
        <>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.monetization}
              register={register}
              errors={errors}
              required={translations.monetizationRequired}
              nameTextArea={'MonetizationOfYourPlan'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.monetizationPlaceholder}
            />
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.delivery}
              register={register}
              errors={errors}
              required={translations.deliveryRequired}
              nameTextArea={'structureOfYourSales'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.deliveryPlaceholder}
            />
          </div>
          <div className="w-full h-auto flex justify-start items-center">
            <p className="text-black font-medium text-lg leading-[18px]">
              {translations.financial}
            </p>
          </div>
          <div className="w-full md:w-1/3 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden mt-2 mb-6">
            <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
              <input
                type="file"
                name="financialModelFile"
                className="absolute inset-0 size-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  handleFinancialModelFileChange(
                    e.target.files ? e.target.files[0] : ''
                  );
                }}
              />
              <p className="text-black font-barlow font-medium text-lg leading-4">
                {translations.choseFile}
              </p>
            </label>
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.accelerators}
              register={register}
              errors={errors}
              required={translations.acceleratorsRequired}
              nameTextArea={'cooperatedWithInvestors'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.acceleratorsPlaceholder}
            />
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.knowUs}
              register={register}
              errors={errors}
              required={translations.knowUsRequired}
              nameTextArea={'getToKnowUs'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.knowUsPlaceholder}
            />
          </div>
        </>
      )}
    </div>
  );
};
