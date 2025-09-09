'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InvestorRegistrationFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import { initialInvestorRegistrationFormData } from '../../initials/initObjects';
import { submitInvestorRegistrationForm } from '../../pages/api/investor-registration';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
import { getServerTranslation } from 'app/i18n';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '../common/ButtonRefactor';
import Input from '../common/form/Input';
import LandaLogo from '../icons/common/LandaLogo';
import CountryInput from '../common/form/CountryInput';

export default async function InvestorRegistrationForm({lang }: {lang: string}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InvestorRegistrationFormData>({
    mode: 'onBlur',
    defaultValues: initialInvestorRegistrationFormData
  });

  const {
    // csrfToken,
    // handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  const { t } = await getServerTranslation(lang, 'formComponent');

  // useEffect(() => {
  //   async function fetchCsrfToken() {
  //     const token = await GetCsrfToken(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
  //     );
  //     handleTokenChange(token);
  //   }

  //   fetchCsrfToken();
  // }, []);

  const onSubmit = async (formData: InvestorRegistrationFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Send the form data to the API.
    submitInvestorRegistrationForm(sendFormData)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialInvestorRegistrationFormData); // Country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialInvestorRegistrationFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  return (
    <>
      <div className="container relative -m-4 mx-auto gap-y-0 px-5 font-barlow lg:p-20">
        <div className="hidden md:inline absolute right-0 bottom-4 -z-10">
          <LandaLogo />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col bg-[#F8F5F0B2] pb-32">
            <div className="w-full h-auto pt-8 ">
              <div className="w-10/12 mx-auto h-auto flex flex-col gap-12">
                <div className="w-full h-auto flex flex-row justify-center">
                  <p className="text-black font-header font-medium text-xl md:text-[64px] md:leading-[75px]">
                    {t('investorForm', { returnObjects: true }).formTitle}
                  </p>
                </div>
                <div className="w-full border-b-[1.5px] py-5 border-black h-auto flex flex-row justify-start">
                  <p className="text-black font-barlow font-medium text-[30px] leading-[42px]">
                    {t('investorForm', { returnObjects: true }).formSubtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-10/12 mx-auto mb-6 grid grid-cols-1 gap-x-6 mt-20 md:grid-cols-2 lg:grid-cols-3">
              <PersonalInfoInput
                register={register}
                errors={errors}
                nameInputs={{
                  firstName: 'firstName',
                  lastName: 'lastName',
                  email: 'email',
                  phoneNumber: '',
                  jobPosition: ''
                }}
              />
              <Input
                register={register}
                errors={errors}
                nameInput="birthDate"
                type="date"
                label={t('birthDate')}
                required={''}
                patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                patternMessage={t('birthDateErrorMessage')}
                placeholder={t('birthDatePlaceholder')}
                className="input col-span-1 mb-1 mt-3 w-full "
                labelClass="dark:text-current"
              />

              <CountryInput
                errors={errors}
                nameInput="countryOfResidence"
                register={register}
              />

              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="companyName"
                  type="text"
                  label={t('companyName')}
                  required={t('companyNameRequired')}
                  placeholder={t('companyNamePlaceholder')}
                  className="input col-span-1 mb-1 mt-3 w-full"
                  labelClass="dark:text-current"
                  patternValue=""
                  patternMessage=""
                />
              </div>

              <div className="col-span-1">
                <Input
                  register={register}
                  errors={errors}
                  nameInput="investmentCeiling"
                  type="text"
                  label={t('maximumInvestment')}
                  required={t('maximumInvestmentRequired')}
                  placeholder={t('maximumInvestmentPlaceholder')}
                  className="input col-span-1 mb-1 mt-3 w-full"
                  labelClass=" dark:text-current"
                  patternValue=""
                  patternMessage=""
                />
              </div>

              <div className="flex flex-col col-span-1 md:col-span-3 gap-6">
                <TextArea
                  title={t('preferredAreas')}
                  register={register}
                  errors={errors}
                  placeholder={t('preferredAreasPlaceholder')}
                  nameTextArea="preferredAreas"
                  patternMessage=""
                  patternValue=""
                  required={t('preferredAreasRequired')}
                  rows={1}
                />

                <TextArea
                  title={t('howDidYouKnowUs')}
                  register={register}
                  errors={errors}
                  placeholder={t('howDidYouKnowUsPlaceholder')}
                  nameTextArea="howDidYouKnowUs"
                  patternMessage=""
                  patternValue=""
                  required={t('howDidYouKnowUsRequired')}
                  rows={1}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto w-44 pb-4 md:w-52 mt-20">
            <ButtonRefactor
              type="submit"
              text={t('sendButton')}
              disabled={errorsList[0] ? true : false}
            />
          </div>
        </form>
        <NotificationSendForm lang={lang} />
      </div>
    </>
  );
}
