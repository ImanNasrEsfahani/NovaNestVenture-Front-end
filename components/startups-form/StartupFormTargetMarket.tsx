import TextArea from '../common/TextArea';
import { getServerTranslation } from 'app/i18n';

export default async function StartupFormTargetMarket({
  lang,
  register,
  errors
}:{
  lang:string;
  register:any;
  errors:any;
}) {

  const { t } = await getServerTranslation(lang, 'formComponent');

  return (
    <>
     <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
            {t('startUp', { returnObjects: true }).targetMarket.title}
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>
        <TextArea
          title={t('startUp', { returnObjects: true }).targetMarket.customerCharacteristic}
          register={register}
          errors={errors}
          placeholder={t('startUp', { returnObjects: true }).targetMarket.customerCharacteristicPlaceholder}
          nameTextArea="customerCharacteristic"
          patternMessage=""
          patternValue=""
          required={t('startUp', { returnObjects: true }).targetMarket.customerCharacteristicRequired}
        />
        </div>
        <div className="col-span-2">
          <TextArea
            title={t('startUp', { returnObjects: true }).targetMarket.currentCustomers}
            register={register}
            errors={errors}
            placeholder={t('startUp', { returnObjects: true }).targetMarket.currentCustomersPlaceholder}
            nameTextArea="currentCustomers"
            patternMessage=""
            patternValue=""
            required={t('startUp', { returnObjects: true }).targetMarket.currentCustomersRequired}
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title={t('startUp', { returnObjects: true }).targetMarket.estimatedMarketSize}
            register={register}
            errors={errors}
            placeholder={t('startUp', { returnObjects: true }).targetMarket.estimatedMarketSizePlaceholder}
            nameTextArea="estimatedMarketSize"
            patternMessage=""
            patternValue=""
            required={t('startUp', { returnObjects: true }).targetMarket.estimatedMarketSizeRequired}
          />
        </div>
        {/* <div className="col-span-2">
          <TextArea
            title="How much is the total (TAM market accessible serviceable) (SAM market accessible) (SOM market addressable)?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="totalTamSamSom"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div> */}

      </div>
    </>
  );
}
