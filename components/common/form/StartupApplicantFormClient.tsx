'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StartupApplicantFormDataType } from '@/types/global';
// import GetCsrfToken from '@/utils/get-csrf-token';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import { StartupApplicantFormData } from '../../../initials/initObjects';
import { submitContactForm } from '../../../pages/api/contact-us';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import FormTitle from '@/components/common/form/FormTitle';
import { getServerTranslation } from 'app/i18n';

interface Translations {
    formTitle: string;
    formSubtitle: string;
    sendingButton: string;
    sendButton: string;
    successMessage: string;
    failedMessage: string;
}

interface StartupApplicantFormClientProps {
  lang: string;
  translations: Translations;
}

export default function StartupApplicantFormClient({ lang, translations }: StartupApplicantFormClientProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<StartupApplicantFormDataType>({
    mode: 'onBlur',
    defaultValues: StartupApplicantFormData
  });

  const { t } = getServerTranslation(lang, 'formComponent');

  const {
    // csrfToken,
    // handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  const { send } = useSubmit();

  // useEffect(() => {
  //   async function fetchCsrfToken() {
  //     const token = await GetCsrfToken(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
  //     );
  //     handleTokenChange(token);
  //   }

  //   fetchCsrfToken();
  // }, []);

  const onSubmit = async (formData: StartupApplicantFormDataType) => {
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
    submitContactForm(sendFormData)
      .then((response) => {
        console.log(response);

        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(StartupApplicantFormData); // Reset the form after successful submission
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleNotifChange(true);
        handleSendChange(false);
        handleSuccessChange(false);
        reset(StartupApplicantFormData);

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
    <div className="max-w-responsive mx-auto">
        <div className='mb-12'>
            <FormTitle
                formTitle={translations.formTitle}
                formSubtitle={translations.formSubtitle}
            />
        </div>


        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6 grid grid-cols-1 gap-x-6 mt-20 md:grid-cols-2 xl:grid-cols-3">
                <PersonalInfoInput
                    register={register}
                    errors={errors}
                    nameInputs={{
                        firstName: 'firstname',
                        lastName: 'lastname',
                        email: 'email',
                        phoneNumber: 'number',
                        jobPosition: ''
                    }}
                    noLabel={false}
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

            <div className="w-60 mx-auto mt-6">
                <ButtonRefactor 
                    type='submit'
                    text={send ? translations.sendingButton : translations.sendButton}
                    disabled={errorsList[0] ? true : false}
                />
            </div>

        </form>

        <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
    </div>
  );
}
