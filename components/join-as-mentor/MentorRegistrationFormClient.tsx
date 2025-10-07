'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import TextArea from '@/components/common/TextArea';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import Input from '@/components/common/form/Input';
import CountryInput from '@/components/common/form/CountryInput';

import FormTitle from '@/components/common/form/FormTitle';
import { MentorRegistrationFormData } from '@/types/global';
import { initialMentorRegistrationFormData } from '../../initials/initObjects';
import { submitMentorRegistrationForm } from '../../pages/api/join-as-mentor';

interface Translations {
  formTitle: string;
  formSubtitle: string;
  birthDate: string;
  birthDateErrorMessage: string;
  birthDatePlaceholder: string;
  ExpertiesAreas: string;
  ExpertiesAreasPlaceholder: string;
  ExpertiesAreasRequired: string;
  ExpertiesAreasErrorMessage: string;
  
  howDidYouKnowUs: string;
  howDidYouKnowUsPlaceholder: string;
  howDidYouKnowUsRequired: string;
  howDidYouKnowUsErrorMessage: string;
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

  cityOfResidence: string;
  cityOfResidenceRequired: string;
  cityOfResidencePlaceholder: string;

  website: string;
  websiteRequired: string;
  websitePlaceholder: string;
  
  linkedin: string;
  linkedinRequired: string;
  linkedinPlaceholder: string;

  instagram: string;
  instagramRequired: string;
  instagramPlaceholder: string;

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
  TypeOfCollaborationData: { value: string; label: string }[];

  FieldOfExpert: string;
  FieldOfExpertRequired: string;
  FieldOfExpertPlaceholder: string;
  FieldOfExpertData: { value: string; label: string }[];
}

interface Props {
  lang: string;
  translations: Translations;
}

export default function MentorRegistrationFormClient({ lang, translations }: Props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<MentorRegistrationFormData>({
    mode: 'onBlur',
    defaultValues: initialMentorRegistrationFormData
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

  const onSubmit = async (formData: MentorRegistrationFormData) => {
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
    submitMentorRegistrationForm(sendFormData)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialMentorRegistrationFormData); // Country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialMentorRegistrationFormData);

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
          <div className="grid grid-cols-1 gap-x-6 mt-20 md:grid-cols-2 xl:grid-cols-3">
            <PersonalInfoInput
              register={register}
              errors={errors}
              nameInputs={{
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
                phoneNumber: 'phoneNumber',
                countryOfResidence: 'countryOfResidence',
                provinceOfResidence: '',
                cityOfResidence: 'cityOfResidence',
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
                FieldOfExpertData: translations.FieldOfExpertData
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
              className="input col-span-1 mb-1 w-full"
              labelClass="dark:text-current"
            />

            <Input
              register={register}
              errors={errors}
              nameInput="website"
              type="text"
              label={translations.website}
              required=""
              placeholder={translations.websitePlaceholder}
              className="input col-span-1 mb-1 w-full"
              labelClass=""
              patternValue=""
              patternMessage=""
            />

            <Input
              register={register}
              errors={errors}
              nameInput="linkedin"
              type="text"
              label={translations.linkedin}
              required=""
              placeholder={translations.linkedinPlaceholder}
              className="input col-span-1 mb-1 w-full"
              labelClass=""
              patternValue=""
              patternMessage=""
            />

            <Input
              register={register}
              errors={errors}
              nameInput="instagram"
              type="text"
              label={translations.instagram}
              required=""
              placeholder={translations.instagramPlaceholder}
              className="input col-span-1 mb-1 w-full"
              labelClass=""
              patternValue=""
              patternMessage=""
            />

            </div>
            <div className="flex flex-col w-full">
              <TextArea
                title={translations.ExpertiesAreas}
                register={register}
                errors={errors}
                placeholder={translations.ExpertiesAreasPlaceholder}
                nameTextArea="ExpertiesAreas"
                patternMessage=""
                patternValue=""
                required={translations.ExpertiesAreasRequired}
                rows={5}
                maxLength={1450}
                maxLengthMessage={translations.ExpertiesAreasErrorMessage}
                validate=""
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
                rows={3}
                maxLength={1450}
                maxLengthMessage={translations.howDidYouKnowUsErrorMessage}
                validate=""
              />
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
