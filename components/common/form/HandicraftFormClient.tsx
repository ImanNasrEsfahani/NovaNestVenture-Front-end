'use client';

import React, { useEffect } from 'react';
import PersonalInfoInput from './PersonalInfoInput';
import GetCsrfToken from '@/utils/get-csrf-token';
import { useForm } from 'react-hook-form';
import { HandicraftFormData } from 'initials/initObjects';
import { HandicraftForm as HandicraftFormType } from '@/types/global';
import NotificationSendForm from './NotificationSendForm';
// import ButtonRefactor from '../ButtonRefactor';
import { submitHandiCraftApplicationForm } from 'pages/api/handiCrafts';
import { useSubmit } from 'stores/dataStore';
import ArrowRight from '@/components/icons/common/ArrowRight';
import { getServerTranslation } from 'app/i18n';

interface Translations {
  button: string;
  successMessage: string;
  failedMessage: string;
}

interface HandicraftFormClientProps {
  lang: string;
  translations: Translations;
}

// import { HandicraftForm, HandicraftForm } from '@/types/global';
export default function HandicraftFormClient({ lang, translations }: HandicraftFormClientProps) {

  const { t } = getServerTranslation(lang, 'formComponent');

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<HandicraftFormType>({
    mode: 'onBlur',
    defaultValues: HandicraftFormData
  });

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, [handleTokenChange]);

  const onSubmit = async (formData: HandicraftFormType) => {
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
    submitHandiCraftApplicationForm(sendFormData, csrfToken)
      .then((response) => {
        console.log(response);

        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(HandicraftFormData); // Reset the form after successful submission
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleNotifChange(true);
        handleSendChange(false);
        handleSuccessChange(false);
        reset(HandicraftFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  // const errorsList = Object.entries(errors).map(([name, value]) => ({
  //   name: name,
  //   value: value
  // }));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center font-barlow"
    >
      <div className="my-4 grid w-full grid-cols-1 md:flex md:w-2/5 md:flex-col md:items-center lg:w-2/5">
        <div className="grid w-full grid-cols-1 gap-x-3 md:grid-cols-2">
          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: 'first_name',
              lastName: 'last_name',
              email: 'email',
              phoneNumber: 'phone_number',
              jobPosition: ''
            }}
            noLabel={true}
            translations={{
              INTERN: t('INTERN'),
              EMPLOYEE: t('EMPLOYEE'),

              Developer: t('Developer'),
              Marketing: t('Marketing'),
              Graphist: t('Graphist'),
              Immigration: t('Immigration'),
              Accountant: t('Accountant'),
              Administrative: t('Administrative'),

              firstName: t('firstName'),
              firstNameRequired: t('firstNameRequired'),
              firstNamePlaceholder: t('firstNamePlaceholder'),

              lastName: t('lastName'),
              lastNameRequired: t('lastNameRequired'),
              lastNamePlaceholder: t('lastNamePlaceholder'),
              
              email: t('email'),
              emailRequired: t('emailRequired'),
              emailErrorMessage: t('emailErrorMessage'),
              emailPlaceholder: t('emailPlaceholder'),

              phoneNumber: t('phoneNumber'),
              phoneNumberRequired: t('phoneNumberRequired'),
              phoneNumberErrorMessage: t('phoneNumberErrorMessage'),
              phoneNumberPlaceholder: t('phoneNumberPlaceholder'),

              jobPosition: t('jobPosition'),
              jobPositionRequired: t('jobPositionRequired'),
              jobPositionPlaceholder: t('jobPositionPlaceholder'),

              application: t('application'),
              applicationRequired: t('applicationRequired'),
              applicationPlaceholder: t('applicationPlaceholder'),
            }}
          />
        </div>

        <div className="w-full text-center md:w-auto">
          <button className="flex items-center mx-auto px-6 py-3 font-barlow rounded-xl font-bold text-lg text-white bg-black hover:bg-primary transition-all">
            {translations.button}
            <ArrowRight />
          </button>
          {/* <ButtonRefactor type="submit" text="Submit" /> */}
        </div>
        <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
      </div>
    </form>
  );
}
