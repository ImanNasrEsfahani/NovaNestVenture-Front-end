import React, { useState } from 'react'
import TextArea from '@/components/common/TextArea';
import CollapsibleHeader from '@/components/startups-form/CollapsibleHeader';
import { StartupsFormData } from '@/types/global';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type PropertyTranslations = {
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
}

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    translations: PropertyTranslations
}

export default function PropertyDropDown(props: Props) {

  const {
    register,
    errors,
    translations
  } = props;

  const [propertyOpen, setPropertyOpen] = useState<boolean>(false);
  const handleToggle = () => {
    console.log('Toggle clicked, current state:', propertyOpen);
    setPropertyOpen(!propertyOpen);
  };

  return (
    <div>
      <CollapsibleHeader
        title={translations.property}
        isOpen={propertyOpen}
        onToggle={handleToggle}
      />
    
      {propertyOpen && (
        <>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea
                title={translations.propertyRevenue}
                register={register}
                errors={errors} 
                required={translations.propertyRevenueRequired} 
                nameTextArea={"startupRevenue"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.propertyRevenuePlaceholder}
            />
          </div>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea 
                title={translations.propertyMonthly}
                register={register}
                errors={errors} 
                required={translations.propertyMonthlyRequired}
                nameTextArea={"monthlyIncome"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.propertyMonthlyPlaceholder}
            />
          </div>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea 
                title={translations.propertyRate}
                register={register}
                errors={errors} 
                required={translations.propertyRateRequired}
                nameTextArea={"currentInterestRate"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.propertyRatePlaceholder}
            />
          </div>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea 
                title={translations.propertyBusiness}
                register={register}
                errors={errors} 
                required={translations.propertyBusinessRequired}
                nameTextArea={"currentRaisedFunding"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.propertyBusinessPlaceholder}
            />
          </div>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea 
                title={translations.propertyCapital}
                register={register}
                errors={errors} 
                required={translations.propertyCapitalRequired}
                nameTextArea={"neededCapital"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.propertyCapitalPlaceholder}
            />
          </div>
        </>
      )}
    </div>
  )
}