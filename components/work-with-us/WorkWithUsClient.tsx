'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { WorkWithUSFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import Input from '../common/form/Input';
import { initialWorkWithUSFormData } from '../../initials/initObjects';
import { submitWorkWithUsForm } from 'pages/api/work-with-us';
import { useSubmit } from 'stores/dataStore';
import Button from '../common/Button';
import Select from '../common/form/Select';
import { useFile } from 'stores/fileStore';
import UploadInput from '../common/UploadInput';
import Image from 'next/image';

interface Translations {
  workWithUS: {
    Professor: string;
    student: string;
    hiring: string;
    Internship: string;
    UniversityInternship: string;
    professionalConsultation: string;
    formTitle: string;
    PositionPlaceholder: string;
    contractPlaceholder: string;
    cvFileRequired: string;
    formSubtitleTop: string;
    formSubtitleBottom: string;
    email: string;
    emailRequired: string;
    emailPlaceholder: string;
    StudyField: string;
    StudyFieldRequired: string;
    StudyFieldPlaceholder: string;
    StudySubField: string;
    StudySubFieldRequired: string;
    StudySubFieldPlaceholder: string;
    cvFile: string;
  };
  universities: {
    unis: Record<string, string>;
    placeholder: string;
  };
  langLevel: {
    levels: Record<string, string>;
    placeholder: string;
  };
  firstName: string;
  firstNameRequired: string;
  firstNamePlaceholder: string;
  lastName: string;
  lastNameRequired: string;
  lastNamePlaceholder: string;
  phoneNumber: string;
  phoneNumberRequired: string;
  phoneNumberPlaceholder: string;
  phoneNumberErrorMessage: string;
  sendButton: string;
}

interface WorkWithUsClientProps {
  translations: Translations;
  lang: string;
}

