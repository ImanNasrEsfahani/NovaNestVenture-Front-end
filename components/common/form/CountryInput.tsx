'use client';
import React from 'react'
import { useState } from 'react';
import Select from '@/components/common/form/Select';
import Input from '@/components/common/form/Input';

type Props = {
  register: any;
  errors: any;
  nameInputs?: {
    countryOfResidence: string;
    provinceOfResidence: string;
    cityOfResidence: string;
  };

  countries: string[];

  countryName: string;
  countryNameRequired: string;
  countryNamePlaceholder: string;

  provinceOfResidence: string;
  provinceOfResidenceRequired: string;
  provinceOfResidencePlaceholder: string; 

  cityOfResidence: string;
  cityOfResidenceRequired: string;
  cityOfResidencePlaceholder: string;
}

export default function CountryInput({
  register,
  errors,
  nameInputs,

  countries,
  countryName,
  countryNameRequired,
  countryNamePlaceholder,

  provinceOfResidence,
  provinceOfResidenceRequired,
  provinceOfResidencePlaceholder,

  cityOfResidence,
  cityOfResidenceRequired,
  cityOfResidencePlaceholder
}: Props) {

  // Fix: Ensure countries is always an array
  // Add error logging when countries is not an array
  if (!Array.isArray(countries)) {
      console.error('CountryInput Error: Expected countries to be an array, but received:', {
        type: typeof countries,
        value: countries,
        isArray: Array.isArray(countries)
      });
      console.error('CountryInput: Using empty array as fallback. Please check the parent component.');
      console.error('Called from:', new Error().stack);
  }
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
      {nameInputs?.countryOfResidence && (
        // wrap Select so we can overlay a caret icon via absolute positioning
        <div className="col-span-1">
          <label
            htmlFor={nameInputs.countryOfResidence}
            className="flex flex-col px-2 !text-[#6B6B6B]"
          >
            {countryName}
            <select
              id={nameInputs.countryOfResidence}
              {...register(nameInputs.countryOfResidence, {
                required: countryNameRequired
              })}
              className={`input col-span-1 mb-1 w-full !rounded-sm border border-gray-400 get-shadow-sm appearance-none bg-transparent placeholder:text-[#939393B2] ${errors[nameInputs.countryOfResidence] ? ' border-red-500' : ''}`}
              onChange={handleCountryChange}
              value={selectedCountry}
              defaultValue=""
            >
              <option value="" disabled>
                {countryNamePlaceholder}
              </option>
              {safeCountries.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          {errors[nameInputs.countryOfResidence] && (
            <span className="mt-2 inline text-sm text-red-500">
              {errors[nameInputs.countryOfResidence].message}
            </span>
          )}

          {/* caret icon (pointer-events-none so select still clickable) */}
          <span className="pointer-events-none absolute top-1/2 right-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      )}

      {nameInputs?.provinceOfResidence && (
        <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.provinceOfResidence}
            type="text"
            label={provinceOfResidence}
            required={provinceOfResidenceRequired}
            patternValue=""
            patternMessage=""
            placeholder={provinceOfResidencePlaceholder}
            className="input col-span-1 mb-1 w-full"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>
      )}

      {nameInputs?.cityOfResidence && (
        <div className="col-span-1">
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.cityOfResidence}
            type="text"
            label={cityOfResidence}
            required={cityOfResidenceRequired}
            patternValue=""
            patternMessage=""
            placeholder={cityOfResidencePlaceholder}
            className="input col-span-1 mb-1 w-full"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>
      )}
    </>
  )
}