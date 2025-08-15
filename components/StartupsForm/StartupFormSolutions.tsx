import TextArea from '../common/TextArea';
import RadioButtonGroup from '../common/RadioButtonGroup';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function StartupFormSolutions({
  register,
  errors
}:{
  register:any;
  errors:any;
}){
  const { lang } = useLang((s) => s)
  const { t } = useTranslation(lang, 'formComponent');
  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
            {t('startUp',{ returnObjects: true }).solutions.title}
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>
          <TextArea
            title={t('startUp',{ returnObjects: true }).solutions.solution}
            register={register}
            errors={errors}
            placeholder={t('startUp',{ returnObjects: true }).solutions.solutionPlaceholder}
            nameTextArea="solution"
            patternMessage=""
            patternValue=""
            required={t('startUp',{ returnObjects: true }).solutions.solutionRequired}
          />
        </div>
        <div className="col-span-2">
          {/* options in farsi doesn't work */}
          <RadioButtonGroup
            title={t('startUp',{ returnObjects: true }).solutions.productLevel}
            options={t('startUp.radioButtonGroup',{ returnObjects: true })}
            register={register}
            errors={errors}
            required={t('startUp',{ returnObjects: true }).solutions.productLevelRequired}
            nameRadioButton="productLevel"
          />
        </div>
        <div className="col-span-2 mt-2">
          <TextArea
            title={t('startUp',{ returnObjects: true }).solutions.scalable}
            register={register}
            errors={errors}
            placeholder={t('startUp',{ returnObjects: true }).solutions.scalablePlaceholder}
            nameTextArea="scalable"
            patternMessage=""
            patternValue=""
            required={t('startUp',{ returnObjects: true }).solutions.scalableRequired}
          />
        </div>
      </div>
    </>
  );
}
