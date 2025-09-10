import React, { useState } from 'react';
import Input from '@/components/common/form/Input';
import YesRadioButton from '@/components/common/YesRadioButton';
import StartupFormProblem from '@/components/startups-form/StartupFormProblems';
import StartupFormSolutions from '@/components/startups-form/StartupFormSolutions';
import StartupFormBusinessModel from '@/components/startups-form/StartupFormBusinessModel';
import { handleRadioChange } from '@/utils/functions';
import { getServerTranslation } from 'app/i18n';

export default async function StartupFormTrialProduct({
  lang,
  register,
  errors,
  handlePitchDeckFileChange,
  handleBusinessPlanFileChange,
  handleFinancialFileChange,
}: {
  lang: string;
  register: any;
  errors: any;
  handlePitchDeckFileChange:any;
  handleBusinessPlanFileChange:any;
  handleFinancialFileChange:any;
}) {

  const { t } = await getServerTranslation(lang, 'formComponent');

  const [selectedRadioPitch, setSelectedRadioPitch] = useState('');

  const [selectedRadioBusiness, setSelectedRadioBusiness] = useState('');


  return (
    <>
      <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <YesRadioButton
          lang={lang}
          title={t('startUp',{ returnObjects: true }).pitchDeck}
          register={register}
          errors={errors}
          required={t('startUp',{ returnObjects: true }).pitchDeckRequired}
          name="pitch-deck"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioPitch)}}
          selectedRadio={selectedRadioPitch}
          fileName="pitchDeckFile"
          handleFileChange={handlePitchDeckFileChange}
        />
        <YesRadioButton
          lang={lang}
          title={t('startUp',{ returnObjects: true }).businessPlan}
          register={register}
          errors={errors}
          required={t('startUp',{ returnObjects: true }).businessPlanRequired}
          name="business-plan"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioBusiness)}}
          selectedRadio={selectedRadioBusiness}
          fileName="businessPlanFile"
          handleFileChange={handleBusinessPlanFileChange}
        />

      </div>
      {(() => {
        if ((Boolean(selectedRadioBusiness) === false) && (Boolean(selectedRadioPitch)) === false) {
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
                    labelClass="dark:text-current"
                  />
                </div>
              </div>
              <StartupFormProblem lang={lang || 'en'} register={register} errors={errors}/>
              <StartupFormSolutions lang={lang || 'en'} register={register} errors={errors}/>
              <StartupFormBusinessModel lang={lang || 'en'} register={register} errors={errors} handleFinancialFileChange={handleFinancialFileChange}/>
            </div>
          );
        }else{
          return <div></div>;
        }
      })()}
    </>
  );
}
