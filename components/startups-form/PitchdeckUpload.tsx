import React, { useState } from 'react';
import Input from '@/components/common/form/Input';
import FileUpload from 'public/static/logos/FileUpload';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';

import PropertyDropDown from '@/components/startups-form/PropertyDropDown';
import TargetMarketDropDown from '@/components/startups-form/TargetMarketDropDown';
import ProblemsSection from '@/components/startups-form/ProblemSection';
import SolutionLevel from '@/components/startups-form/SolutionLevel';
import BussinessModelDropDown from '@/components/startups-form/BussinessModelDropDown';
import CollapsibleHeader from '@/components/startups-form/CollapsibleHeader';
import YesOrNoQuestion from './YesOrNoQuestion';

interface PitchdeckUploadProps {
  problem: boolean,
  solution: boolean,
  businessModel: boolean,
  targetMarket: boolean,
  property: boolean,

  chooseFile: string;
  productName: string;
  productNameRequired: string;
  productNamePlaceholder: string;
  siteAddress: string;
  siteAddressRequired: string;
  siteAddressPlaceholder: string;
  fileCounter: boolean;
  // onFileCounterChange: (value: boolean) => void;
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
    title: string;
    yesLabel: string;
    noLabel: string;
    
    // Problems Section
    problems: {
      title: string;
      customerProblem: string;
      customerProblemRequired: string;
      customerProblemPlaceholder: string;
    };

    solutionLevel: {
      solutionsUniqueValue: string;
      solutionsUniqueValueRequired: string;
      solutionsUniqueValuePlaceholder: string;
      solutionsLevel: string;
      solutionsLevelList: string[];
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
  problem,
  solution,
  businessModel,
  targetMarket,
  property,

  chooseFile,
  productName,
  productNameRequired,
  productNamePlaceholder,
  siteAddress,
  siteAddressRequired,
  siteAddressPlaceholder,
  // onFileCounterChange,
  onFileChange,
  register,
  errors,
  handleSolutionsLevelChange,
  solutionsLevel,
  setValue,
  handleFinancialModelFileChange,
  translations
}) => {
  const [openPanel, setOpenPanel] = useState<string | null>('problems');
  const [fileCounterState, setFileCounter] = useState<boolean>(false);

  const togglePanel = (id: string) => {
    setOpenPanel((prev) => (prev === id ? null : id));
  };

  
  const panels = [
    {
      id: 'problems',
      title: translations.problems.title,
      show: problem,
      content: (
        <ProblemsSection
          textAreaTitle={translations.problems.customerProblem}
          textAreaRequired={translations.problems.customerProblemRequired}
          textAreaPlaceholder={translations.problems.customerProblemPlaceholder}
          register={register}
          errors={errors}
        />
      )
    },
    {
      id: 'solution',
      title: 'Solution',
      show: solution,
      content: (
        <SolutionLevel
          handleSolutionsLevelChange={handleSolutionsLevelChange}
          solutionsLevel={solutionsLevel}
          register={register}
          errors={errors}
          setValue={setValue}
          translations={{
            solutionsUniqueValue: translations.solutionLevel.solutionsUniqueValue,
            solutionsUniqueValueRequired: translations.solutionLevel.solutionsUniqueValueRequired,
            solutionsUniqueValuePlaceholder: translations.solutionLevel.solutionsUniqueValuePlaceholder,
            solutionsLevel: translations.solutionLevel.solutionsLevel,
            solutionsLevelList: translations.solutionLevel.solutionsLevelList,
          }}
        />
      )
    },
    {
      id: 'businessModel',
      title: translations.businessModel.title,
      show: businessModel,
      content: (
        <BussinessModelDropDown
          register={register}
          errors={errors}
          handleFinancialModelFileChange={handleFinancialModelFileChange}
          translations={translations.businessModel}
        />
      )
    },
    {
      id: 'targetMarket',
      title: translations.targetMarket.targetMarket,
      show: targetMarket,
      content: (
        <TargetMarketDropDown
          register={register}
          errors={errors}
          translations={translations.targetMarket}
        />
      )
    },
    {
      id: 'property',
      title: translations.property.property,
      show: property,
      content: (
        <PropertyDropDown
          register={register}
          errors={errors}
          translations={translations.property}
        />
      )
    }
  ];

  return (
    <div className='w-full md:max-w-lg xl:max-w-2xl 2xl:max-w-4xl mx-auto pb-12'>
      <YesOrNoQuestion
        title={translations.title}
        yesLabel={translations.yesLabel}
        noLabel={translations.noLabel}
        value={fileCounterState}
        onChange={setFileCounter}
        name="fileCounter"
      />

      <div className="relative">
        <div
          aria-hidden={!fileCounterState}
          className={`w-full md:max-w-lg 2xl:max-w-xl mx-auto bg-whiteGold drop-shadow-md overflow-hidden transition-[max-height,opacity,transform,padding] duration-700 ease-out origin-top min-h-0
            ${fileCounterState ? 'opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none'}`}
        >
          <div className="px-4">
            <FileUpload name="pitchDeckFile" label={chooseFile} onChange={onFileChange} disabled={!fileCounterState} />
          </div>
        </div>

        <div
          aria-hidden={fileCounterState}
          className={`w-full transition-[max-height,opacity,transform,padding] duration-700 ease-out origin-top min-h-0
            ${!fileCounterState ? 'max-h-[1200px] opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none'}`}
        >
          {/* disable native form controls while hidden to avoid focusable hidden elements */}
          <fieldset disabled={fileCounterState} className="w-full">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 pt-6 pb-12">
              <label>{productName}
                <Input
                  register={register}
                  errors={errors}
                  nameInput="productName"
                  type={'text'}
                  required={productNameRequired}
                  patternValue={''}
                  patternMessage={''}
                  placeholder={productNamePlaceholder}
                  className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}
                />
              </label>

              <label>{siteAddress}
                <Input
                  register={register}
                  errors={errors}
                  nameInput="siteAddress"
                  type={'text'}
                  required={siteAddressRequired}
                  patternValue={''}
                  patternMessage={''}
                  placeholder={siteAddressPlaceholder}
                  className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}
                />
              </label>
            </div>

            <div className='space-y-4'>
              {panels.filter(p => p.show).map((p) => (
                 <div key={p.id} className="bg-whiteGold rounded-xl overflow-hidden shadow-sm">
                   <CollapsibleHeader
                     title={p.title}
                     isOpen={openPanel === p.id}
                     onToggle={() => togglePanel(p.id)}
                   />
                   {openPanel === p.id && (
                     <div className="p-6">
                       {p.content}
                     </div>
                   )}
                 </div>
               ))}
             </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default PitchdeckUpload;