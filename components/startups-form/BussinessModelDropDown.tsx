'use client';
import React, { useState } from 'react';
import TextArea from '@/components/common/TextArea';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';
// import FileUpload from '@/public/static/logos/FileUpload'
import ChevDown from 'public/static/logos/ChevDown';

type Props = {
  register: UseFormRegister<StartupsFormData>;
  errors: FieldErrors<StartupsFormData>;
  handleFinancialModelFileChange: (file: any) => void;
  translations: {
    title: string;
    Monetization: string;
    MonetizationRequired: string;
    MonetizationPlaceholder: string;
    Delivery: string;
    DeliveryRequired: string;
    DeliveryPlaceholder: string;
    Financial: string;
    choseFile: string;
    Accelerators: string;
    AcceleratorsRequired: string;
    AcceleratorsPlaceholder: string;
    KnowUs: string;
    KnowUsRequired: string;
    KnowUsPlaceholder: string;
  };
};

export default function BussinessModelDropDown(props: Props) {

  const { register, errors, handleFinancialModelFileChange, translations } = props;
  const [businessOpen, setBusinessOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`w-full h-auto cursor-pointer py-6 my-4 ${businessOpen ? 'bg-grayCheckBox' : 'bg-grayDark'}`}
        onClick={() => {
          setBusinessOpen(!businessOpen);
        }}
      >
        <div className="w-full h-auto flex justify-center items-center gap-2">
          <p className="font-barlow text-white text-3xl">{translations.title}</p>
          <div
            className={`${businessOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-out mt-2`}
          >
            <ChevDown />
          </div>
        </div>
      </div>
      {businessOpen && (
        <>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.Monetization}
              register={register}
              errors={errors}
              required={translations.MonetizationRequired}
              nameTextArea={'MonetizationOfYourPlan'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.MonetizationPlaceholder}
            />
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.Delivery}
              register={register}
              errors={errors}
              required={translations.DeliveryRequired}
              nameTextArea={'structureOfYourSales'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.DeliveryPlaceholder}
            />
          </div>
          <div className="w-full h-auto flex justify-start items-center">
            <p className="text-black font-medium text-[15px] leading-[18px]">
              {translations.Financial}
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
              <p className="text-black font-barlow font-medium text-[13px] leading-4">
                {translations.choseFile}
              </p>
            </label>
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.Accelerators}
              register={register}
              errors={errors}
              required={translations.AcceleratorsRequired}
              nameTextArea={'cooperatedWithInvestors'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.AcceleratorsPlaceholder}
            />
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={translations.KnowUs}
              register={register}
              errors={errors}
              required={translations.KnowUsRequired}
              nameTextArea={'getToKnowUs'}
              patternValue={''}
              patternMessage={''}
              placeholder={translations.KnowUsPlaceholder}
            />
          </div>
        </>
      )}
    </div>
  );
};
