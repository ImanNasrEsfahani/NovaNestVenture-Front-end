'use client'
import React, { useState } from 'react'
import TextArea from '@/components/common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import CollapsibleHeader from '@/components/startups-form/CollapsibleHeader';

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    translations: {
        targetMarket: string
        targetCharacteristics: string
        targetCharacteristicsRequired: string
        targetCharacteristicsPlaceholder: string
        targetCustomers: string
        targetCustomersRequired: string
        targetCustomersPlaceholder: string
        targetEstimated: string
        targetEstimatedRequired: string
        targetEstimatedPlaceholder: string
        targetTotal: string
        targetTotalRequired: string
        targetTotalPlaceholder: string
    }
}

export default function TargetMarketDropDown(props: Props) {

  const {
    register,
    errors,
    translations
  } = props;  

  const [targetMarketOpen, setTargetMarketOpen] = useState<boolean>(false);
  const handleToggle = () => {
    console.log('Toggle clicked, current state:', targetMarketOpen);
    setTargetMarketOpen(!targetMarketOpen);
  };

  return (
    <div>
      <CollapsibleHeader
        title={translations.targetMarket}
        isOpen={targetMarketOpen}
        onToggle={handleToggle}
      />
      
      {targetMarketOpen && (
        <>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea 
                title={translations.targetCharacteristics}
                register={register}
                errors={errors} 
                required={translations.targetCharacteristicsRequired}
                nameTextArea={"customerCharacteristic"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.targetCharacteristicsPlaceholder}
            />
          </div>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea 
                title={translations.targetCustomers}
                register={register}
                errors={errors} 
                required={translations.targetCustomersRequired}
                nameTextArea={"currentCustomers"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.targetCustomersPlaceholder}
            />
          </div>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea 
                title={translations.targetEstimated}
                register={register}
                errors={errors} 
                required={translations.targetEstimatedRequired} 
                nameTextArea={"estimatedMarketSize"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.targetEstimatedPlaceholder}
            />
          </div>
          <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
            <TextArea
                title={translations.targetTotal}
                register={register}
                errors={errors} 
                required={translations.targetTotalRequired}
                nameTextArea={"totalTamSamSom"} 
                patternValue={''} 
                patternMessage={''} 
                placeholder={translations.targetTotalPlaceholder}
            />
          </div>
        </>
      )}
    </div>
  )
}