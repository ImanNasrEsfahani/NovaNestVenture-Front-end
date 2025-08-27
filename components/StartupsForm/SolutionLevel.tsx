import React, { useState } from 'react'
import TextArea from '../common/TextArea'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'
import { useTranslation } from 'app/i18n/client'
import { useLang } from 'stores/langStore'

const productLevels: Array<string> = [
  "The basic principle has been observed.",
  "The technology concept has been formulated.",
  "Experimental proof of concept.",
  "The confirmed technology in laboratory.",
  "The confirmed technology in the environmental conditions",
  "The presented technology in the environmental conditions",
  "Show the system prototype in the mvp operating environment.",
  "The proved realistic system in the operating environment.",
  "A complete and qualified system.",
]

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    solutionsLevel: number
    handleSolutionsLevelChange: (index: number) => void
    setValue: UseFormSetValue<StartupsFormData>
}

const SolutionLevel = (props: Props) => {

  const {
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange,
    setValue
  } = props;     

  const lang = useLang((s) => s.lang);
  const { t } = useTranslation(lang, 'formComponent');

  const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);


  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${solutionsOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setSolutionsOpen(!solutionsOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.solutions}</p>
               <div className={`${solutionsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {solutionsOpen && (
          <>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                     title={t('startUp',{ returnObjects: true }).trial.solutionsUniqueValue}
                     register={register}
                     errors={errors} 
                     required={"this fiels is required"} 
                     nameTextArea={"scalable"} 
                     patternValue={''} 
                     patternMessage={''} 
                     placeholder={t('startUp',{ returnObjects: true }).trial.solutionsUniqueValuePlaceholder }                                                 
                 />
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <div className='w-full h-auto flex flex-col gap-4 items-start'>
                    <div className='w-full h-auto'>
                        <p className='px-2 text-lg text-[#6b6b6b] dark:text-current'>{t('startUp',{ returnObjects: true }).trial.solutionsLevel}</p>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 items-start px-2'>
                        {productLevels.map((item: string, index: number) => (
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
                                <p className='text-black font-barlow font-medium text-[12px] xl:text-[14px] leading-[14px] mb-1'>{item}</p>
                            </div>
                        ))}
                    </div>
                 </div>
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                     title={'What is your unique value proposition (innovation)? What is new about what you do?*'}
                     register={register}
                     errors={errors} 
                     required={"this fiels is required"} 
                     nameTextArea={"solution"} 
                     patternValue={''} 
                     patternMessage={''} 
                     placeholder={'Description'}                                                        
                 />
               </div>
          </>
        )}
    </div>
  )
}

export default SolutionLevel