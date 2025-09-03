import * as React from 'react';
import TextArea from '../common/TextArea';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';


export default function StartupFormIdea({
  register,
  errors
}: {
  register: any;
  errors: any;
}) {
  const { lang } = useLang((s) => s);
  const { t } = useTranslation(lang, 'formComponent');
  return (
    <>
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
        />
        <TextArea
          title={t('howDidYouKnowUs')}
          register={register}
          errors={errors}
          placeholder={t('howDidYouKnowUsPlaceholder')}
          nameTextArea="getToKnowUs"
          patternMessage=""
          patternValue=""
          required={t('howDidYouKnowUsRequired')}
        />
      </div>
    </>
  );
}
