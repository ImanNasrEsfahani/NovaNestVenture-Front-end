import * as React from 'react';
import TextArea from '@/components/common/TextArea';
import { getServerTranslation } from 'app/i18n';


export default function StartupFormIdea({
  register,
  errors,
  lang
}: {
  register: any;
  errors: any;
  lang: string;
}) {

  const { t } = getServerTranslation(lang, 'formComponent');
  
  return (
    <>
      <p className='mt-4 mb-6'>{t('startUp',{ returnObjects: true }).idea.description}</p>
      <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">

        <TextArea
          title={t('startUp',{ returnObjects: true }).idea.ideaExplanation}
          register={register}
          errors={errors}
          placeholder={t('startUp',{ returnObjects: true }).idea.ideaExplanationPlaceholder}
          nameTextArea="ideaExplanation"
          patternMessage=""
          patternValue=""
          required={t('startUp',{ returnObjects: true }).idea.ideaExplanationRequired}
          maxLength={1450}
          maxLengthMessage={t('startUp',{ returnObjects: true }).idea.ideaExplanationErrorMessage}
          validate=""
        />
      </div>
    </>
  );
}
