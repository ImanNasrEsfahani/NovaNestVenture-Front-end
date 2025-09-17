'use client'
import FileUpload from 'public/static/logos/FileUpload'
import React, { useState } from 'react'
import Input from '@/components/common/form/Input'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'
import TextArea from '@/components/common/TextArea'
import PropertyDropDown from '@/components/startups-form/PropertyDropDown'
import TargetMarketDropDown from '@/components/startups-form/TargetMarketDropDown'
import BussinessModelDropDown from '@/components/startups-form/BussinessModelDropDown'
import SolutionLevel from '@/components/startups-form/SolutionLevel'
import { useLang } from '../../stores/langStore'
import { getServerTranslation } from 'app/i18n'
import ProblemsSection from '@/components/startups-form/ProblemSection'

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

const StartUpFirstSaleRefactor = (props: Props) => {

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
      
        const lang = useLang((s) => s.lang)
        const { t } = getServerTranslation(lang, 'formComponent');

        const [problemsOpen, setProblemsOpen] = useState<boolean>(false);

  return (
    <div className='w-full h-auto px-4 my-4'>
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
      <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
           <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
             <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).FirstSale.pitchDeck}</p>
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
                      <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>{t('startUp',{ returnObjects: true }).FirstSale.choseFile}</p>
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
                            label={t('startUp',{ returnObjects: true }).FirstSale.uploadDocument}
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
                      nameInput={t('startUp',{ returnObjects: true }).FirstSale.productName} 
                      type={'text'} 
                      required={t('startUp',{ returnObjects: true }).FirstSale.productNameRequired} 
                      patternValue={''} 
                      patternMessage={''} 
                      placeholder={t('startUp',{ returnObjects: true }).FirstSale.productNamePlaceholder} 
                      className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                        
                   />
                   <Input 
                      register={register} 
                      errors={errors} 
                      nameInput={t('startUp',{ returnObjects: true }).FirstSale.siteAddress} 
                      type={'text'} 
                      required={t('startUp',{ returnObjects: true }).FirstSale.siteAddressRequired} 
                      patternValue={''} 
                      patternMessage={''} 
                      placeholder={t('startUp',{ returnObjects: true }).FirstSale.siteAddressPlaceholder} 
                      className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                        
                   />
                 </div>
             </div>
           )}
      </div>
      <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
           <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
             <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).FirstSale.businessPlan}</p>
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
                      <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>{t('startUp',{ returnObjects: true }).FirstSale.uploadDocument}</p>
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
                            label={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
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
             <p className='text-black font-medium font-barlow text-[16px] leading-[19px]'>{t('startUp',{ returnObjects: true }).FirstSale.financial}</p>
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
                      <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('yes')}</p>
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
                      <p id={''} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{t('no')}</p>
                   </div>
             </div>
           </div> 
           {filesCounter.financial ? (
             <div className='w-full h-auto'>
                 <div className='w-full h-auto flex flex-col items-center gap-2'>
                   <div className='size-auto'>
                      <p className='text-grayLabel font-medium text-xs md:text-[14px] 2xl:text-[20px] md:leading-[14px]'>{t('startUp',{ returnObjects: true }).FirstSale.choseFile}</p>
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
                            label={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
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
        businessModel: t('startUp',{ returnObjects: true }).commons.businessModel,
        businessMonetization: t('startUp',{ returnObjects: true }).commons.businessMonetization,
        businessMonetizationRequired: t('startUp',{ returnObjects: true }).commons.businessMonetizationRequired,
        businessMonetizationPlaceholder: t('startUp',{ returnObjects: true }).commons.businessMonetizationPlaceholder,
        businessDelivery: t('startUp',{ returnObjects: true }).commons.businessDelivery,
        businessDeliveryRequired: t('startUp',{ returnObjects: true }).commons.businessDeliveryRequired,
        businessDeliveryPlaceholder: t('startUp',{ returnObjects: true }).commons.businessDeliveryPlaceholder,
        businessFinancial: t('startUp',{ returnObjects: true }).commons.businessFinancial,
        choseFile: t('startUp',{ returnObjects: true }).commons.choseFile,
        businessAccelerators: t('startUp',{ returnObjects: true }).commons.businessAccelerators,
        businessAcceleratorsRequired: t('startUp',{ returnObjects: true }).commons.businessAcceleratorsRequired,
        businessAcceleratorsPlaceholder: t('startUp',{ returnObjects: true }).commons.businessAcceleratorsPlaceholder,
        businessKnowUs: t('startUp',{ returnObjects: true }).commons.businessKnowUs,
        businessKnowUsRequired: t('startUp',{ returnObjects: true }).commons.businessKnowUsRequired,
        businessKnowUsPlaceholder: t('startUp',{ returnObjects: true }).commons.businessKnowUsPlaceholder,
      }}
    />
    <TargetMarketDropDown 
      register={register}
      errors={errors}
      translations={{
        targetMarket: t('startUp',{ returnObjects: true }).commons.targetMarket,
        targetCharacteristics: t('startUp',{ returnObjects: true }).commons.targetCharacteristics,
        targetCharacteristicsRequired: t('startUp',{ returnObjects: true }).commons.targetCharacteristicsRequired,
        targetCharacteristicsPlaceholder: t('startUp',{ returnObjects: true }).commons.targetCharacteristicsPlaceholder,
        targetCustomers: t('startUp',{ returnObjects: true }).commons.targetCustomers,
        targetCustomersRequired: t('startUp',{ returnObjects: true }).commons.targetCustomersRequired,
        targetCustomersPlaceholder: t('startUp',{ returnObjects: true }).commons.targetCustomersPlaceholder,
        targetEstimated: t('startUp',{ returnObjects: true }).commons.targetEstimated,
        targetEstimatedRequired: t('startUp',{ returnObjects: true }).commons.targetEstimatedRequired,
        targetEstimatedPlaceholder: t('startUp',{ returnObjects: true }).commons.targetEstimatedPlaceholder,
        targetTotal: t('startUp',{ returnObjects: true }).commons.targetTotal,
        targetTotalRequired: t('startUp',{ returnObjects: true }).commons.targetTotalRequired,
        targetTotalPlaceholder: t('startUp',{ returnObjects: true }).commons.targetTotalPlaceholder,
      }}
    />
    <PropertyDropDown 
      register={register}
      errors={errors}
      translations={{ 
        property: t('startUp',{ returnObjects: true }).commons.property,
        propertyRevenue: t('startUp',{ returnObjects: true }).commons.propertyRevenue,
        propertyRevenueRequired: t('startUp',{ returnObjects: true }).commons.propertyRevenueRequired,
        propertyRevenuePlaceholder: t('startUp',{ returnObjects: true }).commons.propertyRevenuePlaceholder,
        propertyMonthly: t('startUp',{ returnObjects: true }).commons.propertyMonthly,
        propertyMonthlyRequired: t('startUp',{ returnObjects: true }).commons.propertyMonthlyRequired,
        propertyMonthlyPlaceholder: t('startUp',{ returnObjects: true }).commons.propertyMonthlyPlaceholder,
        propertyRate: t('startUp',{ returnObjects: true }).commons.propertyRate,
        propertyRateRequired: t('startUp',{ returnObjects: true }).commons.propertyRateRequired,
        propertyRatePlaceholder: t('startUp',{ returnObjects: true }).commons.propertyRatePlaceholder,
        propertyBusiness: t('startUp',{ returnObjects: true }).commons.propertyBusiness,
        propertyBusinessRequired: t('startUp',{ returnObjects: true }).commons.propertyBusinessRequired,
        propertyBusinessPlaceholder: t('startUp',{ returnObjects: true }).commons.propertyBusinessPlaceholder,
        propertyCapital: t('startUp',{ returnObjects: true }).commons.propertyCapital,
        propertyCapitalRequired: t('startUp',{ returnObjects: true }).commons.propertyCapitalRequired,
        propertyCapitalPlaceholder: t('startUp',{ returnObjects: true }).commons.propertyCapitalPlaceholder,
      }}
    />
    </div>
  )
}

export default StartUpFirstSaleRefactor