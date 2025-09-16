import React, { useState } from 'react'
import TextArea from '@/components/common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'
import { useLang } from 'stores/langStore'
import { getServerTranslation } from 'app/i18n'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
}

const TargetMarketDropDown = (props: Props) => {

  const {
    register,
    errors
  } = props;  

  const [targetMarketOpen, setTargetMarketOpen] = useState<boolean>(false);  
  const lang = useLang((s) => s.lang);
  const { t } = getServerTranslation(lang, 'formComponent')

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${targetMarketOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setTargetMarketOpen(!targetMarketOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px]'>{t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetMarket}</p>
               <div className={`${targetMarketOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {targetMarketOpen && (
          <>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCharacteristics}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCharacteristicsRequired}
                  nameTextArea={"customerCharacteristic"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCharacteristicsPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCustomers}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCustomersRequired}
                  nameTextArea={"currentCustomers"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCustomersPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetEstimated}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetEstimatedRequired} 
                  nameTextArea={"estimatedMarketSize"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetEstimatedPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea
                  title={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetTotal}
                  register={register}
                  errors={errors} 
                  required={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetTotalRequired}
                  nameTextArea={"totalTamSamSom"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetTotalPlaceholder}
              />
            </div>
          </>
        )}
    </div>
  )
}

export default TargetMarketDropDown