'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { JoinOurTeamFormData } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import { initialJoinOurTeamFormData } from '../../initials/initObjects';
import { submitJoinOurTeamForm } from '../../pages/api/jobs';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
// import ButtonRefactor from '@/components/common/ButtonRefactor';
import Button from '@/components/common/Button';
import { useSubmit } from 'stores/dataStore';
import { useFile } from 'stores/fileStore';
import FormTitle from '@/components/common/form/FormTitle';
import FileUpload from '@/components/common/form/FileUpload';

import YesOrNoQuestion from '@/components/startups-form/YesOrNoQuestion';
import Input from '@/components/common/form/Input';
import Select from '@/components/common/form/Select';
import TextArea from '@/components/common/TextArea';


interface Translations {

  formTitle: string;
  formSubtitle: string;
  resumeFile: string;
  successMessage: string;
  failedMessage: string;
  choseFile: string;

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

  title: string;
  yesLabel: string;
  noLabel: string;

  birthDate: string;
  birthDateRequired: string;
  birthDateErrorMessage: string;
  birthDatePlaceholder: string;

  EducationLevels: string;
  EducationLevelsRequired: string;
  EducationLevelsErrorMessage: string;
  EducationLevelsPlaceholder: string;

  EducationField: string;
  EducationFieldRequired: string;
  EducationFieldErrorMessage: string;
  EducationFieldPlaceholder: string;

  workHistorySummary: string;
  workHistorySummaryRequired: string;
  workHistorySummaryErrorMessage: string;
  workHistorySummaryPlaceholder: string;

  EducationLevelsData: { value: string; label: string }[];
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
  } = useForm<JoinOurTeamFormData>({
    mode: 'onBlur',
    defaultValues: initialJoinOurTeamFormData
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

  const onSubmit = async (formData: JoinOurTeamFormData) => {
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
    submitJoinOurTeamForm(sendFormData, csrfToken)
      .then((response) => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialJoinOurTeamFormData); // Country does not reset

        // clear file in central store so FileUpload clears too
        handleCvFileChange({ cvFile: "" });

        console.log(response);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch((error) => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);

        // clear file in store on error as well (optional)
        handleCvFileChange({ cvFile: "" });

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

  const [fileCounterState, setFileCounter] = useState<boolean>(false);

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
              countryOfResidence: 'countryOfResidence',
              provinceOfResidence: '',
              cityOfResidence: 'cityOfResidence',
              TypeOfCollaboration: 'TypeOfCollaboration'
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
        </div>

        <div className="w-full flex flex-col">
          <YesOrNoQuestion
            title={translations.title}
            yesLabel={translations.yesLabel}
            noLabel={translations.noLabel}
            value={fileCounterState}
            onChange={setFileCounter}
            name="fileCounter"
          />
          <div
            aria-hidden={!fileCounterState}
            className={`w-full md:max-w-lg 2xl:max-w-xl mt-6 mx-auto bg-whiteGold drop-shadow-md overflow-hidden transition-[max-height,opacity,transform,padding] duration-700 ease-out origin-top min-h-0
              ${fileCounterState ? 'opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none'}`}
          >
            <div className="px-4">
              <FileUpload
                nameInput="cvFile"
                required={fileCounterState ? true : false}
                errors={errors}
                label={translations.choseFile}
                onChange={onCvFileChange}
                disabled={!fileCounterState}
                file={cvFileState.cvFile} // <-- sync external value
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden={fileCounterState}
          className={`w-full transition-[max-height,opacity,transform,padding] duration-700 ease-out origin-top min-h-0
              ${!fileCounterState ? 'max-h-[1200px] opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none'}`}
        >
          {/* disable native form controls while hidden to avoid focusable hidden elements */}
          <fieldset disabled={fileCounterState} className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-6">
              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="birthDate"
                  type="date"
                  label={translations.birthDate}
                  required={translations.birthDateRequired}
                  patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                  patternMessage={translations.birthDateErrorMessage}
                  placeholder={translations.birthDatePlaceholder}
                  className="input"
                  labelClass=""
                />
              </div>
              <div className="col-span-1">
                <Select
                  register={register}
                  errors={errors}
                  nameInput="educationLevel"
                  label={translations.EducationLevels}
                  required={!fileCounterState ? translations.EducationLevelsRequired : ''}
                  labelClass=""
                  className="input"
                  placeholder={translations.EducationLevelsPlaceholder}
                  options={translations.EducationLevelsData}
                />
              </div>

              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="educationField"
                  type="text"
                  label={translations.EducationField}
                  required={!fileCounterState ? translations.EducationFieldRequired : ''}
                  placeholder={translations.EducationFieldPlaceholder}
                  className="input"
                  labelClass=""
                  patternValue=""
                  patternMessage=""
                />
              </div>
            </div>
          </fieldset>

          <div className="flex flex-col w-full">
            <TextArea
              title={translations.workHistorySummary}
              register={register}
              errors={errors}
              placeholder={translations.workHistorySummaryPlaceholder}
              nameTextArea="workHistorySummary"
              patternMessage=""
              patternValue=""
              required=""
              rows={8}
            />
          </div>


        </div>

        <div className="pt-16 pb-4 md:mx-auto text-center">
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
