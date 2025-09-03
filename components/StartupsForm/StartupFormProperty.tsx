import TextArea from '../common/TextArea';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function StartupFormProperty({
  register,
  errors
}: {
  register: any;
  errors: any;
}) {
  const { lang } = useLang((s) => s)
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
            {t('startUp', { returnObjects: true }).property.title}
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>

          <TextArea
            title={t('startUp', { returnObjects: true }).property.startupRevenue}
            register={register}
            errors={errors}
            placeholder={t('startUp', { returnObjects: true }).property.startupRevenuePlaceholder}
            nameTextArea="startupRevenue"
            patternMessage=""
            patternValue=""
            required={t('startUp', { returnObjects: true }).property.startupRevenueRequired}
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title={t('startUp', { returnObjects: true }).property.monthlyIncome}
            register={register}
            errors={errors}
            placeholder={t('startUp', { returnObjects: true }).property.monthlyIncomePlaceholder}
            nameTextArea="monthlyIncome"
            patternMessage=""
            patternValue=""
            required={t('startUp', { returnObjects: true }).property.monthlyIncomeRequired}
          />
        </div>

        <div className="col-span-2">
          <TextArea
            title={t('startUp', { returnObjects: true }).property.currentRaisedFunding}
            register={register}
            errors={errors}
            placeholder={t('startUp', { returnObjects: true }).property.currentRaisedFundingPlaceholder}
            nameTextArea="currentRaisedFunding"
            patternMessage=""
            patternValue=""
            required={t('startUp', { returnObjects: true }).property.currentRaisedFundingRequired}
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title={t('startUp', { returnObjects: true }).property.neededCapital}
            register={register}
            errors={errors}
            placeholder={t('startUp', { returnObjects: true }).property.neededCapitalPlaceholder}
            nameTextArea="neededCapital"
            patternMessage=""
            patternValue=""
            required={t('startUp', { returnObjects: true }).property.neededCapitalRequired}
          />
        </div>
      </div>
    </>
  );
}
