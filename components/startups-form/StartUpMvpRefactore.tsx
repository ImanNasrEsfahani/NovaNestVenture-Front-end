import UploadFile from '@/public/static/logos/FileUpload'
import React, { useState } from 'react'
import Input from '@/components/common/form/Input'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import { getServerTranslation } from 'app/i18n'
import ChevDown from '@/public/static/logos/ChevDown'
import TextArea from '@/components/common/TextArea'
import SolutionLevel from '@/components/startups-form/SolutionLevel'

type Props = {
    lang: string;
    handleFileCounterChange: (name: string) => void
    handlePitchFileChange: (file: any) => void
    handleBusinessFileChange: (file: any) => void
    filesCounter: {
        pitch: boolean;
        business: boolean;
        financial: boolean;
    }
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    handleSolutionsLevelChange: (index: number) => void
    solutionsLevel: number
    setValue: UseFormSetValue<StartupsFormData>
    handleFinancialModelFileChange: (file: any) => void
}

const StartUpMvpRefactore = (props: Props) => {

  const {
    lang,
    handleFileCounterChange,
    handlePitchFileChange,
    handleBusinessFileChange,
    filesCounter,
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange,
    setValue,
    handleFinancialModelFileChange
  } = props;  

  const { t } = getServerTranslation(lang, 'formComponent');

  const [problemsOpen, setProblemsOpen] = useState<boolean>(false);
  const [businessOpen, setBusinessOpen] = useState<boolean>(false);


  return (
    <div className='w-full h-auto px-4 my-4'>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).trial.pitchDeck}</p>
               </div>
               <div className='w-full h-auto bg-whiteGold drop-shadow-md px-2 py-4'>
                 <div className='w-full h-auto flex flex-row items-center justify-around cursor-pointer'>
                       <div className='size-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("pitch")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`size-3 rounded-full transition-all ${
                                           filesCounter.pitch ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('yes')}</p>
                       </div>
                       <div className='size-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("pitch")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`size-3 rounded-full transition-all ${
                                           !filesCounter.pitch ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('no')}</p>
                       </div>
                 </div>
               </div> 
               {filesCounter.pitch ? (
                 <div className='w-full h-auto'>
                     <div className='w-full h-auto flex flex-col items-center gap-2'>
                       <div className='size-auto'>
                          <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>Upload your document</p>
                       </div>
                       <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                          <label className="cursor-pointer relative size-full flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  className="absolute inset-0 size-auto opacity-0 cursor-pointer"
                                  onChange={handlePitchFileChange}
                            />
                            <UploadFile 
                              name="pitchDeckFile"
                              label="Upload your pitch deck"
                              onChange={(file) => handlePitchFileChange(file)}
                            />
                          </label>
                       </div>
                     </div>
                 </div>
               ) : (
                 <div className='w-full h-auto'>
                     <div className="w-full grid grid-cols-1 gap-x-6 gap-y-4 my-2">
                       <Input
                          register={register} 
                          errors={errors} 
                          nameInput={t('startUp',{ returnObjects: true }).productName} 
                          type={'text'} 
                          required={t('startUp',{ returnObjects: true }).productNameRequired} 
                          patternValue={''} 
                          patternMessage={''} 
                          placeholder={t('startUp',{ returnObjects: true }).productNamePlaceholder} 
                          className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                                
                       />
                       <Input 
                          register={register} 
                          errors={errors} 
                          nameInput={t('startUp',{ returnObjects: true }).siteAddress} 
                          type={'text'} 
                          required={t('startUp',{ returnObjects: true }).siteAddressRequired} 
                          patternValue={''} 
                          patternMessage={''} 
                          placeholder={t('startUp',{ returnObjects: true }).siteAddressPlaceholder} 
                          className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                                
                       />
                     </div>
                 </div>
               )}
          </div>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).trial.businessPlan}</p>
               </div>
               <div className='w-full h-auto bg-whiteGold drop-shadow-md px-2 py-4'>
                 <div className='w-full h-auto flex flex-row items-center justify-around cursor-pointer'>
                       <div className='size-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("business")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`size-3 rounded-full transition-all ${
                                           filesCounter.business ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('yes')}</p>
                       </div>
                       <div className='size-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("business")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`size-3 rounded-full transition-all ${
                                           !filesCounter.business ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('no')}</p>
                       </div>
                 </div>
               </div> 
               {filesCounter.business ? (
                 <div className='w-full h-auto'>
                     <div className='w-full h-auto flex flex-col items-center gap-2'>
                       <div className='size-auto'>
                          <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>Upload your document</p>
                       </div>
                       <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                          <label className="cursor-pointer relative size-full flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  className="absolute inset-0 size-auto opacity-0 cursor-pointer"
                                  onChange={handleBusinessFileChange}
                            />
                            <UploadFile 
                              name="businessPlanFile"
                              label="Upload your business plan"
                              onChange={(file) => handleBusinessFileChange(file)}
                            />
                          </label>
                       </div>
                     </div>
                 </div>
               ) : (
                 <></>
               )}
          </div>
        </div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${problemsOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setProblemsOpen(!problemsOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-semibold text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.problems}</p>
               <div className={`${problemsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {problemsOpen && (
          <div className='w-full h-auto md:px-1'>
               <TextArea
                 title={t('startUp',{ returnObjects: true }).trial.problemsLabel}
                 register={register}
                 errors={errors} 
                 required={"this fiels is required"} 
                 nameTextArea={"customerProblem"} 
                 patternValue={''} 
                 patternMessage={''} 
                 placeholder={t('startUp',{ returnObjects: true }).trial.problemsPlaceholder}
               />
          </div>
        )}
        <SolutionLevel
          handleSolutionsLevelChange={handleSolutionsLevelChange}
          solutionsLevel={solutionsLevel}
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${businessOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setBusinessOpen(!businessOpen)
        }}>
            <div className='w-full h-auto flex justify-center items-center gap-2'>
                 <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>{t('startUp',{ returnObjects: true }).trial.businessModel}</p>
                 <div className={`${businessOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                   <ChevDown />
                 </div>
            </div>
        </div>
        {businessOpen && (
                <>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessMonetization}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"MonetizationOfYourPlan"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessMonetizationPlaceholder}                                                 
                        />
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessDelivery}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"structureOfYourSales"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessDeliveryPlaceholder}
                        />
                    </div>
                    <div className='w-full h-auto flex justify-start items-center'>
                        <p className='text-black font-medium text-[15px] leading-[18px]'>If your plan has a financial model, please upload it.</p>
                    </div>
                    <div className='w-full md:w-1/3 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden mt-2 mb-6'>
                        <label className="cursor-pointer relative size-full flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  name='financialModelFile'
                                  className="absolute inset-0 size-auto opacity-0 cursor-pointer"
                                  onChange={(e) => {
                                    handleFinancialModelFileChange(e.target.files ? e.target.files[0] : '')
                                  }}
                            />
                            <p className='text-black font-barlow font-medium text-[13px] leading-4'>{t('startUp',{ returnObjects: true }).trial.choseFile}</p>
                            <UploadFile 
                              name="financialModelFile"
                              label="Upload your financial model"
                              onChange={(file) => handleFinancialModelFileChange(file)}
                            />
                        </label>
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessAccelerators}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"cooperatedWithInvestors"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessAcceleratorsPlaceholder}                                            
                        />
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={t('startUp',{ returnObjects: true }).trial.businessKnowUs}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"getToKnowUs"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={t('startUp',{ returnObjects: true }).trial.businessKnowUsPlaceholder}                                            
                        />
                    </div>
                </>
        )}
    </div>
  )
}

export default StartUpMvpRefactore