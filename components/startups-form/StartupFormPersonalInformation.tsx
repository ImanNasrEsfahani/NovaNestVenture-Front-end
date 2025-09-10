import * as React from 'react';
import Input from '@/components/common/form/Input';
import { PersonalInfoInput } from '@/components/common/form/PersonalInfoInput';
import { getServerTranslation } from 'app/i18n';
import CountryInput from '@/components/common/form/CountryInput';

export default async function StartupFormPersonalInformation({
  lang,
  register,
  errors,
  
  countriesData,
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

  countriesData: any;
  countryName: string;
  countryNameRequired: string;
  countryNamePlaceholder: string;
  provinceOfResidence: string;
  provinceOfResidenceRequired: string;
  provinceOfResidencePlaceholder: string;
}) {

  const { t } = await getServerTranslation(lang, 'formComponent');
  return (
    <>
      <div className="mb-12 grid grid-cols-1 gap-x-6 gap-y-4 bg-whiteGold p-3 md:grid-cols-2 lg:grid-cols-3">
        <PersonalInfoInput
          lang={lang}
          register={register}
          errors={errors}
          nameInputs={{
            firstName: 'firstName',
            lastName: 'lastName',
            phoneNumber: '',
            email: 'email',
            jobPosition: ''
          }}
        />

        <Input
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
        />

        <CountryInput
          countries={countriesData}
          countryName={countryName}
          countryNameRequired={countryNameRequired}
          countryNamePlaceholder={countryNamePlaceholder}
          provinceOfResidence={provinceOfResidence}
          provinceOfResidenceRequired={provinceOfResidenceRequired}
          provinceOfResidencePlaceholder={provinceOfResidencePlaceholder}
          lang={lang}
          errors={errors}
          nameInput='countryOfResidence'
          register={register}
        />
      </div>
    </>
  );
}
