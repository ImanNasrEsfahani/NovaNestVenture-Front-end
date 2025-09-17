import UploadFile from '@/public/static/logos/FileUpload'
import React, { useState } from 'react'
import Input from '@/components/common/form/Input'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import { getServerTranslation } from 'app/i18n'
import ProblemsSection from '@/components/startups-form/ProblemSection'
import SolutionLevel from '@/components/startups-form/SolutionLevel'
import BussinessModelDropDown from '@/components/startups-form/BussinessModelDropDown'

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
      <p className='mt-4 mb-6'>{t('startUp',{ returnObjects: true }).MVP.description}</p>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).MVP.pitchDeck}</p>
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
                          <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>{t('startUp',{ returnObjects: true }).MVP.choseFile}</p>
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
                          nameInput={t('startUp',{ returnObjects: true }).MVP.productName} 
                          type={'text'} 
                          required={t('startUp',{ returnObjects: true }).MVP.productNameRequired} 
                          patternValue={''} 
                          patternMessage={''} 
                          placeholder={t('startUp',{ returnObjects: true }).MVP.productNamePlaceholder} 
                          className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                                
                       />
                       <Input 
                          register={register} 
                          errors={errors} 
                          nameInput={t('startUp',{ returnObjects: true }).MVP.siteAddress} 
                          type={'text'} 
                          required={t('startUp',{ returnObjects: true }).MVP.siteAddressRequired} 
                          patternValue={''} 
                          patternMessage={''} 
                          placeholder={t('startUp',{ returnObjects: true }).MVP.siteAddressPlaceholder} 
                          className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                                
                       />
                     </div>
                 </div>
               )}
          </div>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).MVP.businessPlan}</p>
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
                          <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>{t('startUp',{ returnObjects: true }).MVP.choseFile}</p>
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
        <ProblemsSection
          title={t('startUp',{ returnObjects: true }).commons.problems.title}
          textAreaTitle={t('startUp',{ returnObjects: true }).commons.problems.customerProblem}
          textAreaRequired={t('startUp',{ returnObjects: true }).commons.problems.customerProblemRequired}
          textAreaPlaceholder={t('startUp',{ returnObjects: true }).commons.problems.customerProblemPlaceholder}
          register={register}
          errors={errors}
        />
        <SolutionLevel
          handleSolutionsLevelChange={handleSolutionsLevelChange}
          solutionsLevel={solutionsLevel}
          register={register}
          errors={errors}
          setValue={setValue}
        />
      <BussinessModelDropDown
        register={register}
        errors={errors}
        // handlePitchFileChange={handlePitchFileChange}
        handleFinancialModelFileChange={handleFinancialModelFileChange}
        translations={{
          title: t('startUp',{ returnObjects: true }).commons.businessModel.title,
          Monetization: t('startUp',{ returnObjects: true }).commons.businessModel.Monetization,
          MonetizationRequired: t('startUp',{ returnObjects: true }).commons.businessModel.MonetizationRequired,
          MonetizationPlaceholder: t('startUp',{ returnObjects: true }).commons.businessModel.MonetizationPlaceholder,
          Delivery: t('startUp',{ returnObjects: true }).commons.businessModel.Delivery,
          DeliveryRequired: t('startUp',{ returnObjects: true }).commons.businessModel.DeliveryRequired,
          DeliveryPlaceholder: t('startUp',{ returnObjects: true }).commons.businessModel.DeliveryPlaceholder,
          Financial: t('startUp',{ returnObjects: true }).commons.businessModel.Financial,
          choseFile: t('startUp',{ returnObjects: true }).commons.businessModel.choseFile,
          Accelerators: t('startUp',{ returnObjects: true }).commons.businessModel.Accelerators,
          AcceleratorsRequired: t('startUp',{ returnObjects: true }).commons.businessModel.AcceleratorsRequired,
          AcceleratorsPlaceholder: t('startUp',{ returnObjects: true }).commons.businessModel.AcceleratorsPlaceholder,
          KnowUs: t('startUp',{ returnObjects: true }).commons.businessModel.KnowUs,
          KnowUsRequired: t('startUp',{ returnObjects: true }).commons.businessModel.KnowUsRequired,
          KnowUsPlaceholder: t('startUp',{ returnObjects: true }).commons.businessModel.KnowUsPlaceholder,
        }}
      />
    </div>
  )
}

export default StartUpMvpRefactore