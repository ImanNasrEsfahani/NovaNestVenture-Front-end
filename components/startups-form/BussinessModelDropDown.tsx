import React, { useState } from 'react';
import TextArea from '../common/TextArea';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';
// import FileUpload from '@/public/static/logos/FileUpload'
import ChevDown from 'public/static/logos/ChevDown';
import { useLang } from 'stores/langStore';
import { getServerTranslation } from 'app/i18n';

type Props = {
  register: UseFormRegister<StartupsFormData>;
  errors: FieldErrors<StartupsFormData>;
  handleFinancialModelFileChange: (file: any) => void;
};

const BussinessModelDropDown = (props: Props) => {
  const { register, errors, handleFinancialModelFileChange } = props;

  const [businessOpen, setBusinessOpen] = useState<boolean>(false);

  const lang = useLang((s) => s.lang);
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <div>
      <div
        className={`w-full h-auto cursor-pointer py-6 my-4 ${businessOpen ? 'bg-grayCheckBox' : 'bg-grayDark'}`}
        onClick={() => {
          setBusinessOpen(!businessOpen);
        }}
      >
        <div className="w-full h-auto flex justify-center items-center gap-2">
          <p className="font-barlow text-white font-medium text-[24px] leading-[20px]">
            {t('startUp.businessModel')}
          </p>
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
              title={t('startUp.businessMonetization')}
              register={register}
              errors={errors}
              required={t('startUp.businessMonetizationRequired')}
              nameTextArea={'MonetizationOfYourPlan'}
              patternValue={''}
              patternMessage={''}
              placeholder={t('startUp.businessMonetizationPlaceholder')}
            />
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={t('startUp.businessDelivery')}
              register={register}
              errors={errors}
              required={t('startUp.businessDeliveryRequired')}
              nameTextArea={'structureOfYourSales'}
              patternValue={''}
              patternMessage={''}
              placeholder={t('startUp.businessDeliveryPlaceholder')}
            />
          </div>
          <div className="w-full h-auto flex justify-start items-center">
            <p className="text-black font-medium text-[15px] leading-[18px]">
              {t('startUp.businessFinancial')}
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
                {t('startUp.choseFile')}
              </p>
            </label>
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={t('startUp.businessAccelerators')}
              register={register}
              errors={errors}
              required={t('startUp.businessAcceleratorsRequired')}
              nameTextArea={'cooperatedWithInvestors'}
              patternValue={''}
              patternMessage={''}
              placeholder={t('startUp.businessAcceleratorsPlaceholder')}
            />
          </div>
          <div className="w-full md:w-2/3 mb-8 h-auto md:px-1">
            <TextArea
              title={t('startUp.businessKnowUs')}
              register={register}
              errors={errors}
              required={t('startUp.businessKnowUsRequired')}
              nameTextArea={'getToKnowUs'}
              patternValue={''}
              patternMessage={''}
              placeholder={t('startUp.businessKnowUsPlaceholder')}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BussinessModelDropDown;
