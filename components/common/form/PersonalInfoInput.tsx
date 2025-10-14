'use client';
import Input from '@/components/common/form/Input';
import Select from '@/components/common/form/Select';
import CountryInput from '@/components/common/form/CountryInput';

type Props = {
  register: any;
  errors: any;
  nameInputs: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    countryOfResidence: string;
    provinceOfResidence: string;
    cityOfResidence: string;
    TypeOfCollaboration: string;
  };
  noLabel: boolean;
  translations: {

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

    TypeOfCollaboration: string;
    TypeOfCollaborationRequired: string;
    TypeOfCollaborationPlaceholder: string;
    TypeOfCollaborationData: { value: string; label: string }[];

    FieldOfExpert: string;
    FieldOfExpertRequired: string;
    FieldOfExpertPlaceholder: string;
    FieldOfExpertData: { value: string; label: string }[];
  }
};

export default function PersonalInfoInput({
  register,
  errors,
  nameInputs,
  noLabel,
  translations
}: Props) {

  // const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedRadio(event.target.value);
  // };

  // const [selectedRadio, setSelectedRadio] = useState('');

  return (
    <>
      {nameInputs?.firstName && (
        <div className="col-span-1 w-full">
          <Input
            id="first_name"
            register={register}
            errors={errors}
            nameInput={nameInputs.firstName}
            type="text"
            required={translations.firstNameRequired}
            patternValue=""
            patternMessage=""
            placeholder={translations.firstNamePlaceholder}
            className="input col-span-1 mb-1 w-full"
            {...(!noLabel ? { label: translations.firstName, labelClass: 'dark:text-current' } : {})}
          />
        </div>
      )}

      {nameInputs?.lastName && (
        <div className="col-span-1 w-full">
          <Input
            id="last_name"
            register={register}
            errors={errors}
            nameInput={nameInputs.lastName}
            type="text"
            required={translations.lastNameRequired}
            patternValue=""
            patternMessage=""
            placeholder={translations.lastNamePlaceholder}
            className="input col-span-1 mb-1 w-full"
            {...(!noLabel ? { label: translations.lastName, labelClass: 'dark:text-current' } : {})}
          />
        </div>
      )}

      {nameInputs?.email && (
        <div className="col-span-1 w-full">
          <Input
            id="email"
            register={register}
            errors={errors}
            nameInput={nameInputs.email}
            type="email"
            required={translations.emailRequired}
            patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            patternMessage={translations.emailErrorMessage}
            placeholder={translations.emailPlaceholder}
            className="input col-span-1 mb-1 w-full"
            {...(!noLabel ? { label: translations.email, labelClass: 'dark:text-current' } : {})}
          />
        </div>
      )}

      {nameInputs?.phoneNumber && (
        <div className="col-span-1 w-full">
          <Input
            id="phone_number"
            register={register}
            errors={errors}
            nameInput={nameInputs.phoneNumber}
            type="text"
            required={translations.phoneNumberRequired}
            // patternValue="^\+?[1-9]\d{1,14}$"
            patternValue=""
            patternMessage={translations.phoneNumberErrorMessage}
            placeholder={translations.phoneNumberPlaceholder}
            className="input col-span-1 mb-1 w-full"
            {...(!noLabel ? { label: translations.phoneNumber, labelClass: 'dark:text-current' } : {})}
          />
        </div>
      )}

      <CountryInput
        countries={translations.countries}
        countryName={translations.countryName}
        countryNameRequired={translations.countryNameRequired}
        countryNamePlaceholder={translations.countryNamePlaceholder}
        provinceOfResidence={translations.provinceOfResidence}
        provinceOfResidenceRequired={translations.provinceOfResidenceRequired}
        provinceOfResidencePlaceholder={translations.provinceOfResidencePlaceholder}
        cityOfResidence={translations.cityOfResidence}
        cityOfResidenceRequired={translations.cityOfResidenceRequired}
        cityOfResidencePlaceholder={translations.cityOfResidencePlaceholder}

        nameInputs={{
          countryOfResidence: nameInputs.countryOfResidence,
          provinceOfResidence: '',
          cityOfResidence: nameInputs.cityOfResidence
        }}
        errors={errors}
        register={register}
      />

      {nameInputs?.TypeOfCollaboration && (
        <div className="col-span-1 w-full">
          <Select
            register={register}
            errors={errors}
            nameInput="TypeOfCollaboration"
            label={translations.TypeOfCollaboration}
            required={translations.TypeOfCollaborationRequired}
            labelClass=" dark:text-current"
            className="input col-span-1 mb-1 w-full"
            placeholder={translations.TypeOfCollaborationPlaceholder}
            options={translations.TypeOfCollaborationData}
          />
        </div>
      )}
      {nameInputs?.TypeOfCollaboration && (
        <div className="col-span-1 w-full">
          <Select
            register={register}
            errors={errors}
            nameInput="FieldOfExpert"
            label={translations.FieldOfExpert}
            required={translations.FieldOfExpertRequired}
            labelClass=" dark:text-current"
            className="input col-span-1 mb-1 w-full"
            placeholder={translations.FieldOfExpertPlaceholder}
            options={translations.FieldOfExpertData}
          />
        </div>
      )}
    </>
  );
};

