// import React, { useState } from 'react'
import Input from '../../common/form/Input';
import { getServerTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';
// import { Type } from '@prisma/client';
import Select from './Select';

type Props = {
  register: any;
  errors: any;
  nameInputs?: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobPosition: string;
  };
  noLabel?: boolean;
};

const PersonalInfoInput = async ({
  register,
  errors,
  nameInputs,
  noLabel
}: Props) => {
  const { lang } = useLang((s) => s);

  const { t } = await getServerTranslation(lang, 'formComponent');

  enum Type {
    INTERN = t('INTERN'),
    EMPLOYEE = t('EMPLOYEE')
  }

  const Types = [Type.INTERN, Type.EMPLOYEE];

  const typesData = Types.map((type: any) => ({
    value: type,
    label: type
  }));

  enum Type {
    Developer = t('Developer'),
    Marketing = t('Marketing'),
    Graphist = t('Graphist'),
    Immigration = t('Immigration'),
    Accountant = t('Accountant'),
    Administrative = t('administrative')
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
              required={t('firstNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('firstNamePlaceholder')}
              className="input col-span-1 mb-1 mt-3 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.firstName}
              type="text"
              label={t('firstName')}
              required={t('firstNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('firstNamePlaceholder')}
              className="input  col-span-1 mb-1 mt-3 w-full"
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
              required={t('lastNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('lastNamePlaceholder')}
              className="input  col-span-1 mb-1 mt-3 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.lastName}
              type="text"
              label={t('lastName')}
              required={t('lastNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('lastNamePlaceholder')}
              className="input  col-span-1 mb-1 mt-3 w-full"
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
              required={t('emailRequired')}
              patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              patternMessage={t('emailErrorMessage')}
              placeholder={t('EmailPlaceholder')}
              className="input col-span-1 mb-1 mt-3 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.email}
              type="email"
              label={t('email')}
              required={t('emailRequired')}
              patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              patternMessage={t('emailErrorMessage')}
              placeholder={t('EmailPlaceholder')}
              className="input  col-span-1 mb-1 mt-3 w-full"
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
              required={t('phoneNumberRequired')}
              patternValue="^[0-9]{11}$"
              patternMessage={t('phoneNumberErrorMessage')}
              placeholder={t('phoneNumberPlaceholder')}
              className="input col-span-1 mb-1 mt-3 w-full"
            />
          ) : (
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.phoneNumber}
              type="text"
              label={t('phoneNumber')}
              required={t('phoneNumberRequired')}
              patternValue="^[0-9]{11}$"
              patternMessage={t('phoneNumberErrorMessage')}
              placeholder={t('phoneNumberPlaceholder')}
              className="input  col-span-1  mb-1 mt-3 w-full"
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
            label={t('jobPosition')}
            required={t('jobPositionRequired')}
            labelClass=" dark:text-current"
            className="input mb-1 mt-3 w-full bg-whiteGold dark:placeholder-[#9CA3AF]"
            placeholder={t('jobPositionPlaceholder')}
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
            label={t('application')}
            required={t('applicationRequired')}
            labelClass=" dark:text-current"
            className="input col-span-1 mb-1 mt-3 w-full bg-whiteGold dark:placeholder-[#9CA3AF]"
            placeholder={t('applicationPlaceholder')}
            options={types1Data}
          />
        </div>
      )}
      {/* <Select
            register={register}
            errors={errors}
            nameInput="statusSelect"
            label={t('jobPosition')}
            required={t('jobPositionRequired')}
            className="select select-bordered mt-4 md:w-[435px] shadow-lg"
            labelClass=" dark:text-current"
            placeholder={t('jobPositionPlaceholder')}
              
            options={typesData}
            handleChange={handleItemChange}
            selected={selectedRadio}
          />
          <Select

            register={register}
            errors={errors}
            nameInput="statusSelect"
            label={t('application')}
            required={t('applicationRequired')}
            className="select select-bordered md:w-[435px] mt-4 shadow-lg"
            labelClass=" dark:text-current"
            placeholder={t('applicationPlaceholder')}
              
            options={typesData}
            handleChange={handleItemChange}
            selected={selectedRadio}
          /> */}
    </>
  );
};

export { PersonalInfoInput };

// function setSelectedRadio(value: string) {
//   throw new Error('Function not implemented.');
// }
