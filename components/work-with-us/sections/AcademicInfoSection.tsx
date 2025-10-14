'use client';
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { WorkWithUSFormData } from '@/types/global';
import Input from '@/components/common/form/Input';
import Select from '@/components/common/form/Select';
import UploadInput from '@/components/common/UploadInput';

interface AcademicInfoSectionProps {
  register: UseFormRegister<WorkWithUSFormData>;
  errors: FieldErrors<WorkWithUSFormData>;
  workWithUS: any;
  langLevelData: any;
  TypeOfSkillLevels: { value: string; label: string }[];
  cvFileRequired: string;
  onCvFileChange: (file: File) => void;
  handleUniChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AcademicInfoSection({
  register,
  errors,
  workWithUS,
  langLevelData,
  TypeOfSkillLevels,
  cvFileRequired,
  onCvFileChange,
  handleUniChange
}: AcademicInfoSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 bg-whiteGold p-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-1">
        <Input
          id="your_field_of_study"
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
          id="your_subfield"
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
        <Select 
          labelClass='' 
          register={register} 
          errors={errors} 
          nameInput="langLevel" 
          label={langLevelData.placeholder} 
          required="" 
          className="select select-bordered mt-4 w-full px-8 shadow-sm dark:text-current" 
          placeholder={langLevelData.placeholder} 
          options={TypeOfSkillLevels} 
          handleChange={handleUniChange} 
          selected={langLevelData.placeholder}
        />
      </div>
    </div>
  );
}