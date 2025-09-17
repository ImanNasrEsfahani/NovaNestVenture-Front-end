import React, { useState } from 'react'
import TextArea from '@/components/common/TextArea'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'
import { getServerTranslation } from '../../app/i18n'
import { useLang } from '../../stores/langStore'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    solutionsLevel: number
    handleSolutionsLevelChange: (index: number) => void
    setValue: UseFormSetValue<StartupsFormData>
}

export default function SolutionLevel(props: Props) {

  const {
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange,
    setValue
  } = props;     

  const lang = useLang((s) => s.lang);
  const { t } = getServerTranslation(lang, 'formComponent');

  const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);


  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${solutionsOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setSolutionsOpen(!solutionsOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white text-3xl'>{t('startUp',{ returnObjects: true }).commons.solutionLevel.solutions}</p>
               <div className={`${solutionsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {solutionsOpen && (
          <>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                     title={t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsUniqueValue}
                     register={register}
                     errors={errors} 
                     required={t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsUniqueValueRequired} 
                     nameTextArea={"scalable"} 
                     patternValue={''} 
                     patternMessage={''} 
                     placeholder={t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsUniqueValuePlaceholder }                                                 
                 />
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <div className='w-full h-auto flex flex-col gap-4 items-start'>
                    <div className='w-full h-auto'>
                        <p className='px-2 text-lg text-[#6b6b6b] dark:text-current'>{t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsLevel}</p>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 items-start px-2'>
                        {t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsLevelList.map((item: string, index: number) => (
                            <div key={index} className='w-full flex flex-row gap-1 items-center'>
                                <div className='size-auto flex flex-row items-center gap-2 cursor-pointer' onClick={() => {
                                  handleSolutionsLevelChange(index)
                                }}>
                                    <div className='border-2 rounded-full border-primary p-px'>
                                        <div
                                            className={`size-2 rounded-full transition-all ${
                                              solutionsLevel == index ? "bg-primary" : "bg-white"
                                            }`}
                                        >
                                          <input 
                                            type='checkbox'
                                            value={item}
                                            className='size-full inset-0 opacity-0'
                                            onChange={() => {
                                              setValue("productLevel", item)
                                            }}
                                          />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-black font-barlow font-medium text-lg xl:text-lg leading-[14px] mb-1'>{item}</p>
                            </div>
                        ))}
                    </div>
                 </div>
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                     title={t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsPosition}
                     register={register}
                     errors={errors} 
                     required={t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsPositionRequired} 
                     nameTextArea={"solution"} 
                     patternValue={''} 
                     patternMessage={''} 
                     placeholder={t('startUp',{ returnObjects: true }).commons.solutionLevel.solutionsPositionPlaceholder}                                                        
                 />
               </div>
          </>
        )}
    </div>
  )
}