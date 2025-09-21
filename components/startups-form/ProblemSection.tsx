import React, { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';
import TextArea from '@/components/common/TextArea';
import CollapsibleHeader from '@/components/startups-form/CollapsibleHeader';

type Props = {
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
}: Props) => {
  const [problemsOpen, setProblemsOpen] = useState<boolean>(false);

const handleToggle = () => {
  console.log('Toggle clicked, current state:', problemsOpen);
  setProblemsOpen(!problemsOpen);
};

  return (
    <>
      <CollapsibleHeader
        title={title}
        isOpen={problemsOpen}
        onToggle={handleToggle}
      />
      
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