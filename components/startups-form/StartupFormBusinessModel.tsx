import * as React from 'react';
import UploadInput from '../common/UploadInput';
import TextArea from '../common/TextArea';
import { getServerTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default function StartupFormBusinessModel({
  register,
  errors,
  handleFinancialFileChange
}: {
  register: any;
  errors: any;
  handleFinancialFileChange: any;
}) {
  const { lang } = useLang((s) => s )
  const { t } = await getServerTranslation(lang, 'formComponent');

  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
              {t('startUp', { returnObjects: true }).businessModel.title}
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>
          <div></div>
          <TextArea
            title={
              t('startUp', { returnObjects: true }).businessModel
                .monetizationOfYourPlan
            }
            register={register}
            errors={errors}
            placeholder={
              t('startUp', { returnObjects: true }).businessModel
                .monetizationOfYourPlanPlaceholder
            }
            nameTextArea="monetizationOfYourPlan"
            patternMessage=""
            patternValue=""
            required={
              t('startUp', { returnObjects: true }).businessModel
                .monetizationOfYourPlanRequired
            }
          />
        </div>
        <div className="col-span-2 mb-4 flex flex-col items-start gap-4">
          <TextArea
            title={
              t('startUp', { returnObjects: true }).businessModel
                .structureOfYourSales
            }
            register={register}
            errors={errors}
            placeholder={
              t('startUp', { returnObjects: true }).businessModel
                .structureOfYourSalesPlaceholder
            }
            nameTextArea="structureOfYourSales"
            patternMessage=""
            patternValue=""
            required={
              t('startUp', { returnObjects: true }).businessModel
                .structureOfYourSalesRequired
            }
          />

          <div>
          <UploadInput
          title={
            t('startUp', { returnObjects: true }).businessModel.financialPlan
          }
          register={register}
          errors={errors}
          nameInput="financial plan"
          handleChange={handleFinancialFileChange}
          />
          </div>
        </div>
        {/* <Input
          register={register}
          errors={errors}
        /> */}
        {/* <div className="col-start-1 col-span-1">
          <label className="text-[#6b6b6b] dark:text-current">If your plan has a financial model, please upload</label>
          <div className='flex justify-center'>
            <input
              type="file"
              className="bg-[#f9f6f3] dark:bg-[#1D232A] mt-3 p-5 w-full rounded-lg"
              {...register('financialFile', {
                required: '',
              })}
              onChange={handleFinancialFileChange} // must use onChange event handler after register
            />
          </div>
        </div> */}
        <div className="col-span-2 col-start-1">
          <TextArea
            title={
              t('startUp', { returnObjects: true }).cooperatedWithInvestors
            }
            register={register}
            errors={errors}
            placeholder={
              t('startUp', { returnObjects: true })
                .cooperatedWithInvestorsPlaceholder
            }
            nameTextArea="cooperatedWithInvestors"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div>
        <div className="col-span-2">
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
      </div>
    </>
  );
}
