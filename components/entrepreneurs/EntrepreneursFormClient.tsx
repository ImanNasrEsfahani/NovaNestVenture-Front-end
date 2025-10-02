'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/form/Input';
import { Entrepreuneur } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import { initialFormData } from '../../initials/initObjects';
import { submitEntrepreneurForm } from '../../pages/api/entrepreneurs';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import { useSubmit } from 'stores/dataStore';
import TextArea from '@/components/common/TextArea';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import CountryInput from '@/components/common/form/CountryInput';
import FormTitle from '@/components/common/form/FormTitle';

interface Translations {
  formTitle: string;
  formSubtitle: string;
  birthDate: string;
  birthDateErrorMessage: string;
  birthDatePlaceholder: string;
  companyName: string;
  companyNameRequired: string;
  companyNamePlaceholder: string;
  maximumInvestment: string;
  maximumInvestmentRequired: string;
  maximumInvestmentPlaceholder: string;
  preferredAreas: string;
  preferredAreasPlaceholder: string;
  preferredAreasRequired: string;
  howDidYouKnowUs: string;
  howDidYouKnowUsPlaceholder: string;
  howDidYouKnowUsRequired: string;
  sendButton: string;

  successMessage: string;
  failedMessage: string;

  countries: string[];
  countryName: string;
  countryNameRequired: string;
  countryNamePlaceholder: string;
  provinceOfResidence: string;
  provinceOfResidenceRequired: string;
  provinceOfResidencePlaceholder: string;

  
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

interface Props {
  lang: string;
  translations: Translations;
}

export default function EntrepreneursFormClient({ lang, translations }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Entrepreuneur>({
    mode: 'onBlur',
    defaultValues: initialFormData
  });

  const {
    // csrfToken,
    // handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  // useEffect(() => {
  //   async function fetchCsrfToken() {
  //     const token = await GetCsrfToken(
  //       // TODO: avoid hardcoding the URL.
  //       'https://landa-back.novanestventure.com/get-csrf-token'
  //     );
  //     handleTokenChange(token);
  //   }

  //   fetchCsrfToken();
  // }, []);

  const onSubmit = async (formData: Entrepreuneur) => {
    // Set loading and sending states.
    console.log(formData);
    handleSubmitingChange(true);
    handleSendChange(true);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Send the form data to the API.
    submitEntrepreneurForm(sendFormData)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialFormData); // country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  return (
    <>
      <div className="max-w-responsive mx-auto py-20">
        <div className='mb-12'>
          <FormTitle
            formTitle={translations.formTitle}
            formSubtitle={translations.formSubtitle}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-x-6 mt-20  md:grid-cols-2 xl:grid-cols-3">
            <PersonalInfoInput
              register={register}
              errors={errors}
              nameInputs={{
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
                phoneNumber: 'phoneNumber',
                jobPosition: ''
              }}
              noLabel={false}
              translations={{
                INTERN: translations.INTERN,
                EMPLOYEE: translations.EMPLOYEE,

                Developer: translations.Developer,
                Marketing: translations.Marketing,
                Graphist: translations.Graphist,
                Immigration: translations.Immigration,
                Accountant: translations.Accountant,
                Administrative: translations.Administrative,

                firstName: translations.firstName,
                firstNameRequired: translations.firstNameRequired,
                firstNamePlaceholder: translations.firstNamePlaceholder,

                lastName: translations.lastName,
                lastNameRequired: translations.lastNameRequired,
                lastNamePlaceholder: translations.lastNamePlaceholder,
                
                email: translations.email,
                emailRequired: translations.emailRequired,
                emailErrorMessage: translations.emailErrorMessage,
                emailPlaceholder: translations.emailPlaceholder,

                phoneNumber: translations.phoneNumber,
                phoneNumberRequired: translations.phoneNumberRequired,
                phoneNumberErrorMessage: translations.phoneNumberErrorMessage,
                phoneNumberPlaceholder: translations.phoneNumberPlaceholder,

                jobPosition: translations.jobPosition,
                jobPositionRequired: translations.jobPositionRequired,
                jobPositionPlaceholder: translations.jobPositionPlaceholder,

                application: translations.application,
                applicationRequired: translations.applicationRequired,
                applicationPlaceholder: translations.applicationPlaceholder,
              }}
            />
            {/* <Input
              register={register}
              errors={errors}
              nameInput="birthDate"
              type="date"
              label={translations.birthDate}
              required={''}
              patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
              patternMessage={translations.birthDateErrorMessage}
              placeholder={translations.birthDatePlaceholder}
              className="input col-span-1 mb-1 mt-3 w-full"
              labelClass="dark:text-current"
            /> */}

            <CountryInput
              countries={translations.countries}
              countryName={translations.countryName}
              countryNameRequired={translations.countryNameRequired}
              countryNamePlaceholder={translations.countryNamePlaceholder}
              provinceOfResidence={translations.provinceOfResidence}
              provinceOfResidenceRequired={translations.provinceOfResidenceRequired}
              provinceOfResidencePlaceholder={translations.provinceOfResidencePlaceholder}
              lang={lang}
              errors={errors}
              nameInputs={{
                countryOfResidence: 'countryOfResidence',
                provinceOfResidence: '',
                cityOfResidence: ''
              }}
              register={register}
            />

            {/* <Input
              register={register}
              errors={errors}
              nameInput="companyName"
              type="text"
              label={translations.companyName}
              required={translations.companyNameRequired}
              placeholder={translations.companyNamePlaceholder}
              className="input col-span-1 mb-1 mt-3  w-full"
              labelClass="dark:text-current"
              patternValue=""
              patternMessage=""
            /> */}

            <Input
              register={register}
              errors={errors}
              nameInput="investmentCeiling"
              type="text"
              label={translations.maximumInvestment}
              // required={translations.maximumInvestmentRequired}
              required=""
              placeholder={translations.maximumInvestmentPlaceholder}
              className="input col-span-1 mb-1 mt-3 w-full"
              labelClass=" dark:text-current"
              patternValue=""
              patternMessage=""
            />

            <div className="flex flex-col col-span-1 md:col-span-3 gap-6">
              <TextArea
                title={translations.preferredAreas}
                register={register}
                errors={errors}
                placeholder={translations.preferredAreasPlaceholder}
                nameTextArea="preferredAreas"
                patternMessage=""
                patternValue=""
                required={translations.preferredAreasRequired}
                rows={3}
              />


              <TextArea
                title={translations.howDidYouKnowUs}
                register={register}
                errors={errors}
                placeholder={translations.howDidYouKnowUsPlaceholder}
                nameTextArea="howDidYouKnowUs"
                patternMessage=""
                patternValue=""
                // required={translations.howDidYouKnowUsRequired}
                required=""
                rows={3}
              />
            </div>
          </div>
          <div className="mx-auto w-44 pb-4 md:w-52 mt-20">
            <ButtonRefactor
              type="submit"
              text={translations.sendButton}
              disabled={errorsList[0] ? true : false}
            />
          </div>
        </form>
        <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
      </div>
    </>
  );
}
