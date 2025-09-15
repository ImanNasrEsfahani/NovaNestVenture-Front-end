'use client'
import FileUpload from '@/public/static/logos/FileUpload'
import React, { useState } from 'react'
import Input from '@/components/common/form/Input'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import { useLang } from 'stores/langStore'
import { getServerTranslation } from 'app/i18n'
import ChevDown from '@/public/static/logos/ChevDown'
import TextArea from '@/components/common/TextArea'
import PropertyDropDown from '@/components/startups-form/PropertyDropDown'
import TargetMarketDropDown from '@/components/startups-form/TargetMarketDropDown'
import BussinessModelDropDown from '@/components/startups-form/BussinessModelDropDown'
import SolutionLevel from '@/components/startups-form/SolutionLevel'

type Props = {
    handleFileCounterChange: (name: string) => void
    handlePitchFileChange: (file: any) => void
    handleBusinessFileChange: (file: any) => void
    handleFinancialFileChange: (file: any) => void
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

const StartUpTrialRefactore = (props: Props) => {
  const {
    handleFileCounterChange,
    handlePitchFileChange,
    handleBusinessFileChange,
    handleFinancialFileChange,
    filesCounter,
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange,
    setValue,
    handleFinancialModelFileChange
  } = props;  

  const lang = useLang((s) => s.lang);
  const { t } = getServerTranslation(lang, 'formComponent');

  const [problemsOpen, setProblemsOpen] = useState<boolean>(false);

  return (
    <div className='w-full h-auto px-4 my-4'>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>Do you have Pitch deck?*</p>
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
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{'Yes'}</p>
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
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{'No'}</p>
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
                          <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  name='pitchDeckFile'
                                  className="absolute inset-0 size-full opacity-0 cursor-pointer"
                                  onChange={(e) => {
                                    handlePitchFileChange(e.target.files ? e.target.files[0] : '')
                                  }}
                            />
                            {filesCounter.pitch && (
                              <FileUpload
                                name="pitchDeckFile"
                                label="Upload your document"
                                onChange={handlePitchFileChange}
                              />
                            )}
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
                          className={'border rounded-lg border-primary bg-whiteGold p-2'}                                                                
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
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>Do you have Business Plan?*</p>
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
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{'Yes'}</p>
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
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{'No'}</p>
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
                          <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  name='businessPlanFile'
                                  className="absolute inset-0 size-full opacity-0 cursor-pointer"
                                  onChange={(e) => {
                                    handleBusinessFileChange(e.target.files ? e.target.files[0] : '')
                                  }}
                            />
                            {filesCounter.pitch && (
                              <FileUpload
                                name="pitchDeckFile"
                                label="Upload your document"
                                onChange={handlePitchFileChange}
                              />
                            )}
                          </label>
                       </div>
                     </div>
                 </div>
               ) : (
                 <></>
               )}
          </div>
          <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
               <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
                 <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>Do you have Financial?*</p>
               </div>
               <div className='w-full h-auto bg-whiteGold drop-shadow-md px-2 py-4'>
                 <div className='w-full h-auto flex flex-row items-center justify-around cursor-pointer'>
                       <div className='size-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("financial")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`size-3 rounded-full transition-all ${
                                           filesCounter.financial ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{'Yes'}</p>
                       </div>
                       <div className='size-auto flex flex-row gap-2 items-center' onClick={() => {
                          handleFileCounterChange("financial")
                       }}>
                          <div className='border-2 rounded-full border-primary p-1'>
                                  <div
                                         className={`size-3 rounded-full transition-all ${
                                           !filesCounter.financial ? "bg-primary" : "bg-whiteGold"
                                         }`}
                                  />
                          </div>
                          <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{'No'}</p>
                       </div>
                 </div>
               </div> 
               {filesCounter.financial ? (
                 <div className='w-full h-auto'>
                     <div className='w-full h-auto flex flex-col items-center gap-2'>
                       <div className='size-auto'>
                          <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>Upload your document</p>
                       </div>
                       <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                          <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  name='financialFile'
                                  className="absolute inset-0 size-full opacity-0 cursor-pointer"
                                  onChange={(e) => {
                                    handleFinancialFileChange(e.target.files ? e.target.files[0] : '')
                                  }}
                            />
                            {filesCounter.pitch && (
                              <FileUpload
                                name="pitchDeckFile"
                                label="Upload your document"
                                onChange={handlePitchFileChange}
                              />
                            )}
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
               <p className='font-barlow text-white font-semibold text-[24px]'>Problems</p>
               <div className={`${problemsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {problemsOpen && (
          <div className='w-full h-auto md:px-1'>
               <TextArea
                 title={'Describe the customer problem you want to solve with your product or service. *'}
                 register={register}
                 errors={errors} 
                 required={"this fiels is required"} 
                 nameTextArea={"customerProblem"} 
                 patternValue={''} 
                 patternMessage={''} 
                 placeholder={'Description'}                                                  
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
        <BussinessModelDropDown
          lang={lang || 'en'}
          register={register}
          errors={errors}
          // handlePitclearchFileChange={handlePitchFileChange}
          handleFinancialModelFileChange={handleFinancialModelFileChange}
        />
        <TargetMarketDropDown 
          register={register}
          errors={errors}
        />
        <PropertyDropDown 
          register={register}
          errors={errors}
        />
    </div>
  );
};

export default StartUpTrialRefactore;
