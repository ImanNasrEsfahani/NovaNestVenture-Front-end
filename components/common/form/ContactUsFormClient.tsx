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
import FormTitle from './FormTitle';

interface Translations {
  title: string;
  subTitle: string;

  subject: string;
  subjectRequired: string;
  subjectPlaceholder: string;

  message: string;
  messageRequired: string;
  messagePlaceholder: string;
  messagePlaceholderErrorMessage: string;

  sendingButton: string;
  sendButton: string;
  successMessage: string;
  failedMessage: string;

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

  FieldOfExpertOther: string;
  FieldOfExpertOtherRequired: string;
  FieldOfExpertOtherPlaceholder: string;
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
      <FormTitle formTitle={translations.title} formSubtitle={translations.subTitle} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: 'firstName',
              lastName: 'lastName',
              email: 'email',
              phoneNumber: 'phoneNumber',
              countryOfResidence: '',
              provinceOfResidence: '',
              cityOfResidence: '',
              TypeOfCollaboration: ''
            }}
            noLabel={false}
            translations={{

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

              countries: translations.countries,
              countryName: translations.countryName,
              countryNameRequired: translations.countryNameRequired,
              countryNamePlaceholder: translations.countryNamePlaceholder,

              provinceOfResidence: translations.provinceOfResidence,
              provinceOfResidenceRequired: translations.provinceOfResidenceRequired,
              provinceOfResidencePlaceholder: translations.provinceOfResidencePlaceholder,

              cityOfResidence: translations.cityOfResidence,
              cityOfResidenceRequired: translations.cityOfResidenceRequired,
              cityOfResidencePlaceholder: translations.cityOfResidencePlaceholder,

              TypeOfCollaboration: translations.TypeOfCollaboration,
              TypeOfCollaborationRequired: translations.TypeOfCollaborationRequired,
              TypeOfCollaborationPlaceholder: translations.TypeOfCollaborationPlaceholder,
              TypeOfCollaborationData: translations.TypeOfCollaborationData,

              FieldOfExpert: translations.FieldOfExpert,
              FieldOfExpertRequired: translations.FieldOfExpertRequired,
              FieldOfExpertPlaceholder: translations.FieldOfExpertPlaceholder,
              FieldOfExpertData: translations.FieldOfExpertData,

              FieldOfExpertOther: translations.FieldOfExpertOther,
              FieldOfExpertOtherRequired: translations.FieldOfExpertOtherRequired,
              FieldOfExpertOtherPlaceholder: translations.FieldOfExpertOtherPlaceholder
            }}
          />
        </div>

        <Input
          id="subject"
          register={register}
          errors={errors}
          nameInput="subject"
          type="text"
          required={translations.subjectRequired}
          patternValue=""
          patternMessage={translations.subjectRequired}
          placeholder={translations.subjectPlaceholder}
          className="input"
          label={translations.subject}
          labelClass=""
          containerClass=""
        />

        <TextArea
          title={translations.message}
          register={register}
          errors={errors}
          required={translations.messageRequired}
          nameTextArea="message"
          patternValue=""
          patternMessage=""
          placeholder={translations.messagePlaceholder}
          rows={4}
          cols={20}
          maxLength={1450}
          maxLengthMessage={translations.messagePlaceholderErrorMessage}
          validate=""
        />

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
