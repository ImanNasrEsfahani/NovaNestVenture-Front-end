'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InvestorRegistrationFormData } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import TextArea from '@/components/common/TextArea';
import { initialInvestorRegistrationFormData } from '../../initials/initObjects';
import { submitInvestorRegistrationForm } from '../../pages/api/investor-registration';
import { PersonalInfoInput } from '@/components/common/form/PersonalInfoInput';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import Input from '@/components/common/form/Input';
import FormTitle from '@/components/common/form/FormTitle';
import CountryInput from '@/components/common/form/CountryInput';

interface Translations {
  formTitle: string;
  formSubtitle: string;
  formDescriptionStart: string;
  formList: string[];
  formDescriptionEnd: string;

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
}

interface InvestorRegistrationFormClientProps {
  lang: string;
  translations: Translations;
}

export default function InvestorRegistrationFormClient({ lang, translations }: InvestorRegistrationFormClientProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InvestorRegistrationFormData>({
    mode: 'onBlur',
    defaultValues: initialInvestorRegistrationFormData
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
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
  //     );
  //     handleTokenChange(token);
  //   }

  //   fetchCsrfToken();
  // }, []);

  const onSubmit = async (formData: InvestorRegistrationFormData) => {
    // Set loading and sending states.
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
    submitInvestorRegistrationForm(sendFormData)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialInvestorRegistrationFormData); // Country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialInvestorRegistrationFormData);

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
          <div className="mb-6 grid grid-cols-1 gap-x-6 mt-20 md:grid-cols-2 xl:grid-cols-3">
            <PersonalInfoInput
              lang={lang}
              register={register}
              errors={errors}
              nameInputs={{
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
                phoneNumber: 'phoneNumber',
                jobPosition: ''
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
              className="input col-span-1 mb-1 mt-3 w-full "
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

              nameInputs={{
                countryOfResidence: 'countryOfResidence',
                provinceOfResidence: '',
              }}
              lang={lang}
              errors={errors}
              register={register}
            />

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
            
            {/* <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label={translations.companyName}
                // required={translations.companyNameRequired}
                required=""
                placeholder={translations.companyNamePlaceholder}
                className="input col-span-1 mb-1 mt-3 w-full"
                labelClass="dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div> */}

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
                rows={1}
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
                rows={1}
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
