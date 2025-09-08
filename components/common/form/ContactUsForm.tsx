'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ContactUSFormData } from '../../../types/global';
// import GetCsrfToken from '../../../utils/get-csrf-token';
import NotificationSendForm from './NotificationSendForm';
import { ContactFormData } from '../../../initials/initObjects';
import { submitContactForm } from '../../../pages/api/contact-us';
import { PersonalInfoInput } from './PersonalInfoInput';
import Input from './Input';
import TextArea from '../TextArea';
import { getServerTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '../ButtonRefactor';

export default function ContactUsForm() {
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

  const lang = useLang((s) => s.lang);

  const { t } = getServerTranslation(lang, 'formComponent');

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
        {t('contactForm', { returnObjects: true }).title}
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
              jobPosition: ''
            }}
            noLabel={true}
          />

          <div className="col-span-1">
            <Input
              register={register}
              errors={errors}
              nameInput="subject"
              type="text"
              required={
                t('contactForm', { returnObjects: true }).subjectRequired
              }
              patternValue=""
              patternMessage={
                t('contactForm', { returnObjects: true }).subjectRequired
              }
              placeholder={
                t('contactForm', { returnObjects: true }).subjectPlaceholder
              }
              className="input  col-span-1 mb-1 mt-3 w-full bg-whiteGold dark:placeholder-[#9CA3AF]"
              labelClass=" dark:text-current"
              containerClass=""
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <TextArea
              register={register}
              errors={errors}
              required={
                t('contactForm', { returnObjects: true }).messageRequired
              }
              nameTextArea="message"
              patternValue=""
              patternMessage=""
              placeholder={
                t('contactForm', { returnObjects: true }).messagePlaceholder
              }
              rows={4}
              cols={20}
            />
          </div>
        </div>

        <div className="w-60 mx-auto mt-6">
          <ButtonRefactor 
            type='submit'
            text={send ? t("sendingButton") : t("sendButton")}
            disabled={errorsList[0] ? true : false}
          />
        </div>
      </form>

      <NotificationSendForm />
    </div>
  );
}
