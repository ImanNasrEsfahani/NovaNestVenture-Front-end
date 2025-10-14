'use client';
import React, { useEffect, useState } from 'react';
import Input from '@/components/common/form/Input';
import FileUpload from '@/components/common/form/FileUpload';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';

import PropertyDropDown from '@/components/startups-form/PropertyDropDown';
import TargetMarketDropDown from '@/components/startups-form/TargetMarketDropDown';
import ProblemsSection from '@/components/startups-form/ProblemSection';
import SolutionLevel from '@/components/startups-form/SolutionLevel';
import BussinessModelDropDown from '@/components/startups-form/BussinessModelDropDown';
import CollapsibleHeader from '@/components/startups-form/CollapsibleHeader';
import YesOrNoQuestion from '@/components/startups-form/YesOrNoQuestion';

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
      customerProblemErrorMessage: string;
    };

    solutionLevel: {
      solutionsUniqueValue: string;
      solutionsUniqueValueRequired: string;
      solutionsUniqueValuePlaceholder: string;
      solutionsUniqueValueErrorMessage: string;
      solutionsLevel: string;
      solutionsLevelList: string[];
    };

    // Business Model
    businessModel: {
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

    // Target Market
    targetMarket: {
      targetMarket: string;
      targetCharacteristics: string;
      targetCharacteristicsRequired: string;
      targetCharacteristicsPlaceholder: string;
      targetCharacteristicsErrorMessage: string;

      targetCustomers: string;
      targetCustomersRequired: string;
      targetCustomersPlaceholder: string;
      targetCustomersErrorMessage: string;

      targetEstimated: string;
      targetEstimatedRequired: string;
      targetEstimatedPlaceholder: string;
      targetEstimatedErrorMessage: string;

      targetTotal: string;
      targetTotalRequired: string;
      targetTotalPlaceholder: string;
      targetTotalErrorMessage: string;
    };

    // Property
    property: {
      property: string;
      propertyRevenue: string;
      propertyRevenueRequired: string;
      propertyRevenuePlaceholder: string;
      propertyRevenueErrorMessage: string;
      propertyMonthly: string;
      propertyMonthlyRequired: string;
      propertyMonthlyPlaceholder: string;
      propertyMonthlyErrorMessage: string;
      propertyRate: string;
      propertyRateRequired: string;
      propertyRatePlaceholder: string;
      propertyRateErrorMessage: string;
      propertyBusiness: string;
      propertyBusinessRequired: string;
      propertyBusinessPlaceholder: string;
      propertyBusinessErrorMessage: string;
      propertyCapital: string;
      propertyCapitalRequired: string;
      propertyCapitalPlaceholder: string;
      propertyCapitalErrorMessage: string;
    };
  };
  required: boolean;
  prefix: string;
}

const PitchdeckUpload: React.FC<PitchdeckUploadProps> = (props) => {
  const {
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
    translations,
    required,
    prefix
  } = props;

  useEffect(() => {
    console.log('PitchdeckUpload errors:', errors);
  }, [errors]);

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
      fields: ['customerProblem'],
      content: (
        <ProblemsSection
          textAreaTitle={translations.problems.customerProblem}
          textAreaRequired={translations.problems.customerProblemRequired}
          textAreaPlaceholder={translations.problems.customerProblemPlaceholder}
          textAreaErrorMessage={translations.problems.customerProblemErrorMessage}
          register={register}
          errors={errors}
        />
      )
    },
    {
      id: 'solution',
      title: 'Solution',
      show: solution,
      fields: ['uniqueValueProposition', 'solutionsLevel'],
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
            solutionsUniqueValueErrorMessage: translations.solutionLevel.solutionsUniqueValueErrorMessage,
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
      fields: ['monetizationOfYourPlan', 'structureOfYourSales'],
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
      fields: ['customerCharacteristic', 'currentCustomers', 'estimatedMarketSize'],
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
      fields: ['startupRevenue', 'monthlyIncome', 'currentRaisedFunding', 'neededCapital'],
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
        {fileCounterState ? (
          <div className="w-full md:max-w-lg 2xl:max-w-xl mx-auto bg-whiteGold drop-shadow-md overflow-hidden transition-[max-height,opacity,transform,padding] duration-700 ease-out origin-top min-h-0 opacity-100 translate-y-0 pointer-events-auto">
            <div className="px-4 py-6">
              <FileUpload
                nameInput="pitchDeckFile"
                required={required ? chooseFile : undefined}
                errors={errors}
                label={chooseFile}
                onChange={onFileChange}
                disabled={false}
                file=""
              />
            </div>
          </div>
        ) : (
          <div className="w-full transition-[max-height,opacity,transform,padding] duration-700 ease-out origin-top min-h-0 opacity-100 translate-y-0 pointer-events-auto">
            <Input
              id={`${prefix}_product_name`}
              register={register}
              errors={errors}
              nameInput="productName"
              type="text"
              required={required ? productNameRequired : undefined}
              patternValue=""
              patternMessage=""
              placeholder={productNamePlaceholder}
              className="border col-span-1 rounded-lg border-primary bg-whiteGold p-2"
              label={productName}
              labelClass=""
            />
            <Input
              id={`${prefix}_site_address`}
              register={register}
              errors={errors}
              nameInput="siteAddress"
              type="text"
              required={required ? siteAddressRequired : undefined}
              patternValue=""
              patternMessage=""
              placeholder={siteAddressPlaceholder}
              className="border col-span-1 rounded-lg border-primary bg-whiteGold p-2"
              label={siteAddress}
              labelClass=""
            />

            <div className="space-y-4">
              {panels.filter((p) => p.show).map((p) => {
                const hasError = p.fields?.some((field) => !!errors[field as keyof StartupsFormData]);
                return (
                  <div key={p.id} className={`bg-darkGold rounded-xl overflow-hidden shadow-sm ${hasError ? 'ring-1 ring-red-500' : ''}`}>
                    <CollapsibleHeader
                      title={p.title}
                      isOpen={openPanel === p.id}
                      onToggle={() => togglePanel(p.id)}
                      hasError={hasError}
                    />
                    <div
                      aria-hidden={openPanel !== p.id}
                      className={`transition-all duration-300 ${openPanel === p.id ? 'opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                    >
                      {p.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div >
    </div >
  );
};

export default PitchdeckUpload;