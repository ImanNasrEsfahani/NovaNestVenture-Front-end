import FileUpload from 'public/static/logos/FileUpload'
import React from 'react'
import Input from '@/components/common/form/Input'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import { useLang } from '../../stores/langStore'
import { getServerTranslation } from 'app/i18n'

import PitchdeckUpload from '@/components/startups-form/PitchdeckUpload'
import BusinessPlanUpload from '@/components/startups-form/BusinessPlanUpload'
import FinancialAnalysisUpload from '@/components/startups-form/FinancialAnalysisUpload'

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

  return (
    <div className='w-10/12 mx-auto flex flex-col'>
      <p className='mt-4 mb-6'>{t('startUp',{ returnObjects: true }).FirstSale.description}</p>
      <PitchdeckUpload
        title={t('startUp',{ returnObjects: true }).FirstSale.pitchDeck}
        yesLabel={t('yes')}
        noLabel={t('no')}
        chooseFileLabel={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
        uploadDocumentLabel={t('startUp',{ returnObjects: true }).FirstSale.uploadDocument}
        productNameLabel={t('startUp',{ returnObjects: true }).FirstSale.productName}
        productNameRequired={t('startUp',{ returnObjects: true }).FirstSale.productNameRequired}
        productNamePlaceholder={t('startUp',{ returnObjects: true }).FirstSale.productNamePlaceholder}
        siteAddressLabel={t('startUp',{ returnObjects: true }).FirstSale.siteAddress}
        siteAddressRequired={t('startUp',{ returnObjects: true }).FirstSale.siteAddressRequired}
        siteAddressPlaceholder={t('startUp',{ returnObjects: true }).FirstSale.siteAddressPlaceholder}
        fileCounter={filesCounter.pitch}
        onFileCounterChange={handleFileCounterChange}
        onFileChange={handlePitchFileChange}
        register={register}
        errors={errors}
        handleSolutionsLevelChange={handleSolutionsLevelChange}
        solutionsLevel={solutionsLevel}
        setValue={setValue}
        handleFinancialModelFileChange={handleFinancialModelFileChange}
        translations={{
          problems: {
            title: t('startUp', { returnObjects: true }).commons.problems.title,
            customerProblem: t('startUp', { returnObjects: true }).commons.problems.customerProblem,
            customerProblemRequired: t('startUp', { returnObjects: true }).commons.problems.customerProblemRequired,
            customerProblemPlaceholder: t('startUp', { returnObjects: true }).commons.problems.customerProblemPlaceholder,
          },
          businessModel: {
            title: t('startUp', { returnObjects: true }).commons.businessModel.title,
            monetization: t('startUp', { returnObjects: true }).commons.businessModel.monetization,
            monetizationRequired: t('startUp', { returnObjects: true }).commons.businessModel.monetizationRequired,
            monetizationPlaceholder: t('startUp', { returnObjects: true }).commons.businessModel.monetizationPlaceholder,
            delivery: t('startUp', { returnObjects: true }).commons.businessModel.delivery,
            deliveryRequired: t('startUp', { returnObjects: true }).commons.businessModel.deliveryRequired,
            deliveryPlaceholder: t('startUp', { returnObjects: true }).commons.businessModel.deliveryPlaceholder,
            financial: t('startUp', { returnObjects: true }).commons.businessModel.financial,
            choseFile: t('startUp', { returnObjects: true }).commons.businessModel.choseFile,
            accelerators: t('startUp', { returnObjects: true }).commons.businessModel.accelerators,
            acceleratorsRequired: t('startUp', { returnObjects: true }).commons.businessModel.acceleratorsRequired,
            acceleratorsPlaceholder: t('startUp', { returnObjects: true }).commons.businessModel.acceleratorsPlaceholder,
            knowUs: t('startUp', { returnObjects: true }).commons.businessModel.knowUs,
            knowUsRequired: t('startUp', { returnObjects: true }).commons.businessModel.knowUsRequired,
            knowUsPlaceholder: t('startUp', { returnObjects: true }).commons.businessModel.knowUsPlaceholder,
          },
          targetMarket: {
            targetMarket: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetMarket,
            targetCharacteristics: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetCharacteristics,
            targetCharacteristicsRequired: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetCharacteristicsRequired,
            targetCharacteristicsPlaceholder: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetCharacteristicsPlaceholder,
            targetCustomers: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetCustomers,
            targetCustomersRequired: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetCustomersRequired,
            targetCustomersPlaceholder: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetCustomersPlaceholder,
            targetEstimated: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetEstimated,
            targetEstimatedRequired: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetEstimatedRequired,
            targetEstimatedPlaceholder: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetEstimatedPlaceholder,
            targetTotal: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetTotal,
            targetTotalRequired: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetTotalRequired,
            targetTotalPlaceholder: t('startUp', { returnObjects: true }).commons.targetMarketDropDown.targetTotalPlaceholder,
          },
          property: {
            property: t('startUp', { returnObjects: true }).commons.propertyDropDown.property,
            propertyRevenue: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyRevenue,
            propertyRevenueRequired: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyRevenueRequired,
            propertyRevenuePlaceholder: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyRevenuePlaceholder,
            propertyMonthly: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyMonthly,
            propertyMonthlyRequired: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyMonthlyRequired,
            propertyMonthlyPlaceholder: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyMonthlyPlaceholder,
            propertyRate: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyRate,
            propertyRateRequired: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyRateRequired,
            propertyRatePlaceholder: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyRatePlaceholder,
            propertyBusiness: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyBusiness,
            propertyBusinessRequired: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyBusinessRequired,
            propertyBusinessPlaceholder: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyBusinessPlaceholder,
            propertyCapital: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyCapital,
            propertyCapitalRequired: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyCapitalRequired,
            propertyCapitalPlaceholder: t('startUp', { returnObjects: true }).commons.propertyDropDown.propertyCapitalPlaceholder,
          }
        }}
      />

      <BusinessPlanUpload
        title={t('startUp',{ returnObjects: true }).FirstSale.businessPlan}
        yesLabel={t('yes')}
        noLabel={t('no')}
        uploadDocumentLabel={t('startUp',{ returnObjects: true }).FirstSale.uploadDocument}
        chooseFileLabel={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
        fileCounter={filesCounter.business}
        onFileCounterChange={handleFileCounterChange}
        onFileChange={handleBusinessFileChange}
      />
      
      <FinancialAnalysisUpload
        title={t('startUp',{ returnObjects: true }).FirstSale.financial}
        yesLabel={t('yes')}
        noLabel={t('no')}
        chooseFileLabel={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
        fileCounter={filesCounter.financial}
        onFileCounterChange={handleFileCounterChange}
        onFileChange={handleFinancialFileChange}
      />
    </div>
  )
}

export default StartUpFirstSaleRefactor