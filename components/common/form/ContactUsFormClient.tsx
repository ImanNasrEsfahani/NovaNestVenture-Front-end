'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ContactUSFormData } from '@/types/global';
// import GetCsrfToken from '@/utils/get-csrf-token';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import { ContactFormData } from '../../../initials/initObjects';
import { submitContactForm } from '../../../pages/api/contact-us';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import Input from '@/components/common/form/Input';
import TextArea from '@/components/common/TextArea';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';

interface Translations {
  title: string;
  subjectRequired: string;
  subjectPlaceholder: string;
  messageRequired: string;
  messagePlaceholder: string;
  sendingButton: string;
  sendButton: string;
  successMessage: string;
  failedMessage: string;

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

interface Props {
  lang: string;
  translations: Translations;
}

export default function ContactUsFormClient({ lang, translations }: Props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactUSFormData>({
    mode: 'onBlur',
    defaultValues: ContactFormData
  });

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

  const onSubmit = async (formData: ContactUSFormData) => {
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
        reset(ContactFormData); // Reset the form after successful submission
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleNotifChange(true);
        handleSendChange(false);
        handleSuccessChange(false);
        reset(ContactFormData);

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
    <div className="flex h-full flex-col items-center justify-between md:items-start">
      <h2 className="flex w-full justify-center font-header text-4xl mb-10 ltr:tracking-[.em]">
        {translations.title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:w-[524px]">
          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: 'name',
              lastName: '',
              email: 'email',
              phoneNumber: 'number',
              TypeOfCollaboration: ''
            }}
            noLabel={true}
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

              TypeOfCollaboration: translations.TypeOfCollaboration,
              TypeOfCollaborationRequired: translations.TypeOfCollaborationRequired,
              TypeOfCollaborationPlaceholder: translations.TypeOfCollaborationPlaceholder,

              FieldOfExpert: translations.FieldOfExpert,
              FieldOfExpertRequired: translations.FieldOfExpertRequired,
              FieldOfExpertPlaceholder: translations.FieldOfExpertPlaceholder,
            }}
          />

          <div className="col-span-1">
            <Input
              register={register}
              errors={errors}
              nameInput="subject"
              type="text"
              required={translations.subjectRequired}
              patternValue=""
              patternMessage={translations.subjectRequired}
              placeholder={translations.subjectPlaceholder}
              className="input  col-span-1 mb-1 mt-3 w-full bg-whiteGold dark:placeholder-[#9CA3AF]"
              labelClass=" dark:text-current"
              containerClass=""
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <TextArea
              register={register}
              errors={errors}
              required={translations.messageRequired}
              nameTextArea="message"
              patternValue=""
              patternMessage=""
              placeholder={translations.messagePlaceholder}
              rows={4}
              cols={20}
            />
          </div>
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
