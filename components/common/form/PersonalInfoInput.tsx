'use client';
// import React, { useState } from 'react'
import Input from '@/components/common/form/Input';
import { Type } from '@prisma/client';
import Select from './Select';

type Props = {
  register: any;
  errors: any;
  nameInputs: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobPosition: string;
  };
  noLabel: boolean;
  translations: {
    INTERN: string;
    EMPLOYEE: string;

    Developer: string;
    Marketing: string;
    Graphist: string;
    Immigration: string;
    Accountant: string;
    Administrative: string;

    firstName: string;
    firstNameRequired: string;
    firstNamePlaceholder: string;

    lastName: string;
    lastNameRequired: string;
    lastNamePlaceholder: string;
    
    email: string;
    emailRequired: string;
    emailErrorMessage: string;
    emailPlaceholder: string;

    phoneNumber: string;
    phoneNumberRequired: string;
    phoneNumberErrorMessage: string;
    phoneNumberPlaceholder: string;

    jobPosition: string;
    jobPositionRequired: string;
    jobPositionPlaceholder: string;

    application: string;
    applicationRequired: string;
    applicationPlaceholder: string;
  }
};

export default function PersonalInfoInput({
  register,
  errors,
  nameInputs,
  noLabel,
  translations
}: Props) {

  enum Type {
    INTERN = 0,
    EMPLOYEE = 1
  }
  const Types = [Type.INTERN, Type.EMPLOYEE];

  const typesData = Types.map((type: any) => ({
    value: type,
    label: type
  }));

  enum Type {
    Developer = 0,
    Marketing = 1,
    Graphist = 2,
    Immigration = 3,
    Accountant = 4,
    Administrative = 5
  }
  const Types1 = [
    Type.Developer,
    Type.Marketing,
    Type.Graphist,
    Type.Immigration,
    Type.Accountant,
    Type.Administrative
  ];

  const types1Data = Types1.map((type: any) => ({
    value: type,
    label: type
  }));

  // const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedRadio(event.target.value);
  // };

  // const [selectedRadio, setSelectedRadio] = useState('');

  return (
    <>
      {nameInputs?.firstName && (
        <div className="col-span-1 w-full">
          {noLabel ? (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.firstName}
              type="text"
              required={translations.firstNameRequired}
              patternValue=""
              patternMessage=""
              placeholder={translations.firstNamePlaceholder}
              className="input col-span-1 mb-1 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.firstName}
              type="text"
              label={translations.firstName}
              required={translations.firstNameRequired}
              patternValue=""
              patternMessage=""
              placeholder={translations.firstNamePlaceholder}
              className="input col-span-1 mb-1 w-full"
              labelClass=" dark:text-current"
            />
          )}
        </div>
      )}

      {nameInputs?.lastName && (
        <div className="col-span-1 w-full">
          {noLabel ? (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.lastName}
              type="text"
              required={translations.lastNameRequired}
              patternValue=""
              patternMessage=""
              placeholder={translations.lastNamePlaceholder}
              className="input col-span-1 mb-1 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.lastName}
              type="text"
              label={translations.lastName}
              required={translations.lastNameRequired}
              patternValue=""
              patternMessage=""
              placeholder={translations.lastNamePlaceholder}
              className="input col-span-1 mb-1 w-full"
              labelClass=" dark:text-current"
            />
          )}
        </div>
      )}

      {nameInputs?.email && (
        <div className="col-span-1 w-full">
          {noLabel ? (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.email}
              type="email"
              required={translations.emailRequired}
              patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              patternMessage={translations.emailErrorMessage}
              placeholder={translations.emailPlaceholder}
              className="input col-span-1 mb-1 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.email}
              type="email"
              label={translations.email}
              required={translations.emailRequired}
              patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              patternMessage={translations.emailErrorMessage}
              placeholder={translations.emailPlaceholder}
              className="input col-span-1 mb-1 w-full"
              labelClass=" dark:text-current"
            />
          )}
        </div>
      )}

      {nameInputs?.phoneNumber && (
        <div className="col-span-1 w-full">
          {noLabel ? (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.phoneNumber}
              type="text"
              required={translations.phoneNumberRequired}
              patternValue="^[0-9]{11}$"
              patternMessage={translations.phoneNumberErrorMessage}
              placeholder={translations.phoneNumberPlaceholder}
              className="input col-span-1 mb-1 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.phoneNumber}
              type="text"
              label={translations.phoneNumber}
              required={translations.phoneNumberRequired}
              patternValue="^[0-9]{11}$"
              patternMessage={translations.phoneNumberErrorMessage}
              placeholder={translations.phoneNumberPlaceholder}
              className="input col-span-1 mb-1 w-full"
              labelClass=" dark:text-current"
            />
          )}
        </div>
      )}
      {nameInputs?.jobPosition && (
        <div className="col-span-1">
          <Select
            register={register}
            errors={errors}
            nameInput="Application"
            label={translations.jobPosition}
            required={translations.jobPositionRequired}
            labelClass=" dark:text-current"
            className="input col-span-1 mb-1 w-full"
            placeholder={translations.jobPositionPlaceholder}
            options={typesData}
          />
        </div>
      )}
      {nameInputs?.jobPosition && (
        <div>
          <Select
            register={register}
            errors={errors}
            nameInput="statusSelect"
            label={translations.application}
            required={translations.applicationRequired}
            labelClass=" dark:text-current"
            className="input col-span-1 mb-1 w-full"
            placeholder={translations.applicationPlaceholder}
            options={types1Data}
          />
        </div>
      )}
      {/* <Select
            register={register}
            errors={errors}
            nameInput="statusSelect"
            label={translations.jobPosition}
            required={translations.jobPositionRequired}
            className="select select-bordered col-span-1 mb-1 w-full"
            labelClass=" dark:text-current"
            placeholder={translations.jobPositionPlaceholder}
              
            options={typesData}
            handleChange={handleItemChange}
            selected={selectedRadio}
          />
          <Select

            register={register}
            errors={errors}
            nameInput="statusSelect"
            label={translations.application}
            required={translations.applicationRequired}
            className="select select-bordered col-span-1 mb-1 w-full"
            labelClass=" dark:text-current"
            placeholder={translations.applicationPlaceholder}
              
            options={typesData}
            handleChange={handleItemChange}
            selected={selectedRadio}
          /> */}
    </>
  );
};

