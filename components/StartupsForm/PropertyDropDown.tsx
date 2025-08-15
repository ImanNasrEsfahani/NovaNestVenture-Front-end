import React, { useState } from 'react'
import TextArea from '../common/TextArea';
import ChevDown from 'public/static/logos/ChevDown';
import { StartupsFormData } from '@/types/global';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useLang } from 'stores/langStore';
import { useTranslation } from 'app/i18n/client';

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
}

const PropertyDropDown = (props: Props) => {

  const {
    register,
    errors
  } = props;

  const [propertyOpen, setPropertyOpen] = useState<boolean>(false);  
  const lang = useLang((s) => s.lang);
  const { t } = useTranslation(lang, 'formComponent');

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${propertyOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setPropertyOpen(!propertyOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.property}</p>
               <div className={`${propertyOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {propertyOpen && (
          <>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea
                  title={t('startUp',{ returnObjects: true }).trial.propertyRevenue}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"startupRevenue"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.propertyRevenuePlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).trial.propertyMonthly}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"monthlyIncome"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.propertyMonthlyPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).trial.propertyRate}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"currentInterestRate"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.propertyRatePlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).trial.propertyBusiness}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"currentRaisedFunding"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.propertyBusinessPlaceholder}
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={t('startUp',{ returnObjects: true }).trial.propertyCapital}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"neededCapital"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={t('startUp',{ returnObjects: true }).trial.propertyCapitalPlaceholder}
              />
            </div>
          </>
        )}
    </div>
  )
}

export default PropertyDropDown