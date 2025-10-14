'use client';
import React, { useState } from 'react';
import Input from '@/components/common/form/Input';
import TextArea from '@/components/common/TextArea';
import YesRadioButton from '@/components/common/YesRadioButton';
import StartupFormProblem from '@/components/startups-form/StartupFormProblems';
import StartupFormSolutions from '@/components/startups-form/StartupFormSolutions';
import StartupFormBusinessModel from '@/components/startups-form/StartupFormBusinessModel';
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
  cooperatedWithInvestors: string;
  cooperatedWithInvestorsPlaceholder: string;
  cooperatedWithInvestorsErrorMessage: string;
  howDidYouKnowUs: string;
  howDidYouKnowUsPlaceholder: string;
  howDidYouKnowUsRequired: string;
  howDidYouKnowUsErrorMessage: string;
}

interface Props {
  lang: string;
  translations: Translations;
  register: any;
  errors: any;
  handlePitchFileChange: any;
  handleBusinessFileChange: any;
  handleFinancialFileChange: any;
}

export default function StartupFormMVPClient({
  lang,
  translations,
  register,
  errors,
  handlePitchFileChange,
  handleBusinessFileChange,
  handleFinancialFileChange
}: Props) {

  const [selectedRadioPitch, setSelectedRadioPitch] = useState('');
  const [selectedRadioBusiness, setSelectedRadioBusiness] = useState('');

  return (
    <>
      <div className="mb-12 mt-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
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
                    id="product_name"
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
                    id="site_address"
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
                  />
                </div>
              </div>
              <StartupFormProblem lang={lang || 'en'} register={register} errors={errors}/>
              <StartupFormSolutions lang={lang || 'en'} register={register} errors={errors}/>
              <StartupFormBusinessModel lang={lang || 'en'} register={register} errors={errors} handleFinancialFileChange={handleFinancialFileChange}
              />
            </div>
          );
        } else {
          return (
            <div>
              <div className="col-span-2 col-start-1">
                <TextArea
                  title={translations.cooperatedWithInvestors}
                  register={register}
                  errors={errors}
                  placeholder={translations.cooperatedWithInvestorsPlaceholder}
                  nameTextArea="cooperatedWithInvestors"
                  patternMessage=""
                  patternValue=""
                  required=""
                  maxLength={1450}
                  maxLengthMessage={translations.cooperatedWithInvestorsErrorMessage}
                  validate=""
                />
              </div>
              <div className="col-span-2">
                <TextArea
                  title={translations.howDidYouKnowUs}
                  register={register}
                  errors={errors}
                  placeholder={translations.howDidYouKnowUsPlaceholder}
                  nameTextArea="getToKnowUs"
                  patternMessage=""
                  patternValue=""
                  required={translations.howDidYouKnowUsRequired}
                  maxLength={1450}
                  maxLengthMessage={translations.howDidYouKnowUsErrorMessage}
                  validate=""
                />
              </div>
            </div>
          );
        }
      })()}
    </>
  );
}

{
  /* <TextArea
            title="Explain your idea in 5 lines?*"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="ideaExplanation"
            patternMessage=''
            patternValue=''
            required=''
          />*/
}
