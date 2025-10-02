import * as React from 'react';
// import Input from '@/components/common/form/Input';
import { getServerTranslation } from 'app/i18n';

import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import CountryInput from '@/components/common/form/CountryInput';

export default function StartupFormPersonalInformation({
  lang,
  register,
  errors,
  
  countries,
  countryName,
  countryNameRequired,
  countryNamePlaceholder,
  provinceOfResidence,
  provinceOfResidenceRequired,
  provinceOfResidencePlaceholder
}: {
  lang: string;
  register: any;
  errors: any;

  countries: any;
  countryName: string;
  countryNameRequired: string;
  countryNamePlaceholder: string;
  provinceOfResidence: string;
  provinceOfResidenceRequired: string;
  provinceOfResidencePlaceholder: string;
}) {

  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
        <PersonalInfoInput
          register={register}
          errors={errors}
          nameInputs={{
            firstName: 'firstName',
            lastName: 'lastName',
            phoneNumber: 'phoneNumber',
            email: 'email',
            jobPosition: ''
          }}
          noLabel={false}
          translations={{
            INTERN: t('INTERN'),
            EMPLOYEE: t('EMPLOYEE'),

            Developer: t('Developer'),
            Marketing: t('Marketing'),
            Graphist: t('Graphist'),
            Immigration: t('Immigration'),
            Accountant: t('Accountant'),
            Administrative: t('Administrative'),

            firstName: t('firstName'),
            firstNameRequired: t('firstNameRequired'),
            firstNamePlaceholder: t('firstNamePlaceholder'),

            lastName: t('lastName'),
            lastNameRequired: t('lastNameRequired'),
            lastNamePlaceholder: t('lastNamePlaceholder'),
            
            email: t('email'),
            emailRequired: t('emailRequired'),
            emailErrorMessage: t('emailErrorMessage'),
            emailPlaceholder: t('emailPlaceholder'),

            phoneNumber: t('phoneNumber'),
            phoneNumberRequired: t('phoneNumberRequired'),
            phoneNumberErrorMessage: t('phoneNumberErrorMessage'),
            phoneNumberPlaceholder: t('phoneNumberPlaceholder'),

            jobPosition: t('jobPosition'),
            jobPositionRequired: t('jobPositionRequired'),
            jobPositionPlaceholder: t('jobPositionPlaceholder'),

            application: t('application'),
            applicationRequired: t('applicationRequired'),
            applicationPlaceholder: t('applicationPlaceholder'),
          }}
        />

        {/* <Input
          register={register}
          errors={errors}
          nameInput="birthDate"
          type="date"
          label={t('birthDate')}
          required={t('birthDateRequired')}
          patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
          patternMessage={t('birthDateErrorMessage')}
          placeholder={t('birthDatePlaceholder')}
          className="input col-span-1 mb-1 mt-2 w-full bg-whiteGold"
          labelClass=" dark:text-current"
        /> */}

        <CountryInput
          countries={countries}
          countryName={countryName}
          countryNameRequired={countryNameRequired}
          countryNamePlaceholder={countryNamePlaceholder}
          provinceOfResidence={provinceOfResidence}
          provinceOfResidenceRequired={provinceOfResidenceRequired}
          provinceOfResidencePlaceholder={provinceOfResidencePlaceholder}
          lang={lang}
          errors={errors}
          nameInputs={{
            countryOfResidence: 'countryOfResidence',
            provinceOfResidence: '',
            cityOfResidence: ''
          }}
          register={register}
        />
      </div>
    </>
  );
}
