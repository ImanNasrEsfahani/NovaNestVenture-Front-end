import * as React from 'react';
import TextArea from '../common/TextArea';
import { getServerTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default function StartupFormProblem({
  register,
  errors
}:{
  register:any;
  errors:any;
}) {
  const { lang } = useLang((s) => s)
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <>
  <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
            {t('startUp',{ returnObjects: true }).problems.title}
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>
        
          <TextArea
            title={t('startUp',{ returnObjects: true }).problems.customerProblem}
            register={register}
            errors={errors}
            placeholder={t('startUp',{ returnObjects: true }).problems.customerProblemPlaceholder}
            nameTextArea="customerProblem"
            patternMessage=""
            patternValue=""
            required={t('startUp',{ returnObjects: true }).problems.customerProblemRequired}
          />
        </div>

      </div>
    </>
  );
}
