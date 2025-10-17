'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { JoinOurTeamFormData } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import { initialJoinOurTeamFormData } from '../../initials/initObjects';
import { submitJoinOurTeamForm } from '../../pages/api/jobs';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import Button from '@/components/common/Button';
import { useSubmit } from 'stores/dataStore';
import { useFile } from 'stores/fileStore';
import FormTitle from '@/components/common/form/FormTitle';
import FileUpload from '@/components/common/form/FileUpload';
import YesOrNoQuestion from '@/components/startups-form/YesOrNoQuestion';
import Input from '@/components/common/form/Input';
import Select from '@/components/common/form/Select';
import TextArea from '@/components/common/TextArea';
import { birthDateValidatorFactory } from '@/utils/birthDateValidatorFactory';

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

  FieldOfExpertOther: string;
  FieldOfExpertOtherRequired: string;
  FieldOfExpertOtherPlaceholder: string;

  title: string;
  yesLabel: string;
  noLabel: string;

  birthDate: string;
  birthDateRequired: string;
  birthDateErrorMessage: string;
  birthDateErrorMessageForFutureDate: string;
  birthDateErrorMessageForAge: string;
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
    reset,
    clearErrors,
    unregister, // <-- add this
  } = useForm<JoinOurTeamFormData>({
    mode: 'onBlur',
    defaultValues: initialJoinOurTeamFormData
  });

  const { csrfToken, handleTokenChange, handleSubmitingChange, handleSendChange, handleNotifChange, handleSuccessChange } = useSubmit();
  const { cvFileState, handleCvFileChange } = useFile();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const token = await GetCsrfToken(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`);
      if (!cancelled) handleTokenChange(token);
    })();
    return () => { cancelled = true; };
  }, [handleTokenChange]);

  const onSubmit = async (formData: JoinOurTeamFormData) => {
    handleSubmitingChange(true);
    handleSendChange(true);

    const sendFormData = new FormData();
    if (cvFileState.cvFile) sendFormData.append('cvFile', cvFileState.cvFile as File, (cvFileState.cvFile as File).name);

    Object.entries(formData).forEach(([k, v]) => {
      if (v == null) return;
      if (typeof v === 'object' && v[0]) sendFormData.append(k, v[0]);
      else sendFormData.append(k, String(v));
    });

    submitJoinOurTeamForm(sendFormData, csrfToken)
      .then((res) => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialJoinOurTeamFormData);
        handleCvFileChange({ cvFile: '' });
        setTimeout(() => handleNotifChange(false), 10000);
      })
      .catch((err) => {
        handleSuccessChange(false);
        handleNotifChange(true);
        handleSendChange(false);
        handleCvFileChange({ cvFile: '' });
        setTimeout(() => handleNotifChange(false), 10000);
        console.error(err);
      });
  };

  const onCvFileChange = (file: File | null) => handleCvFileChange({ cvFile: file ?? '' });

  const [fileCounterState, setFileCounter] = useState<boolean>(false);

  // toggle upload mode — clear errors for the optional group when enabling upload
  const setFileCounterAndClear = (v: boolean) => {
    setFileCounter(v);

    const fields: (keyof JoinOurTeamFormData)[] = ['birthDate', 'educationLevel', 'educationField', 'workHistorySummary'];

    if (v) {
      // when resume is uploaded we want these fields NOT validated also unregister them so validation rules are removed
      clearErrors(fields);
      unregister(fields);
      return;
    }

    clearErrors(fields);
    // re-register with the same rules used by the inputs
    register('educationLevel', { required: translations.EducationLevelsRequired || true });
    register('educationField', { required: translations.EducationFieldRequired || true });
    register('workHistorySummary', { required: translations.workHistorySummaryRequired || true });

    // register birthDate using the shared validator
    register('birthDate', { required: translations.birthDateRequired || true, validate: birthValidate });
  };

  const birthValidate = (value?: string) => {
    if (fileCounterState) return true;
    return birthDateValidatorFactory(14, {
      birthDateRequired: translations.birthDateRequired,
      birthDateErrorMessage: translations.birthDateErrorMessage,
      birthDateErrorMessageForFutureDate: translations.birthDateErrorMessageForFutureDate,
      birthDateErrorMessageForAge: translations.birthDateErrorMessageForAge
    })(value);
  };

  return (
    <div className="max-w-responsive mx-auto py-20">
      <FormTitle formTitle={translations.formTitle} formSubtitle={translations.formSubtitle} />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mt-4 mb-6 grid grid-cols-1 gap-x-6 gap-y-4 p-3 md:grid-cols-2 xl:grid-cols-3">
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
              FieldOfExpertData: translations.FieldOfExpertData,

              FieldOfExpertOther: translations.FieldOfExpertOther,
              FieldOfExpertOtherRequired: translations.FieldOfExpertOtherRequired,
              FieldOfExpertOtherPlaceholder: translations.FieldOfExpertOtherPlaceholder
            }}
          />
        </div>

        <div className="w-full flex flex-col p-3">
          <YesOrNoQuestion
            title={translations.title}
            yesLabel={translations.yesLabel}
            noLabel={translations.noLabel}
            value={fileCounterState}
            onChange={setFileCounterAndClear}
            name="fileCounter"
          />
          <div
            aria-hidden={!fileCounterState}
            className={`w-full md:max-w-lg 2xl:max-w-xl mt-2 mx-auto bg-whiteGold drop-shadow-md overflow-hidden transition-[max-height,opacity,transform,padding] duration-900 ease-out origin-top min-h-0
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
                  id="birthDate"
                  register={register}
                  errors={errors}
                  nameInput="birthDate"
                  type="date"
                  label={translations.birthDate}
                  required={!fileCounterState ? translations.birthDateRequired : ""}
                  patternValue="" // date input provides yyyy-mm-dd, pattern not needed
                  patternMessage={translations.birthDateErrorMessage}
                  placeholder={translations.birthDatePlaceholder}
                  className="input"
                  labelClass=""
                  validate={birthValidate}
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
                  id="educationField"
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
              maxLength={1450}
              maxLengthMessage={translations.workHistorySummaryErrorMessage}
              validate=""
            />
          </div>


        </div>

        <div className="pt-16 pb-4 md:mx-auto text-center">
          {/* <ButtonRefactor type="submit" text="Submit" /> */}
          <Button
            type="submit"
            bgColor="Primary"
            disabled={Object.keys(errors).length > 0}
          />
        </div>
      </form>
      <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
    </div>
  );
}
