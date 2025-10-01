'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import UploadInput from '@/components/common/UploadInput';
import { JobFormData } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import { initialJobFormData } from '../../initials/initObjects';
import { submitApplyJobForm } from '../../pages/api/jobs';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
// import ButtonRefactor from '@/components/common/ButtonRefactor';
import Button from '@/components/common/Button';
import { useSubmit } from 'stores/dataStore';
import { useFile } from 'stores/fileStore';
import FormTitle from '@/components/common/form/FormTitle';
import FileUpload from '@/components/common/form/FileUpload';

interface Translations {
  formTitle: string;
  formSubtitle: string;
  resumeFile: string;
  successMessage: string;
  failedMessage: string;
  choseFile: string;
  
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

  jobPosition: string;
  jobPositionRequired: string;
  jobPositionPlaceholder: string;

  application: string;
  applicationRequired: string;
  applicationPlaceholder: string;

}

interface Props {
  lang: string;
  translations: Translations;
}

export default function JoinOurTeamFormClient({ lang, translations }: Props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<JobFormData>({
    mode: 'onBlur',
    defaultValues: initialJobFormData
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit();

  const { cvFileState, handleCvFileChange } = useFile();

  useEffect(() => {
    let cancelled = false;
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      if (!cancelled) {
        handleTokenChange(token);
      }
    }
    fetchCsrfToken();
    return () => {
      cancelled = true;
    };
  }, [handleTokenChange]);

  const onSubmit = async (formData: JobFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    const filePostMap = {
      cvFile: cvFileState.cvFile
    };

    for (const [fieldName, file] of Object.entries(filePostMap)) {
      if (file) {
        sendFormData.append(fieldName, file, file.name);
      }
    }

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      } else sendFormData.append(fieldName, fieldValue[0]);
    });

    // Send the form data to the API.
    submitApplyJobForm(sendFormData, csrfToken)
      .then((response) => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialJobFormData); // Country does not reset

        console.log(response);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch((error) => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);

        console.log(error);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  // Adapter: FileUpload/UploadInput may provide null (no file) or File; store wants { cvFile: File | "" }
  const onCvFileChange = (file: File | null) => {
    if (file) {
      handleCvFileChange({ cvFile: file });
    } else {
      // clear file in store when null is passed
      handleCvFileChange({ cvFile: "" });
    }
  };

  return (
    <div className="max-w-responsive mx-auto py-20">
      <FormTitle
        formTitle={translations.formTitle}
        formSubtitle={translations.formSubtitle}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        
        <div className="mt-4 mb-6 grid grid-cols-1 gap-x-6 gap-y-4 bg-whiteGold p-3 md:grid-cols-2 xl:grid-cols-3">
          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: 'firstName',
              lastName: 'lastName',
              email: 'email',
              phoneNumber: 'phoneNumber',
              jobPosition: 'jobPosition'
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

              jobPosition: translations.jobPosition,
              jobPositionRequired: translations.jobPositionRequired,
              jobPositionPlaceholder: translations.jobPositionPlaceholder,

              application: translations.application,
              applicationRequired: translations.applicationRequired,
              applicationPlaceholder: translations.applicationPlaceholder,
            }}
          />


          <div className="mt-2">
            <FileUpload name="cvFile" label={translations.choseFile} onChange={onCvFileChange}/>
          </div>
        </div>
        <div className="pb-4 md:mx-auto text-center">
          {/* <ButtonRefactor type="submit" text="Submit" /> */}
          <Button
            type="submit"
            bgColor="Primary"
            disabled={errorsList[0] ? true : false}
          />
        </div>
      </form>
      <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
    </div>
  );
}
