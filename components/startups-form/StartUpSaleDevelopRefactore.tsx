import ChevDown from '@/public/static/logos/ChevDown'
import FileUpload from '@/public/static/logos/FileUpload'
import React, { useState } from 'react'
import Input from '@/components/common/form/Input'
import TextArea from '@/components/common/TextArea'
import BussinessModelDropDown from '@/components/startups-form/BussinessModelDropDown'
import PropertyDropDown from '@/components/startups-form/PropertyDropDown'
import SolutionLevel from '@/components/startups-form/SolutionLevel'
import TargetMarketDropDown from '@/components/startups-form/TargetMarketDropDown'
import { StartupsFormData } from '@/types/global'
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form'
import { getServerTranslation } from 'app/i18n'
import ProblemsSection from '@/components/startups-form/ProblemSection'

type Props = {
    lang: string;
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

const StartUpSaleDevelopRefactore = (props: Props) => {

    const {
        lang,
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
      
    const { t } = getServerTranslation(lang, 'formComponent');

  const [problemsOpen, setProblemsOpen] = useState<boolean>(false);


  return (
    <div className='w-full h-auto px-4 my-4'>
      <p className='mt-4 mb-6'>{t('startUp',{ returnObjects: true }).SaleDevelopment.description}</p>

      <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
        <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
            <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
              <p className='text-black font-medium font-barlow text-lg leading-[19px]'>{t('startUp',{ returnObjects: true }).SaleDevelopment.pitchDeck}</p>
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
                        <p id={''} className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{t('yes')}</p>
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
                        <p id={''} className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{t('no')}</p>
                    </div>
              </div>
            </div> 
            {filesCounter.pitch ? (
              <div className='w-full h-auto'>
                  <div className='w-full h-auto flex flex-col items-center gap-2'>
                    <div className='size-auto'>
                        <p className='text-grayLabel font-medium text-xs md:text-lg 2xl:text-2xl md:leading-[14px]'>{t('startUp',{ returnObjects: true }).SaleDevelopment.choseFile}</p>
                    </div>
                    <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                        <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                          <input
                                type="file"
                                name='pitchDeckFile'
                                className="absolute inset-0 size-full size-full opacity-0 cursor-pointer"
                                onChange={(e) => {
                                  handlePitchFileChange(e.target.files ? e.target.files[0] : '')
                                }}
                          />
                          {filesCounter.pitch && (
                            <FileUpload
                              name="pitchDeckFile"
                              label={t('startUp',{ returnObjects: true }).SaleDevelopment.uploadDocument}
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
                        nameInput={t('startUp',{ returnObjects: true }).SaleDevelopment.productName} 
                        type={'text'} 
                        required={t('startUp',{ returnObjects: true }).SaleDevelopment.productNameRequired} 
                        patternValue={''} 
                        patternMessage={''} 
                        placeholder={t('startUp',{ returnObjects: true }).SaleDevelopment.productNamePlaceholder} 
                        className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                        
                    />
                    <Input 
                        register={register} 
                        errors={errors} 
                        nameInput={t('startUp',{ returnObjects: true }).SaleDevelopment.siteAddress} 
                        type={'text'} 
                        required={t('startUp',{ returnObjects: true }).SaleDevelopment.siteAddressRequired} 
                        patternValue={''} 
                        patternMessage={''} 
                        placeholder={t('startUp',{ returnObjects: true }).SaleDevelopment.siteAddressPlaceholder} 
                        className={'border col-span-1 rounded-lg border-primary bg-whiteGold p-2'}                                                        
                    />
                  </div>
              </div>
            )}
        </div>
        <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
            <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
              <p className='text-black font-medium font-barlow text-lg leading-[19px]'>{t('startUp',{ returnObjects: true }).SaleDevelopment.businessPlan}</p>
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
                        <p id={''} className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{t('yes')}</p>
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
                        <p id={''} className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{t('no')}</p>
                    </div>
              </div>
            </div> 
            {filesCounter.business ? (
              <div className='w-full h-auto'>
                  <div className='w-full h-auto flex flex-col items-center gap-2'>
                    <div className='size-auto'>
                        <p className='text-grayLabel font-medium text-xs md:text-lg 2xl:text-2xl md:leading-[14px]'>{t('startUp',{ returnObjects: true }).SaleDevelopment.choseFile}</p>
                    </div>
                    <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                        <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                          <input
                                type="file"
                                name='businessPlanFile'
                                className="absolute inset-0 size-full size-full opacity-0 cursor-pointer"
                                onChange={(e) => {
                                  handleBusinessFileChange(e.target.files ? e.target.files[0] : '')
                                }}
                          />
                          {filesCounter.pitch && (
                            <FileUpload
                              name="pitchDeckFile"
                              label={t('startUp',{ returnObjects: true }).SaleDevelopment.uploadDocument}
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
              <p className='text-black font-medium font-barlow text-lg leading-[19px]'>{t('startUp',{ returnObjects: true }).SaleDevelopment.financialPlan}</p>
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
                        <p id={''} className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{t('yes')}</p>
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
                        <p id={''} className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{t('no')}</p>
                    </div>
              </div>
            </div> 
            {filesCounter.financial ? (
              <div className='w-full h-auto'>
                  <div className='w-full h-auto flex flex-col items-center gap-2'>
                    <div className='size-auto'>
                        <p className='text-grayLabel font-medium text-xs md:text-lg 2xl:text-2xl md:leading-[14px]'>{t('startUp',{ returnObjects: true }).SaleDevelopment.choseFile}</p>
                    </div>
                    <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
                        <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                          <input
                                type="file"
                                name='financialFile'
                                className="absolute inset-0 size-full size-full opacity-0 cursor-pointer"
                                onChange={(e) => {
                                  handleFinancialFileChange(e.target.files ? e.target.files[0] : '')
                                }}
                          />
                          {filesCounter.pitch && (
                            <FileUpload
                              name="pitchDeckFile"
                              label={t('startUp',{ returnObjects: true }).SaleDevelopment.uploadDocument}
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
      <TargetMarketDropDown 
        register={register}
        errors={errors}
        translations={{
          targetMarket: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetMarket,
          targetCharacteristics: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCharacteristics,
          targetCharacteristicsRequired: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCharacteristicsRequired,
          targetCharacteristicsPlaceholder: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCharacteristicsPlaceholder,
          targetCustomers: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCustomers,
          targetCustomersRequired: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCustomersRequired,
          targetCustomersPlaceholder: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetCustomersPlaceholder,
          targetEstimated: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetEstimated,
          targetEstimatedRequired: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetEstimatedRequired,
          targetEstimatedPlaceholder: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetEstimatedPlaceholder,
          targetTotal: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetTotal,
          targetTotalRequired: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetTotalRequired,
          targetTotalPlaceholder: t('startUp',{ returnObjects: true }).commons.targetMarketDropDown.targetTotalPlaceholder,
        }}
      />
      <PropertyDropDown 
        register={register}
        errors={errors}
        translations={{ 
          property: t('startUp',{ returnObjects: true }).commons.propertyDropDown.property,
          propertyRevenue: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyRevenue,
          propertyRevenueRequired: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyRevenueRequired,
          propertyRevenuePlaceholder: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyRevenuePlaceholder,
          propertyMonthly: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyMonthly,
          propertyMonthlyRequired: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyMonthlyRequired,
          propertyMonthlyPlaceholder: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyMonthlyPlaceholder,
          propertyRate: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyRate,
          propertyRateRequired: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyRateRequired,
          propertyRatePlaceholder: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyRatePlaceholder,
          propertyBusiness: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyBusiness,
          propertyBusinessRequired: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyBusinessRequired,
          propertyBusinessPlaceholder: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyBusinessPlaceholder,
          propertyCapital: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyCapital,
          propertyCapitalRequired: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyCapitalRequired,
          propertyCapitalPlaceholder: t('startUp',{ returnObjects: true }).commons.propertyDropDown.propertyCapitalPlaceholder,
        }}
      />
    </div>
  )
}

export default StartUpSaleDevelopRefactore