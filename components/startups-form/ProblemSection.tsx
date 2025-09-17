import React, { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';
import ChevDown from 'public/static/logos/ChevDown';
import TextArea from '@/components/common/TextArea';

type ProblemsSectionProps = {
  title: string;
  textAreaTitle: string;
  textAreaRequired: string;
  textAreaPlaceholder: string;
  register: UseFormRegister<StartupsFormData>;
  errors: FieldErrors<StartupsFormData>;
  nameTextArea?: string;
};

const ProblemsSection = ({
  title,
  textAreaTitle,
  textAreaRequired,
  textAreaPlaceholder,
  register,
  errors,
  nameTextArea = "customerProblem"
}: ProblemsSectionProps) => {
  const [problemsOpen, setProblemsOpen] = useState<boolean>(false);

  return (
    <>
      <div 
        className={`w-full h-auto cursor-pointer py-6 my-4 ${
          problemsOpen ? "bg-grayCheckBox" : "bg-grayDark"
        }`} 
        onClick={() => setProblemsOpen(!problemsOpen)}
      >
        <div className='w-full h-auto flex justify-center items-center gap-2'>
          <p className='font-barlow text-white text-3xl'>{title}</p>
          <div className={`${problemsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
            <ChevDown />
          </div>
        </div>
      </div>
      {problemsOpen && (
        <div className='w-full h-auto md:px-1'>
          <TextArea
            title={textAreaTitle}
            register={register}
            errors={errors} 
            required={textAreaRequired}
            nameTextArea={nameTextArea} 
            patternValue={''} 
            patternMessage={''} 
            placeholder={textAreaPlaceholder}                                                  
          />
        </div>
      )}
    </>
  );
};

export default ProblemsSection;