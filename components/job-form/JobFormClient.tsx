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
import { getServerTranslation } from 'app/i18n';

interface Translations {
  formTitle: string;
  formSubtitle: string;
  resumeFile: string;
  successMessage: string;
  failedMessage: string;
}

interface JobFormClientProps {
  lang: string;
  translations: Translations;
}

export default function JobFormClient({ lang, translations }: JobFormClientProps) {

  const { t } = getServerTranslation(lang, 'formComponent');

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

  // Adapter: UploadInput expects (file: File) => void but store wants { cvFile: File | "" }
  const onCvFileChange = (file: File) => {
    handleCvFileChange({ cvFile: file });
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


          <div className="mt-2">
            <UploadInput
              title={translations.resumeFile}
              register={register}
              errors={errors}
              handleChange={onCvFileChange}
              nameInput="cvFile"
              required
            />
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
