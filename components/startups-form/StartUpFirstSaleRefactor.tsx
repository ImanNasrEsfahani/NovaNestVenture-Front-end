import React from 'react'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import { getServerTranslation } from 'app/i18n'

import PitchdeckUpload from '@/components/startups-form/PitchdeckUpload'
import BusinessPlanUpload from '@/components/startups-form/BusinessPlanUpload'
import FinancialAnalysisUpload from '@/components/startups-form/FinancialAnalysisUpload'
import TextArea from '../common/TextArea'

type Props = {
  lang: string
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

const StartUpFirstSaleRefactor = ({
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
}: Props) => { 
      
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <div className='w-10/12 mx-auto flex flex-col'>
      <p className='text-base leading-loose mt-4 mb-12'>{t('startUp',{ returnObjects: true }).FirstSale.description}</p>
      <PitchdeckUpload
        problem={true}
        solution={true}
        businessModel={true}
        targetMarket={true}
        property={true}
        chooseFile={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
        productName={t('startUp',{ returnObjects: true }).FirstSale.productName}
        productNameRequired={t('startUp',{ returnObjects: true }).FirstSale.productNameRequired}
        productNamePlaceholder={t('startUp',{ returnObjects: true }).FirstSale.productNamePlaceholder}
        siteAddress={t('startUp',{ returnObjects: true }).FirstSale.siteAddress}
        siteAddressRequired={t('startUp',{ returnObjects: true }).FirstSale.siteAddressRequired}
        siteAddressPlaceholder={t('startUp',{ returnObjects: true }).FirstSale.siteAddressPlaceholder}
        fileCounter={filesCounter.pitch}
        // onFileCounterChange={handleFileCounterChange}
        onFileChange={handlePitchFileChange}
        register={register}
        errors={errors}
        handleSolutionsLevelChange={handleSolutionsLevelChange}
        solutionsLevel={solutionsLevel}
        setValue={setValue}
        handleFinancialModelFileChange={handleFinancialModelFileChange}
        translations={{
          title: t('startUp', { returnObjects: true }).FirstSale.pitchDeck,
          yesLabel: t('yes'),
          noLabel: t('no'),

          problems: t('startUp', { returnObjects: true }).commons.problems,
          solutionLevel: t('startUp', { returnObjects: true }).commons.solutionLevel,
          businessModel: t('startUp', { returnObjects: true }).commons.businessModel,
          targetMarket: t('startUp', { returnObjects: true }).commons.targetMarketDropDown,
          property: t('startUp', { returnObjects: true }).commons.propertyDropDown
        }}
      />

      <BusinessPlanUpload
        title={t('startUp',{ returnObjects: true }).FirstSale.businessPlan}
        yesLabel={t('yes')}
        noLabel={t('no')}
        chooseFile={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
        onFileChange={handleBusinessFileChange}
        errors={errors}
      />
      
      <FinancialAnalysisUpload
        title={t('startUp',{ returnObjects: true }).FirstSale.financial}
        yesLabel={t('yes')}
        noLabel={t('no')}
        chooseFile={t('startUp',{ returnObjects: true }).FirstSale.choseFile}
        onFileChange={handleFinancialFileChange}
        errors={errors}
      />

    </div>
  )
}

export default StartUpFirstSaleRefactor