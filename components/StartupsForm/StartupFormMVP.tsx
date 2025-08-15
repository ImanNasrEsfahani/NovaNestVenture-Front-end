import React, { useState } from 'react';
import Input from '../common/form/Input';
import TextArea from '../common/TextArea';
import YesRadioButton from '../common/YesRadioButton';
import StartupFormProblem from './StartupFormProblems';
import StartupFormSolutions from './StartupFormSolutions';
import StartupFormBusinessModel from './StartupFormBusinessModel';
import { handleRadioChange } from '../../utils/functions';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function StartupFormMVP({
  register,
  errors,
  handlePitchFileChange,
  handleBusinessFileChange,
  handleFinancialFileChange
}: {
  register: any;
  errors: any;
  handlePitchFileChange: any;
  handleBusinessFileChange: any;
  handleFinancialFileChange: any;
}) {
  const { lang } = useLang((s) => s)
  const [selectedRadioPitch, setSelectedRadioPitch] = useState('');
  const [selectedRadioBusiness, setSelectedRadioBusiness] = useState('');
  const { t } = useTranslation(lang, 'formComponent');

  return (
    <>
      <div className="mb-12 mt-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <YesRadioButton
          title={t('startUp',{ returnObjects: true }).pitchDeck}
          register={register}
          errors={errors}
          required={t('startUp',{ returnObjects: true }).pitchDeckRequired}
          name="pitch-deck"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioPitch)}}
          selectedRadio={selectedRadioPitch}
          fileName="pitchDeckFile"
          handleFileChange={handlePitchFileChange}
        />
        <YesRadioButton
          title={t('startUp',{ returnObjects: true }).businessPlan}
          register={register}
          errors={errors}
          required={t('startUp',{ returnObjects: true }).businessPlanRequired}
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
                    label={t('startUp',{ returnObjects: true }).productName}
                    required={t('startUp',{ returnObjects: true }).productNameRequired}
                    patternValue=""
                    patternMessage="Only Alphabetic Characters are Allowed."
                    placeholder={t('startUp',{ returnObjects: true }).productNamePlaceholder}
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
                    label={t('startUp',{ returnObjects: true }).siteAddress}
                    required={t('startUp',{ returnObjects: true }).siteAddressRequired}
                    patternValue=""
                    patternMessage="Only Alphabetic Characters are Allowed."
                    placeholder={t('startUp',{ returnObjects: true }).siteAddressPlaceholder}
                    className="input  mb-1 mt-3 w-full"
                    
                  />
                </div>
              </div>
              <StartupFormProblem register={register} errors={errors}/>
              <StartupFormSolutions register={register} errors={errors}/>
              <StartupFormBusinessModel
                register={register}
                errors={errors}
                handleFinancialFileChange={handleFinancialFileChange}
              />
            </div>
          );
        } else {
          return (
            <div>
              <div className="col-span-2 col-start-1">
                <TextArea
                  title={t('startUp',{ returnObjects: true }).cooperatedWithInvestors}
                  register={register}
                  errors={errors}
                  placeholder={t('startUp',{ returnObjects: true }).cooperatedWithInvestorsPlaceholder}
                  nameTextArea="cooperatedWithInvestors"
                  patternMessage=""
                  patternValue=""
                  required=""
                />
              </div>
              <div className="col-span-2">
                <TextArea
                  title={t('howDidYouKnowUs')}
                  register={register}
                  errors={errors}
                  placeholder={t('howDidYouKnowUsPlaceholder')}
                  nameTextArea="getToKnowUs"
                  patternMessage=""
                  patternValue=""
                  required={t('howDidYouKnowUsRequired')}
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
