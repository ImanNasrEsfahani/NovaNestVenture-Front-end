'use client';
import React, { useEffect, useState, useRef } from 'react';
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
import PanelsRenderer from '@/components/startups-form/PanelsRenderer';

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
      title: string;
      solution: string;
      solutionPlaceholder: string,
      solutionRequired: string,
      solutionsErrorMessage: string,

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

  // add submit counter so effect runs on form submit
  submitCount?: number;
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
    translations,
    required,
    prefix,
    submitCount,
  } = props;

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
      title: translations.solutionLevel.title,
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

  // helper: find first panel id that has a validation error
  const findFirstErrorPanelId = () => {
    console.log('findFirstErrorPanelId: current errors:', errors);
    const errored = panels
      .map(p => ({ id: p.id, fields: p.fields ?? [], hasError: p.fields?.some(f => Boolean(errors?.[f as keyof StartupsFormData])) ?? false }))
      .filter(p => p.hasError);
    console.log('findFirstErrorPanelId: panels with errors:', errored);
    const id =
      panels.find(p => p.fields?.some(f => Boolean(errors?.[f as keyof StartupsFormData])))?.id
      // if none with errors, prefer the first visible panel, else fallback to first panel
      ?? panels.find(p => p.show)?.id
      ?? panels[0]?.id
      ?? null;
    console.log('findFirstErrorPanelId: chosen id ->', id);
    return id;
  };

  // open panel state: default to first error-containing panel (if any) or first visible panel
  const [openPanel, setOpenPanel] = useState<string | null>(() => {
    const initial = findFirstErrorPanelId();
    console.log('initial openPanel ->', initial);
    return initial;
  });

  // track mount so first render where there are no errors doesn't auto-advance panels
  const mountedRef = useRef(false);

  // when errors change, open the first panel that contains an error.
  // If the currently open panel has no error but there are errored panels,
  // advance to the next errored panel (searching forward and wrapping).
  // derive a stable key for errors so effect fires when content changes
  const errorKeys = React.useMemo(() => Object.keys(errors || {}).sort().join(','), [errors]);

  // extract logic that inspects panels/errors and decides which panel to open
  const updateOpenPanelOnErrors = () => {
    const visiblePanels = panels.filter(p => p.show);
    const erroredIds = visiblePanels
      .filter(p => p.fields?.some(f => Boolean(errors?.[f as keyof StartupsFormData])))
      .map(p => p.id);

    console.log('updateOpenPanelOnErrors: visible errored ids ->', erroredIds);

    // initial mount handling kept if needed
    if (!mountedRef.current) {
      mountedRef.current = true;
      if (erroredIds.length > 0) {
        setOpenPanel(erroredIds[0]);
        console.log('initial mount: opening first errored ->', erroredIds[0]);
      }
      return;
    }

    if (erroredIds.length === 0) {
      console.log('updateOpenPanelOnErrors: no errored panels; do nothing');
      return;
    }

    // if current panel already errored, do nothing
    if (erroredIds.includes(openPanel ?? '')) {
      console.log('updateOpenPanelOnErrors: current openPanel already has error ->', openPanel);
      return;
    }

    // find next errored panel after current openPanel (forward search), wrap if needed
    const visibleIds = visiblePanels.map(p => p.id);
    const currentIndex = Math.max(0, visibleIds.indexOf(openPanel ?? ''));
    console.log('updateOpenPanelOnErrors: searching next errored panel ->', { visibleIds, currentIndex, erroredIds });

    let found: string | null = null;
    for (let i = currentIndex + 1; i < visibleIds.length; i++) {
      console.log('forward search i=', i, 'id=', visibleIds[i]);
      if (erroredIds.includes(visibleIds[i])) {
        found = visibleIds[i];
        console.log('found forward errored panel at index', i, 'id=', found);
        break;
      }
    }
    if (!found) {
      console.log('no forward match, wrapping search from start to currentIndex');
      for (let i = 0; i <= currentIndex; i++) {
        console.log('wrap search i=', i, 'id=', visibleIds[i]);
        if (erroredIds.includes(visibleIds[i])) {
          found = visibleIds[i];
          console.log('found wrapped errored panel at index', i, 'id=', found);
          break;
        }
      }
    }
    console.log('updateOpenPanelOnErrors: next errored panel chosen ->', found);

    if (found) {
      console.log('updateOpenPanelOnErrors: switching openPanel ->', found);
      setOpenPanel(found);
    } else {
      console.log('updateOpenPanelOnErrors: no next errored panel found');
    }
  };

  useEffect(() => {
    console.log('PitchdeckUpload: errors changed (raw):', errors);
    console.log('PitchdeckUpload: errorKeys ->', errorKeys, 'submitCount ->', submitCount);

    // delegate to extracted function
    updateOpenPanelOnErrors();
  }, [errorKeys, submitCount]); // now runs when form is submitted (submitCount changes)

  const [fileCounterState, setFileCounter] = useState<boolean>(false);

  const togglePanel = (id: string) => {
    setOpenPanel((prev) => {
      const visibleIds = panels.filter(p => p.show).map(p => p.id);
      console.log('togglePanel: visible panels ->', visibleIds, 'prev ->', prev, 'clicked ->', id);

      // if clicked panel is already open -> close it and open the next visible panel (if any)
      if (prev === id) {
        const idx = visibleIds.indexOf(id);
        console.log("idx: ", idx);
        const next = idx >= 0 && idx < visibleIds.length - 1 ? visibleIds[idx + 1] : null;
        console.log('togglePanel: closing current, next visible ->', next);
        return next;
      }

      // otherwise open the clicked panel (and close previous)
      console.log('togglePanel: opening ->', id);
      return id;
    });
  };

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
                required={required ? true : undefined}
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
              <PanelsRenderer panels={panels} openPanel={openPanel} togglePanel={togglePanel} errors={errors} />
            </div>
          </div>
        )}
      </div >
    </div >
  );
};

export default PitchdeckUpload;