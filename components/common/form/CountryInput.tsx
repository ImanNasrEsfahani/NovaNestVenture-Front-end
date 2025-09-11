'use client';
import React from 'react'
import { useState } from 'react';
import Select from '@/components/common/form/Select';
import Input from '@/components/common/form/Input';

type Props = {
  lang: string;
  register: any;
  errors: any;
  nameInput: string;

  countries: string[];
  countryName: string;
  countryNameRequired: string;
  countryNamePlaceholder: string;
  provinceOfResidence: string;
  provinceOfResidenceRequired: string;
  provinceOfResidencePlaceholder: string; 
}

export default function CountryInput({
  register,
  errors,
  nameInput,

  countries,
  countryName,
  countryNameRequired,
  countryNamePlaceholder,
  provinceOfResidence,
  provinceOfResidenceRequired,
  provinceOfResidencePlaceholder
}: Props) {

  
  // Add logging
  console.log('Countries data type in CountryInput.tsx:', typeof countries);
  console.log('Countries data in CountryInput.tsx:', countries);
  console.log('Is array in CountryInput.tsx:', Array.isArray(countries));

  // Fix: Ensure countries is always an array
  const safeCountries = Array.isArray(countries) ? countries : [];
  const countriesData = safeCountries.map((country: string) => ({
    value: country,
    label: country,
  }));
  // const countriesData = [ { value: "iran", label: "Iran" }, { value: "Canada", label: "Canada" } ];
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <Select
        register={register}
        errors={errors}
        nameInput={nameInput}
        label={countryName}
        required={countryNameRequired}
        className='input w-full'
        labelClass='text-[#6b6b6b] dark:text-current'
        placeholder={countryNamePlaceholder}
        options={countriesData}
        handleChange={handleCountryChange}
        selected={selectedCountry}
      />

      <div className="col-span-1">
        <Input
          register={register}
          errors={errors}
          nameInput="provinceOfResidence"
          type="text"
          label={provinceOfResidence}
          required={provinceOfResidenceRequired}
          patternValue=""
          patternMessage=""
          placeholder={provinceOfResidencePlaceholder}
          className="input col-span-1 mb-1 mt-2 w-full "
          labelClass="text-[#6b6b6b] dark:text-current"
        />
      </div>
    </>
  )
}