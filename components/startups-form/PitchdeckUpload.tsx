import React from 'react';
import Input from '@/components/common/form/Input';
import FileUpload from 'public/static/logos/FileUpload';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';

import PropertyDropDown from '@/components/startups-form/PropertyDropDown';
import TargetMarketDropDown from '@/components/startups-form/TargetMarketDropDown';
import ProblemsSection from '@/components/startups-form/ProblemSection';
import SolutionLevel from '@/components/startups-form/SolutionLevel';
import BussinessModelDropDown from '@/components/startups-form/BussinessModelDropDown';

interface PitchdeckUploadProps {
  title: string;
  yesLabel: string;
  noLabel: string;
  chooseFileLabel: string;
  uploadDocumentLabel: string;
  productNameLabel: string;
  productNameRequired: string;
  productNamePlaceholder: string;
  siteAddressLabel: string;
  siteAddressRequired: string;
  siteAddressPlaceholder: string;
  fileCounter: boolean;
  onFileCounterChange: (name: string) => void;
  onFileChange: (file: any) => void;
  register: UseFormRegister<StartupsFormData>;
  errors: FieldErrors<StartupsFormData>;
  
  // Additional props for nested components
  handleSolutionsLevelChange: (value: any) => void;
  solutionsLevel: any;
  setValue: any;
  handleFinancialModelFileChange: (file: any) => void;
  
  // Translation props
  translations: {
    // Problems Section
    problems: {
      title: string;
      customerProblem: string;
      customerProblemRequired: string;
      customerProblemPlaceholder: string;
    };
    
    // Business Model
    businessModel: {
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
    
    // Target Market
    targetMarket: {
      targetMarket: string;
      targetCharacteristics: string;
      targetCharacteristicsRequired: string;
      targetCharacteristicsPlaceholder: string;
      targetCustomers: string;
      targetCustomersRequired: string;
      targetCustomersPlaceholder: string;
      targetEstimated: string;
      targetEstimatedRequired: string;
      targetEstimatedPlaceholder: string;
      targetTotal: string;
      targetTotalRequired: string;
      targetTotalPlaceholder: string;
    };
    
    // Property
    property: {
      property: string;
      propertyRevenue: string;
      propertyRevenueRequired: string;
      propertyRevenuePlaceholder: string;
      propertyMonthly: string;
      propertyMonthlyRequired: string;
      propertyMonthlyPlaceholder: string;
      propertyRate: string;
      propertyRateRequired: string;
      propertyRatePlaceholder: string;
      propertyBusiness: string;
      propertyBusinessRequired: string;
      propertyBusinessPlaceholder: string;
      propertyCapital: string;
      propertyCapitalRequired: string;
      propertyCapitalPlaceholder: string;
    };
  };
}

const PitchdeckUpload: React.FC<PitchdeckUploadProps> = ({
  title,
  yesLabel,
  noLabel,
  chooseFileLabel,
  uploadDocumentLabel,
  productNameLabel,
  productNameRequired,
  productNamePlaceholder,
  siteAddressLabel,
  siteAddressRequired,
  siteAddressPlaceholder,
  fileCounter,
  onFileCounterChange,
  onFileChange,
  register,
  errors,
  handleSolutionsLevelChange,
  solutionsLevel,
  setValue,
  handleFinancialModelFileChange,
  translations
}) => {


  return (
    <div className='flex flex-col items-center'>
      <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
        <p className='text-black font-medium font-barlow text-lg leading-[19px]'>{title}</p>
      </div>
      
      <div className='w-full md:max-w-lg xl:max-w-xl bg-whiteGold drop-shadow-md px-2 py-4'>
        <div className='w-full flex flex-row items-center justify-around cursor-pointer'>
          <div className='size-auto flex flex-row gap-2 items-center' onClick={() => onFileCounterChange("pitch")}>
            <div className='border-2 rounded-full border-primary p-1'>
              <div
                className={`size-4 rounded-full transition-all ${
                  fileCounter ? "bg-primary" : "bg-whiteGold"
                }`}
              />
            </div>
            <p className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{yesLabel}</p>
          </div>
          
          <div className='size-auto flex flex-row gap-2 items-center' onClick={() => onFileCounterChange("pitch")}>
            <div className='border-2 rounded-full border-primary p-1'>
              <div
                className={`size-4 rounded-full transition-all ${
                  !fileCounter ? "bg-primary" : "bg-whiteGold"
                }`}
              />
            </div>
            <p className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{noLabel}</p>
          </div>
        </div>
      </div>

      {fileCounter ? (
        <div className='w-full md:max-w-lg 2xl:max-w-xl mt-8'>
            <div className='bg-whiteGold drop-shadow-md justify-center'>
              {/* <label className="cursor-pointer block w-full">
                <p className='text-grayLabel'>{chooseFileLabel}</p>
                <input
                  type="file"
                  name='pitchDeckFile'
                  className="opacity-0 cursor-pointer"
                  onChange={(e) => {
                    onFileChange(e.target.files ? e.target.files[0] : '')
                  }}
                /> */}
                <FileUpload
                  name="pitchDeckFile"
                  label={uploadDocumentLabel}
                  onChange={onFileChange}
                />
              {/* </label> */}
            </div>
        </div>
      ) : (
        <div className='w-full h-auto'>
          <div className="w-full md:max-w-lg xl:max-w-xl mx-auto grid grid-cols-1 gap-y-4 my-2">
            <label>Product Name
                <Input
                register={register} 
                errors={errors} 
                nameInput={productNameLabel}
                type={'text'} 
                required={productNameRequired}
                patternValue={''} 
                patternMessage={''} 
                placeholder={productNamePlaceholder}
                className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                        
                />
            </label>

            <label>Site Address
                <Input 
                register={register} 
                errors={errors} 
                nameInput={siteAddressLabel}
                type={'text'} 
                required={siteAddressRequired}
                patternValue={''} 
                patternMessage={''} 
                placeholder={siteAddressPlaceholder}
                className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                        
                />
            </label>
          </div>

          <div className="w-full">
            <ProblemsSection
              title={translations.problems.title}
              textAreaTitle={translations.problems.customerProblem}
              textAreaRequired={translations.problems.customerProblemRequired}
              textAreaPlaceholder={translations.problems.customerProblemPlaceholder}
              register={register}
              errors={errors}
            /> 
            
            <SolutionLevel
              handleSolutionsLevelChange={handleSolutionsLevelChange}
              solutionsLevel={solutionsLevel}
              register={register}
              errors={errors}
              setValue={setValue}
            />
            
            <BussinessModelDropDown
              register={register}
              errors={errors}
              handleFinancialModelFileChange={handleFinancialModelFileChange}
              translations={translations.businessModel}
            />
            
            <TargetMarketDropDown 
              register={register}
              errors={errors}
              translations={translations.targetMarket}
            />
            
            <PropertyDropDown 
              register={register}
              errors={errors}
              translations={translations.property}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PitchdeckUpload;