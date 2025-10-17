'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { JoinAsaPartnerFormData } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import TextArea from '@/components/common/TextArea';
// import GetCsrfToken from '@/utils/get-csrf-token';
import { initialJoinAsaPartnerFormData } from '../../initials/initObjects';
import { submitPartnerMembershipForm } from '../../pages/api/partner-membership';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import FormTitle from '@/components/common/form/FormTitle';
import Input from '../common/form/Input';

interface Translations {
  formTitle: string;
  formSubtitle: string;
  birthDate: string;
  birthDateErrorMessage: string;
  birthDatePlaceholder: string;
  companyName: string;
  companyNameRequired: string;
  companyNamePlaceholder: string;
  investmentCeiling: string;
  investmentCeilingRequired: string;
  investmentCeilingPlaceholder: string;
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
  websiteErrorMessage: string;

  linkedin: string;
  linkedinRequired: string;
  linkedinPlaceholder: string;
  linkedinErrorMessage: string;

  briefIntroduction: string;
  briefIntroductionRequired: string;
  briefIntroductionPlaceholder: string;
  briefIntroductionErrorMessage: string;

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

  FieldOfExpertOther: string;
  FieldOfExpertOtherRequired: string;
  FieldOfExpertOtherPlaceholder: string;
}

interface Props {
  lang: string;
  translations: Translations;
}

export default function JoinAsaPartnerFormClient({ lang, translations }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<JoinAsaPartnerFormData>({
    mode: 'onBlur',
    defaultValues: initialJoinAsaPartnerFormData
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

  const onSubmit = async (formData: JoinAsaPartnerFormData) => {
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
    let notifTimeout: NodeJS.Timeout;

    submitPartnerMembershipForm(sendFormData)
      .then((response) => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialJoinAsaPartnerFormData); // Country does not reset

        console.log(response);

        notifTimeout = setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialJoinAsaPartnerFormData);
        notifTimeout = setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });

    // Cleanup timeout if component unmounts
    React.useEffect(() => {
      return () => {
        if (notifTimeout) {
          clearTimeout(notifTimeout);
        }
      };
    }, []);
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  return (
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
              FieldOfExpertData: translations.FieldOfExpertData,

              FieldOfExpertOther: translations.FieldOfExpertOther,
              FieldOfExpertOtherRequired: translations.FieldOfExpertOtherRequired,
              FieldOfExpertOtherPlaceholder: translations.FieldOfExpertOtherPlaceholder
            }}
          />

          <Input
            id="birthDate"
            register={register}
            errors={errors}
            nameInput="companyName"
            type="text"
            label={translations.companyName}
            required=""
            placeholder={translations.companyNamePlaceholder}
            className="input col-span-1 mb-1 w-full"
            labelClass=""
            patternValue=""
            patternMessage=""
          />

          <Input
            id="birthDate"
            register={register}
            errors={errors}
            nameInput="website"
            type="text"
            label={translations.website}
            required=""
            placeholder={translations.websitePlaceholder}
            className="input col-span-1 mb-1 w-full"
            labelClass=""
            patternValue="^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$"
            patternMessage={translations.websiteErrorMessage}
          />

          <Input
            id="birthDate"
            register={register}
            errors={errors}
            nameInput="linkedin"
            type="text"
            label={translations.linkedin}
            required=""
            placeholder={translations.linkedinPlaceholder}
            className="input col-span-1 mb-1 w-full"
            labelClass=""
            patternValue="^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$"
            patternMessage={translations.linkedinErrorMessage}
          />

        </div>
        <div className="flex flex-col w-full">
          <TextArea
            title={translations.briefIntroduction}
            register={register}
            errors={errors}
            placeholder={translations.briefIntroductionPlaceholder}
            nameTextArea="briefIntroduction"
            patternMessage=""
            patternValue=""
            required=""
            rows={5}
            maxLength={1450}
            maxLengthMessage={translations.briefIntroductionErrorMessage}
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
            // required={translations.howDidYouKnowUsRequired}
            required=""
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
  );
}
