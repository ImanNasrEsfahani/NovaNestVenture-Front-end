'use client';
import Input from '@/components/common/form/Input';
import Select from '@/components/common/form/Select';

type Props = {
  register: any;
  errors: any;
  nameInputs: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    TypeOfCollaboration: string;
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

    TypeOfCollaboration: string;
    TypeOfCollaborationRequired: string;
    TypeOfCollaborationPlaceholder: string;

    FieldOfExpert: string;
    FieldOfExpertRequired: string;
    FieldOfExpertPlaceholder: string;
  }
};

export default function PersonalInfoInput({
  register,
  errors,
  nameInputs,
  noLabel,
  translations
}: Props) {

  enum TypeOfCollaborationType {
    INTERN = 0,
    EMPLOYEE = 1
  }
  const TypeOfCollaborationArray = [TypeOfCollaborationType.INTERN, TypeOfCollaborationType.EMPLOYEE];

  const TypeOfCollaborationData = TypeOfCollaborationArray.map((type: any) => ({
    value: type,
    label: TypeOfCollaborationType[type]
  }));

  enum FieldOfExpert {
    Developer = 0,
    Marketing = 1,
    Graphist = 2,
    Immigration = 3,
    Accountant = 4,
    Administrative = 5
  }
  const FieldOfExpertArray = [
    FieldOfExpert.Developer,
    FieldOfExpert.Marketing,
    FieldOfExpert.Graphist,
    FieldOfExpert.Immigration,
    FieldOfExpert.Accountant,
    FieldOfExpert.Administrative
  ];

  const FieldOfExpertData = FieldOfExpertArray.map((type: any) => ({
    value: type,
    label: FieldOfExpert[type]
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
      {nameInputs?.TypeOfCollaboration && (
        <div className="col-span-1">
          <Select
            register={register}
            errors={errors}
            nameInput="TypeOfCollaboration"
            label={translations.TypeOfCollaboration}
            required={translations.TypeOfCollaborationRequired}
            labelClass=" dark:text-current"
            className="input col-span-1 mb-1 w-full"
            placeholder={translations.TypeOfCollaborationPlaceholder}
            options={TypeOfCollaborationData}
          />
        </div>
      )}
      {nameInputs?.TypeOfCollaboration && (
        <div>
          <Select
            register={register}
            errors={errors}
            nameInput="FieldOfExpert"
            label={translations.FieldOfExpert}
            required={translations.FieldOfExpertRequired}
            labelClass=" dark:text-current"
            className="input col-span-1 mb-1 w-full"
            placeholder={translations.FieldOfExpertPlaceholder}
            options={FieldOfExpertData}
          />
        </div>
      )}
    </>
  );
};

