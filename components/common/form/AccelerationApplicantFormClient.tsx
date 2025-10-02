'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AcademyApplicantFormDataType } from '@/types/global';
// import GetCsrfToken from '@/utils/get-csrf-token';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import { AccelerationApplicantFormData } from '../../../initials/initObjects';
import { submitContactForm } from '../../../pages/api/contact-us';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import FormTitle from '@/components/common/form/FormTitle';

interface Translations {
    formTitle: string;
    formSubtitle: string;
    sendingButton: string;
    ReserveButton: string;
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

export default function AccelerationApplicantFormClient({ lang, translations }: Props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AcademyApplicantFormDataType>({
    mode: 'onBlur',
    defaultValues: AccelerationApplicantFormData
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

  const onSubmit = async (formData: AcademyApplicantFormDataType) => {
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
        reset(AccelerationApplicantFormData); // Reset the form after successful submission
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleNotifChange(true);
        handleSendChange(false);
        handleSuccessChange(false);
        reset(AccelerationApplicantFormData);

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
        {/* <div className='mb-12'>
            <FormTitle
                formTitle={translations.formTitle}
                formSubtitle={translations.formSubtitle}
            />
        </div> */}
        
        {/* CTA */}
        <section className="pt-24 pb-4 max-w-5xl mx-auto lg:px-4 text-center">
          <h3 className="text-xl">If you are an entrepreneur, a business owner, or have an innovative startup idea and want to accelerate your growth, we are here to support you on your journey toward global success. Book your free consultation today and let&rsquo;s start this path together.</h3>
        </section>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6 grid grid-cols-1 gap-x-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
                <PersonalInfoInput
                    register={register}
                    errors={errors}
                    nameInputs={{
                        firstName: 'firstname',
                        lastName: 'lastname',
                        email: 'email',
                        phoneNumber: 'number',
                        TypeOfCollaboration: ''
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

                      TypeOfCollaboration: translations.TypeOfCollaboration,
                      TypeOfCollaborationRequired: translations.TypeOfCollaborationRequired,
                      TypeOfCollaborationPlaceholder: translations.TypeOfCollaborationPlaceholder,

                      FieldOfExpert: translations.FieldOfExpert,
                      FieldOfExpertRequired: translations.FieldOfExpertRequired,
                      FieldOfExpertPlaceholder: translations.FieldOfExpertPlaceholder,
                    }}
                />
            </div>

            <div className="w-60 mx-auto mt-6">
                <ButtonRefactor 
                    type='submit'
                    text={send ? translations.sendingButton : translations.ReserveButton}
                    disabled={errorsList[0] ? true : false}
                />
            </div>

        </form>

        <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
    </div>
  );
}
