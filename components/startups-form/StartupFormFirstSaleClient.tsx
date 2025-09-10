import React, { useState } from 'react';
import Input from '@/components/common/form/Input';
import YesRadioButton from '@/components/common/YesRadioButton';
import StartupFormProblem from '@/components/startups-form/StartupFormProblems';
import StartupFormSolutions from '@/components/startups-form/StartupFormSolutions';
import StartupFormBusinessModel from '@/components/startups-form/StartupFormBusinessModel';
import StartupFormTargetMarket from '@/components/startups-form/StartupFormTargetMarket';
import StartupFormProperty from '@/components/startups-form/StartupFormProperty';
import { handleRadioChange } from '@/utils/functions';

interface Translations {
  pitchDeck: string;
  pitchDeckRequired: string;
  businessPlan: string;
  businessPlanRequired: string;
  productName: string;
  productNameRequired: string;
  productNamePlaceholder: string;
  siteAddress: string;
  siteAddressRequired: string;
  siteAddressPlaceholder: string;
  financialFile: string;
  financialFileRequired: string;
}

interface StartupFormFirstSaleClientProps {
  lang: string;
  translations: Translations;
  register: any;
  errors: any;
  handlePitchFileChange: any;
  handleBusinessFileChange: any;
  handleFinancialFileChange: any;
}

export default function StartupFormFirstSaleClient({
  lang,
  translations,
  register,
  errors,
  handlePitchFileChange,
  handleBusinessFileChange,
  handleFinancialFileChange
}: StartupFormFirstSaleClientProps) {

  const [selectedRadioPitch, setSelectedRadioPitch] = useState('');

  const [selectedRadioBusiness, setSelectedRadioBusiness] = useState('');

  const [selectedRadioFinancial, setSelectedRadioFinancial] = useState('');

  return (
    <>
      <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <YesRadioButton
          lang={lang || 'en'}
          title={translations.pitchDeck}
          register={register}
          errors={errors}
          required={translations.pitchDeckRequired}
          name="pitch-deck"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioPitch)}}
          selectedRadio={selectedRadioPitch}
          fileName="pitchDeckFile"
          handleFileChange={handlePitchFileChange}
        />
        <YesRadioButton
          lang={lang || 'en'}
          title={translations.businessPlan}
          register={register}
          errors={errors}
          required={translations.businessPlanRequired}
          name="business-plan"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioBusiness)}}
          selectedRadio={selectedRadioBusiness}
          fileName="businessPlanFile"
          handleFileChange={handleBusinessFileChange}
        />
      </div>
      {(() => {
        if (
          Boolean(selectedRadioBusiness) === false &&
          Boolean(selectedRadioPitch) === false
        ) {
          return (
            <div>
              <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <Input
                    register={register}
                    errors={errors}
                    nameInput="productName"
                    type="text"
                    label={translations.productName}
                    required={translations.productNameRequired}
                    patternValue=""
                    patternMessage="Only Alphabetic Characters are Allowed."
                    placeholder={translations.productNamePlaceholder}
                    className="input  mb-1 mt-3 w-full"
                    labelClass=" dark:text-current"
                  />
                </div>

                <div>
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="siteAddress"
                    type="text"
                    label={translations.siteAddress}
                    required={translations.siteAddressRequired}
                    patternValue=""
                    patternMessage="Only Alphabetic Characters are Allowed."
                    placeholder={translations.siteAddressPlaceholder}
                    className="input  mb-1 mt-3 w-full"
                    labelClass=" dark:text-current"
                  />
                </div>
              </div>
              <StartupFormProblem lang={lang} register={register} errors={errors} />
              <StartupFormSolutions lang={lang} register={register} errors={errors} />
              <StartupFormBusinessModel lang={lang} register={register} errors={errors} handleFinancialFileChange={handleFinancialFileChange} />
            </div>
          );
        } else {
          return <div></div>;
        }
      })()}
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <YesRadioButton
            lang={lang || 'en'}
            title={translations.financialFile}
            register={register}
            errors={errors}
            required={translations.financialFileRequired}
            name="financial-plan"
            handleRadioChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioFinancial)}}
            selectedRadio={selectedRadioFinancial}
            fileName='financialFile'
            handleFileChange={handleFinancialFileChange}
          />
        </div>
      </div>
      {(() => {
        if (Boolean(selectedRadioFinancial) === false) {
          return (
            <div>
              <StartupFormTargetMarket lang={lang || 'en'} register={register} errors={errors} />
              <StartupFormProperty lang={lang || 'en'} register={register} errors={errors} />
              {/* <StartupFormTargetMarket register={register} errors={errors} lang={lang}/>
              <StartupFormProperty register={register} errors={errors} lang={lang}/> */}
            </div>
          );
        }else{
          return <div></div>;
        }
      })()}
    </>
  );
}
