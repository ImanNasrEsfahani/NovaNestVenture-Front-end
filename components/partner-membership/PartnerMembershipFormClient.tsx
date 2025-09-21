'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/form/Input';
import { PartnerMembershipFormData } from '@/types/global';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import TextArea from '@/components/common/TextArea';
// import GetCsrfToken from '@/utils/get-csrf-token';
import { initialPartnerMembershipFormData } from '../../initials/initObjects';
import { submitPartnerMembershipForm } from '../../pages/api/partner-membership';
import PersonalInfoInput from '@/components/common/form/PersonalInfoInput';
import { useSubmit } from 'stores/dataStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import FormTitle from '@/components/common/form/FormTitle';
import CountryInput from '@/components/common/form/CountryInput';
import { getServerTranslation } from 'app/i18n';

interface Translations {
  formTitle: string;
  formSubtitle: string;
  birthDate: string;
  birthDateErrorMessage: string;
  birthDatePlaceholder: string;
  companyName: string;
  companyNameRequired: string;
  companyNamePlaceholder: string;
  investmentCeiling: string;
  investmentCeilingRequired: string;
  investmentCeilingPlaceholder: string;
  howDidYouKnowUs: string;
  howDidYouKnowUsPlaceholder: string;
  howDidYouKnowUsRequired: string;
  sendButton: string;
  successMessage: string;
  failedMessage: string;
  
  countries: string[];
  countryName: string;
  countryNameRequired: string;
  countryNamePlaceholder: string;
  provinceOfResidence: string;
  provinceOfResidenceRequired: string;
  provinceOfResidencePlaceholder: string;
}

interface PartnerMembershipFormClientProps {
  lang: string;
  translations: Translations;
}

export default function PartnerMembershipFormClient({ lang, translations }: PartnerMembershipFormClientProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PartnerMembershipFormData>({
    mode: 'onBlur',
    defaultValues: initialPartnerMembershipFormData
  });

  const { t } = getServerTranslation(lang, 'formComponent');

  const {
    // csrfToken,
    // handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  // useEffect(() => {
  //   async function fetchCsrfToken() {
  //     const token = await GetCsrfToken(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
  //     );
  //     handleTokenChange(token);
  //   }

  //   fetchCsrfToken();
  // }, []);

  const onSubmit = async (formData: PartnerMembershipFormData) => {
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
    submitPartnerMembershipForm(sendFormData)
      .then((response) => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialPartnerMembershipFormData); // Country does not reset

        console.log(response);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialPartnerMembershipFormData);
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
    <div className="max-w-responsive mx-auto py-20">
      <div className='mb-12'>
        <FormTitle
          formTitle={translations.formTitle}
          formSubtitle={translations.formSubtitle}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 grid grid-cols-1 gap-x-6 mt-20  md:grid-cols-2 xl:grid-cols-3">
          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: 'firstName',
              lastName: 'lastName',
              email: 'email',
              phoneNumber: 'phoneNumber',
              jobPosition: ''
            }}
            noLabel={false}
            translations={{
              INTERN: t('INTERN'),
              EMPLOYEE: t('EMPLOYEE'),

              Developer: t('Developer'),
              Marketing: t('Marketing'),
              Graphist: t('Graphist'),
              Immigration: t('Immigration'),
              Accountant: t('Accountant'),
              Administrative: t('Administrative'),

              firstName: t('firstName'),
              firstNameRequired: t('firstNameRequired'),
              firstNamePlaceholder: t('firstNamePlaceholder'),

              lastName: t('lastName'),
              lastNameRequired: t('lastNameRequired'),
              lastNamePlaceholder: t('lastNamePlaceholder'),
              
              email: t('email'),
              emailRequired: t('emailRequired'),
              emailErrorMessage: t('emailErrorMessage'),
              emailPlaceholder: t('emailPlaceholder'),

              phoneNumber: t('phoneNumber'),
              phoneNumberRequired: t('phoneNumberRequired'),
              phoneNumberErrorMessage: t('phoneNumberErrorMessage'),
              phoneNumberPlaceholder: t('phoneNumberPlaceholder'),

              jobPosition: t('jobPosition'),
              jobPositionRequired: t('jobPositionRequired'),
              jobPositionPlaceholder: t('jobPositionPlaceholder'),

              application: t('application'),
              applicationRequired: t('applicationRequired'),
              applicationPlaceholder: t('applicationPlaceholder'),
            }}
          />

          {/* <Input
            register={register}
            errors={errors}
            nameInput="birthDate"
            type="date"
            label={translations.birthDate}
            required={''}
            patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
            patternMessage={translations.birthDateErrorMessage}
            placeholder={translations.birthDatePlaceholder}
            className="input col-span-1 mb-1 mt-3 w-full "
            labelClass="dark:text-current"
          /> */}

          <CountryInput
            countries={translations.countries}
            countryName={translations.countryName}
            countryNameRequired={translations.countryNameRequired}
            countryNamePlaceholder={translations.countryNamePlaceholder}
            provinceOfResidence={translations.provinceOfResidence}
            provinceOfResidenceRequired={translations.provinceOfResidenceRequired}
            provinceOfResidencePlaceholder={translations.provinceOfResidencePlaceholder}
            lang={lang}
            errors={errors}
            nameInputs={{
                countryOfResidence: 'countryOfResidence',
                provinceOfResidence: ''
            }}
            register={register}
          />

          {/* <Input
            register={register}
            errors={errors}
            nameInput="companyName"
            type="text"
            label={translations.companyName}
            required={translations.companyNameRequired}
            placeholder={translations.companyNamePlaceholder}
            className="input col-span-1 mb-1 mt-3 w-full"
            labelClass="dark:text-current"
            patternValue=""
            patternMessage=""
          /> */}

          <Input
            register={register}
            errors={errors}
            nameInput="investmentCeiling"
            type="text"
            label={translations.investmentCeiling}
            // required={translations.investmentCeilingRequired}
            required=""
            placeholder={translations.investmentCeilingPlaceholder}
            className="input col-span-1 mb-1 mt-3 w-full"
            labelClass=" dark:text-current"
            patternValue=""
            patternMessage=""
          />

          <div className="flex flex-col col-span-1 md:col-span-3 gap-6">
            <TextArea
              title={translations.howDidYouKnowUs}
              register={register}
              errors={errors}
              placeholder={translations.howDidYouKnowUsPlaceholder}
              nameTextArea="howDidYouKnowUs"
              patternMessage=""
              patternValue=""
              // required={translations.howDidYouKnowUsRequired}
              required=""
              rows={3}
            />
          </div>
        </div>
        <div className="mx-auto w-44 pb-4 md:w-52 mt-20">
          <ButtonRefactor
            type="submit"
            text={translations.sendButton}
            disabled={errorsList[0] ? true : false}
          />
        </div>
      </form>
      <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
    </div>
  );
}
