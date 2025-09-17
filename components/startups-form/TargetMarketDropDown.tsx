'use client'
import React, { useState } from 'react'
import TextArea from '@/components/common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'

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

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${targetMarketOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setTargetMarketOpen(!targetMarketOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px]'>{translations.targetMarket}</p>
               <div className={`${targetMarketOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
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