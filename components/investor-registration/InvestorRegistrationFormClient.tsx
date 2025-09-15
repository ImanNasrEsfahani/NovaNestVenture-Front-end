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
import LandaLogo from '@/components/icons/common/LandaLogo';
import CountryInput from '@/components/common/form/CountryInput';

interface Translations {
  formTitle: string;
  formDescriptionStart: string;
  formList: string[];
  formDescriptionEnd: string;
  
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
      <div className="container relative -m-4 mx-auto gap-y-0 px-5 font-barlow lg:p-20">
        <div className="hidden md:inline absolute right-0 bottom-4 -z-10">
          <LandaLogo />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col bg-[#F8F5F0B2] pb-32">
            <div className="w-full h-auto pt-8 ">
              <div className="w-10/12 mx-auto h-auto flex flex-col gap-12">
                <div className="w-full h-auto flex flex-row justify-center">
                  <p className="text-black font-header font-medium text-xl md:text-[64px] md:leading-[75px]">
                    {translations.formTitle}
                  </p>
                  <p>{translations.formDescriptionStart}</p>
                  <div className="list-disc list-inside">
                    {translations.formList.map((item, index) => (
                      <li key={index} className="text-justify" >
                        {item}
                      </li>
                    ))}
                  </div>
                  <p>{translations.formDescriptionEnd}</p>
                </div>
                <div className="w-full border-b-[1.5px] py-5 border-black h-auto flex flex-row justify-start">
                  <p className="text-black font-barlow font-medium text-[30px] leading-[42px]">
                    {translations.formSubtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-10/12 mx-auto mb-6 grid grid-cols-1 gap-x-6 mt-20 md:grid-cols-2 lg:grid-cols-3">
              <PersonalInfoInput
                lang={lang}
                register={register}
                errors={errors}
                nameInputs={{
                  firstName: 'firstName',
                  lastName: 'lastName',
                  email: 'email',
                  phoneNumber: '',
                  jobPosition: ''
                }}
              />
              <Input
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
              />

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
                nameInput="countryOfResidence"
                register={register}
              />

              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="companyName"
                  type="text"
                  label={translations.companyName}
                  required={translations.companyNameRequired}
                  placeholder={translations.companyNamePlaceholder}
                  className="input col-span-1 mb-1 mt-3 w-full"
                  labelClass="dark:text-current"
                  patternValue=""
                  patternMessage=""
                />
              </div>

              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="investmentCeiling"
                  type="text"
                  label={translations.maximumInvestment}
                  required={translations.maximumInvestmentRequired}
                  placeholder={translations.maximumInvestmentPlaceholder}
                  className="input col-span-1 mb-1 mt-3 w-full"
                  labelClass=" dark:text-current"
                  patternValue=""
                  patternMessage=""
                />
              </div>

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
                  required={translations.howDidYouKnowUsRequired}
                  rows={1}
                />
              </div>
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
