'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { WorkWithUSFormData } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import { initialWorkWithUSFormData } from '../../initials/initObjects';
import { submitWorkWithUsForm } from 'pages/api/work-with-us';
import { useSubmit } from 'stores/dataStore';
import Button from '@/components/common/Button';
import { useFile } from 'stores/fileStore';
import Image from 'next/image';
import { WorkWithUsClientProps } from '@/types/global';
import PersonalInfoSection from '@/components/work-with-us/sections/PersonalInfoSection';
import AcademicInfoSection from '@/components/work-with-us/sections/AcademicInfoSection';

export default function WorkWithUsClient({ translations, lang }: WorkWithUsClientProps) {
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
            <PersonalInfoSection
              register={register}
              errors={errors}
              workWithUS={workWithUS}
              translations={translations}
              unis={unis}
              PositionsData={PositionsData}
              TypeOfContractWithStudentData={TypeOfContractWithStudentData}
              TypeOfContractWithProfessorData={TypeOfContractWithProfessorData}
              TypeOfUnis={TypeOfUnis}
              selectPosition={selectPosition}
              selectStudentContract={selectStudentContract}
              selectProfessorContract={selectProfessorContract}
              selectUni={selectUni}
              handleItemChange={handleItemChange}
              handleContractWithStudentItemChange={handleContractWithStudentItemChange}
              handleContractWithProfessorItemChange={handleContractWithProfessorItemChange}
              handleUniChange={handleUniChange}
          />
          {/* next line */}
          <div className="border-b-2 border-black bg-whiteGold">
            <p className="px-5 py-3 text-2xl md:text-3xl">
              {workWithUS.formSubtitleBottom}
            </p>
          </div>
          <AcademicInfoSection
            register={register}
            errors={errors}
            workWithUS={workWithUS}
            langLevelData={langLevelData}
            TypeOfSkillLevels={TypeOfSkillLevels}
            cvFileRequired={cvFileRequired}
            onCvFileChange={onCvFileChange}
            handleUniChange={handleUniChange}
          />
          <div className="mx-auto w-full pb-4 md:w-auto">
            <Button type="submit" bgColor="Primary" />
          </div>
        </form>
      <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
      </div>
    </>
  );
}