export default function WorkWithUsClient({ translations }: WorkWithUsClientProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WorkWithUSFormData>({
    mode: 'onBlur',
    defaultValues: initialWorkWithUSFormData
  });

  const { workWithUS, universities, langLevel } = translations;

  const Positions = {
    Professor: workWithUS.Professor,
    Student: workWithUS.student
  } as const;

  const { cvFileState, handleCvFileChange } = useFile((s) => s);

  // Adapter: UploadInput expects (file: File) => void
  const onCvFileChange = (file: File) => {
    handleCvFileChange({ cvFile: file });
  };

  const PositionsItem = [Positions.Professor, Positions.Student];

  const PositionsData = PositionsItem.map((type: any) => ({
    value: type,
    label: type
  }));

  const [selectPosition, setSelectPosition] = useState('');

  const [cvFileRequired, setCvFileRequired] = useState('');

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectPosition(event.target.value);
    if (event.target.value == 'Professor') {
      setCvFileRequired(workWithUS.cvFileRequired);
    }
  };

  const handleUniChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectUni(event.target.value);
  };

  const TypeOfContractWithStudent = {
    Hiring: workWithUS.hiring,
    Internship: workWithUS.Internship,
    UniversityInternship: workWithUS.UniversityInternship
  } as const;

  const TypeOfContractWithProfessor = {
    Consultation: workWithUS.professionalConsultation
  } as const;

  const unis = universities;
  const langLevelData = langLevel;

  const unisList: any[] = []
  const skillLevels: any[] = []

  Object.entries(unis.unis).forEach(([name, value]) => {
    unisList.push(value);
    console.log(name);
  })

  Object.entries(langLevelData.levels).forEach(([name, value]) => {
    skillLevels.push(value);
    console.log(name);
  })

  const TypeOfUnis = unisList.map(
    (type: any) => ({
      value: type,
      label:type
    })
  )

  const TypeOfSkillLevels = skillLevels.map(
    (type: any) => ({
      value: type,
      label: type
    })
  )

  const TypeOfContractWithStudentItem = [
    TypeOfContractWithStudent.Hiring,
    TypeOfContractWithStudent.Internship,
    TypeOfContractWithStudent.UniversityInternship
  ];

  const TypeOfContractWithProfessorItem = [
    TypeOfContractWithProfessor.Consultation
  ];

  const TypeOfContractWithStudentData = TypeOfContractWithStudentItem.map(
    (type: any) => ({
      value: type,
      label: type
    })
  );

  const TypeOfContractWithProfessorData = TypeOfContractWithProfessorItem.map(
    (type: any) => ({
      value: type,
      label: type
    })
  );

  const [selectStudentContract, setSelectStudentContract] = useState('');
  const [selectProfessorContract, setSelectProfessorContract] = useState('');
  const [selectUni, setSelectUni] = useState(unis.placeholder);

  const handleContractWithStudentItemChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectStudentContract(event.target.value);
  };

  const handleContractWithProfessorItemChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectProfessorContract(event.target.value);
  };

  const { csrfToken, handleTokenChange, handleSubmitingChange, handleSendChange, handleNotifChange, handleSuccessChange
  } = useSubmit();

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }
    fetchCsrfToken();
  }, [handleTokenChange]);

  const onSubmit = async (formData: WorkWithUSFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    console.log(formData);
    console.log('ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');

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
    submitWorkWithUsForm(sendFormData, csrfToken)
      .then(() => {
        console.log(sendFormData)
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialWorkWithUSFormData); // Country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialWorkWithUSFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  return (
    <>
      <div className="container -m-4 mx-auto my-20 gap-y-0 px-5 font-barlow lg:p-20 flex flex-col items-center">
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex justify-center relative size-[200px] mt-6'>
            <Image src="/static/images/work-with-us/forough-logo.png" alt="Work with us" layout='fill'className='object-cover' />
          </div>
          <div className='flex justify-center relative w-[200px] h-[210px]'>
            <Image src="/static/images/work-with-us/farazaman-logo.png" alt="Work with us" layout='fill'className='object-cover' />
          </div>
        </div>
        <div className="py-10">
          <h3 className="text-center text-2xl md:text-3xl">
            {workWithUS.formTitle}
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
          <div className="grid grid-cols-1 gap-x-6 bg-whiteGold p-4 md:grid-cols-2 lg:grid-cols-3">
            <Select labelClass='' register={register} errors={errors} nameInput="your_position" label={workWithUS.PositionPlaceholder} required="" className="select select-bordered mt-4 w-full max-w-xs px-8 dark:text-current" placeholder={workWithUS.PositionPlaceholder} options={PositionsData} handleChange={handleItemChange} selected={selectPosition}
            />

            {selectPosition !== workWithUS.Professor ? (
              <Select labelClass='' register={register} errors={errors} nameInput="type_of_contract" label={workWithUS.contractPlaceholder} required="" className="select select-bordered mt-4 w-full max-w-xs px-8 dark:text-current" placeholder={workWithUS.contractPlaceholder} options={TypeOfContractWithStudentData} handleChange={handleContractWithStudentItemChange} selected={selectStudentContract}
              />
            ) : (
              <Select labelClass='' register={register} errors={errors} nameInput="type_of_contract" label={workWithUS.contractPlaceholder} required="" className="select select-bordered mt-4 w-full max-w-xs px-8 dark:text-current" placeholder={workWithUS.contractPlaceholder} options={TypeOfContractWithProfessorData} handleChange={handleContractWithProfessorItemChange} selected={selectProfessorContract}
              />
            )}

            <Select labelClass='' register={register} errors={errors} nameInput="uni" label={unis.placeholder} required="" className="select select-bordered mt-4 w-full max-w-xs px-8 dark:text-current" placeholder={unis.placeholder} options={TypeOfUnis} handleChange={handleUniChange} selected={selectUni}
            />
          </div>
          {/* next line */}
          <div className="border-b-2 border-black bg-whiteGold">
            <p className="px-5 py-3 text-2xl md:text-3xl">
              {workWithUS.formSubtitleTop}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 bg-whiteGold p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_first_name"
                type="text"
                label={translations.firstName}
                required={translations.firstNameRequired}
                placeholder={translations.firstNamePlaceholder}
                className="input  col-span-1 mb-1 mt-3 w-full"
                labelClass=" dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_last_name"
                type="text"
                label={translations.lastName}
                required={translations.lastNameRequired}
                placeholder={translations.lastNamePlaceholder}
                className="input  col-span-1 mb-1 mt-3 w-full"
                labelClass=" dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="email"
                type="text"
                label={workWithUS.email}
                required={workWithUS.emailRequired}
                patternValue=""
                patternMessage=""
                placeholder={workWithUS.emailPlaceholder}
                className="input  col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-md dark:placeholder-[#9CA3AF]"
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="phone_number"
                type="text"
                label={translations.phoneNumber}
                required={translations.phoneNumberRequired}
                patternValue="^[0-9]{11}$"
                patternMessage={translations.phoneNumberErrorMessage}
                placeholder={translations.phoneNumberPlaceholder}
                className="input  col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-md dark:placeholder-[#9CA3AF]"
              />
            </div>
          </div>
          {/* next line */}
          <div className="border-b-2 border-black bg-whiteGold">
            <p className="px-5 py-3 text-2xl md:text-3xl">
              {workWithUS.formSubtitleBottom}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 bg-whiteGold p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_field_of_study"
                type="text"
                label={workWithUS.StudyField}
                required={workWithUS.StudyFieldRequired}
                placeholder={workWithUS.StudyFieldPlaceholder}
                className="input  col-span-1 mb-1 mt-3 w-full"
                labelClass=" dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_subfield"
                type="text"
                label={workWithUS.StudySubField}
                required={workWithUS.StudySubFieldRequired}
                placeholder={workWithUS.StudySubFieldPlaceholder}
                className="input  col-span-1 mb-1 mt-3 w-full"
                labelClass=" dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>
            <div className="col-span-1 mt-2">
              <UploadInput
                title={workWithUS.cvFile}
                register={register}
                required={cvFileRequired}
                errors={errors}
                nameInput="cvFile"
                handleChange={onCvFileChange}
              />
            </div>

            <div className='col-span-1'>
              <Select labelClass='' register={register} errors={errors} nameInput="langLevel" label={langLevelData.placeholder} required="" className="select select-bordered mt-4 w-full px-8 shadow-sm dark:text-current" placeholder={langLevelData.placeholder} options={TypeOfSkillLevels} handleChange={handleUniChange} selected={langLevelData.placeholder}
              />
            </div>
          </div>
          <div className="mx-auto w-full pb-4 md:w-auto">
            <Button type="submit" bgColor="Primary" />
          </div>
        </form>
        <NotificationSendForm />
      </div>
    </>
  );
}