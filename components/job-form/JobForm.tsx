'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import UploadInput from '../common/UploadInput';
import { JobFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../..//utils/get-csrf-token';
import { initialJobFormData } from '../../initials/initObjects';
import { submitApplyJobForm } from '../../pages/api/jobs';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
import { getServerTranslation } from 'app/i18n/client';
// import ButtonRefactor from '../common/ButtonRefactor';
import Button from '../common/Button';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import { useFile } from 'stores/fileStore';
import FormTitle from '../common/form/FormTitle';

export default function JobForm() {
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

  const lang = useLang().lang;

  const { t } = getServerTranslation(lang, 'formComponent');

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
  }, []);

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
    <div className="container -m-4 mx-auto my-20 gap-y-0 px-5 font-barlow lg:p-20">
      <>
        {/* <div className="text-center">
                <p className="mb-20 font-serif text-2xl tracking-wide">
                  {t('jobForm', { returnObjects: true }).formTitle}
                </p>
              </div>
              <div>
                <p className="mb-4 text-4xl">
                  {t('jobForm', { returnObjects: true }).formSubtitle}
                </p>
              </div>
              <div>
                <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
              </div> */}
      </>
      <FormTitle formName="jobForm" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        
        <div className="mb-6 grid grid-cols-1 gap-x-6 gap-y-4 bg-whiteGold p-3 md:grid-cols-2 lg:grid-cols-3">
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
          />


          <div className="mt-2">
            <UploadInput
              title={t('jobForm', { returnObjects: true }).resumeFile}
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
      <NotificationSendForm />
    </div>
  );
}
