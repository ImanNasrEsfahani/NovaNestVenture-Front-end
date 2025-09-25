'use client'
import React from 'react'
import TextArea from '@/components/common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'

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

export default function TargetMarketDropDown( {
  register,
  errors,
  translations
  } : Props) {

  return (
    <>
      <div className='w-full py-8 px-4'>
        <div className='w-full lg:max-w-xl xl:max-w-2xl mx-auto'>
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
        <div className='w-full lg:max-w-xl xl:max-w-2xl mx-auto'>
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
        <div className='w-full lg:max-w-xl xl:max-w-2xl mx-auto'>
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
      </div>
    </>
  )
}