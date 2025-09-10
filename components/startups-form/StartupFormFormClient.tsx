'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StartupsFormData } from '@/types/global';
import { initialStartupsFormData } from '../../initials/initObjects';
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
// import GetCsrfToken from '../../utils/get-csrf-token';
import { submitStartupsForm } from '../../pages/api/startups-form';
import { useSubmit } from 'stores/dataStore';
import { useFile } from 'stores/fileStore';
import FormTitle from '@/components/common/form/FormTitle';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import StartUpFormCheckbox from './StartUpFormCheckbox';
import StartUpTrialRefactore from './StartUpTrialRefactore';
import StartUpMvpRefactore from './StartUpMvpRefactore';
import StartUpFirstSaleRefactor from './StartUpFirstSaleRefactor';
import StartUpSaleDevelopRefactore from './StartUpSaleDevelopRefactore';

interface Translations {
  secondTitle: string;
  IDEA: string;
  TRIAL: string;
  MVP: string;
  FisrtSale: string;
  SaleDevelopment: string;
  sendButton: string;
  successMessage: string;
  failedMessage: string;
  countriesData: any;
}

interface StartupFormFormClientProps {
  lang: string;
  translations: Translations;
}

export default function StartupFormFormClient({ lang, translations }: StartupFormFormClientProps) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<StartupsFormData>({
    mode: 'onBlur',
    defaultValues: initialStartupsFormData
  });


  const {
    // csrfToken,
    // handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange,
    startupFormType, 
    setStartUpFormType,
    filesCounter,
    handleFileCounterChange,
    solutionsLevel,
    handleSolutionsLevelChange
  } = useSubmit((s) => s)

  const {
    filePostBussines,
    filePostPitch,
    filePostFinancial,
    handleBusinessFileChange,
    handleFinancialFileChange,
    handlePitchFileChange,
    handleFinancialModelFileChange
  } = useFile((s) => s)


  // useEffect(() => {
  //   async function fetchCsrfToken() {
  //     const token = await GetCsrfToken(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
  //     );
  //     handleTokenChange(token);
  //   }

  //   fetchCsrfToken();
  // }, []);

  const onSubmit = async (formData: StartupsFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);



    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Handle conditional file attachments.
    const filePostMap = {
      businessPlanFile: filePostBussines.businessPlanFile,
      pitchDeckFile: filePostPitch.pitchDeckFile,
      financialFile: filePostFinancial.financialFile
    };

    // Convert file objects to Blob and append them.
    for (const [fieldName, file] of Object.entries(filePostMap)) {
      if (file) {
        // console.log(fieldName, typeof(fieldName))
        // console.log(file, typeof(file))
        // console.log(file.name, typeof(file.name))
        sendFormData.append(fieldName, file, file.name);
      }
    }

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Send the form data to the API.
    submitStartupsForm(sendFormData)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialStartupsFormData); // Country does not reset
        setStartUpFormType('');



        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialStartupsFormData);
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
    <div className="container -m-4 mx-auto my-12 gap-y-0 font-barlow px-2 md:px-12 relative">
      <div className='mb-12'>
        <FormTitle lang={lang} formName='startUp'/>
      </div>
      <div className="container mx-auto bg-[#faf8f5] dark:bg-transparent">
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation
            countriesData={translations.countriesData}
            lang={lang}
            register={register}
            errors={errors}
          />
          <div className="col-span-2">
            <div className="col-span-2">
              <div className="bg-[#222222CC]">
                <p className="mb-3 w-[310px] border-b px-10 py-5 text-2xl text-white md:w-[550px] md:text-3xl lg:w-[450px] lg:text-3xl xl:w-[650px]">
                  {translations.secondTitle}
                </p>
                <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
              </div>
            </div>
          </div>
          <div className='w-full h-auto px-4'>
            <div className='h-auto w-full flex flex-col gap-2'>
              <StartUpFormCheckbox register={register} name={translations.IDEA} />
              {((): any => {
                if (startupFormType == translations.IDEA) {
                  return <StartupFormIdea lang={lang || 'en'} register={register} errors={errors} />
                }
              })()}
              <StartUpFormCheckbox register={register} name={translations.TRIAL} />
           {((): any => {
                if (startupFormType == translations.IDEA) {
                  return <StartupFormIdea lang={lang || 'en'} register={register} errors={errors} />
                }
              })()}
              <StartUpFormCheckbox register={register} name={translations.TRIAL} />
              {((): any => {
                if (startupFormType == translations.TRIAL) {
                  return (
                    <StartUpTrialRefactore
                      handleFileCounterChange={handleFileCounterChange}
                      handlePitchFileChange={handlePitchFileChange}
                      handleBusinessFileChange={handleBusinessFileChange}
                      handleFinancialFileChange={handleFinancialFileChange}
                      filesCounter={filesCounter}
                      register={register}
                      errors={errors} 
                      handleSolutionsLevelChange={handleSolutionsLevelChange} 
                      solutionsLevel={solutionsLevel}    
                      setValue={setValue}               
                      handleFinancialModelFileChange={handleFinancialModelFileChange}
                    />
                  )
                }
              })()}
              <StartUpFormCheckbox register={register} name={translations.MVP} />
              {((): any => {
                if (startupFormType == translations.MVP) {
                  return (
                    <StartUpMvpRefactore
                      handleFileCounterChange={handleFileCounterChange}
                      handlePitchFileChange={handlePitchFileChange}
                      handleBusinessFileChange={handleBusinessFileChange}
                       filesCounter={filesCounter}
                      register={register}
                      errors={errors} 
                      setValue={setValue} 
                      handleSolutionsLevelChange={handleSolutionsLevelChange} 
                      solutionsLevel={solutionsLevel}      
                      handleFinancialModelFileChange={handleFinancialModelFileChange}
                      lang={lang || 'en'}
                    />
                  )
                }
              })()}
              <StartUpFormCheckbox register={register} name={translations.FisrtSale} />
              {((): any => {
                if (startupFormType == translations.FisrtSale) {
                  return (
                    <StartUpFirstSaleRefactor 
                      handleFileCounterChange={handleFileCounterChange}
                      handlePitchFileChange={handlePitchFileChange}
                      handleBusinessFileChange={handleBusinessFileChange}
                      filesCounter={filesCounter}
                      register={register}
                      errors={errors}
                      setValue={setValue}
                      handleSolutionsLevelChange={handleSolutionsLevelChange}
                      solutionsLevel={solutionsLevel}
                      handleFinancialModelFileChange={handleFinancialModelFileChange} 
                      handleFinancialFileChange={handleFinancialFileChange}                   
                    />
                  )
                }
              })()}
              <StartUpFormCheckbox register={register} name={translations.SaleDevelopment} />
              {((): any => {
                if (startupFormType == translations.SaleDevelopment) {
                  return (
                    <StartUpSaleDevelopRefactore 
                      handleFileCounterChange={handleFileCounterChange}
                      handlePitchFileChange={handlePitchFileChange}
                      handleBusinessFileChange={handleBusinessFileChange}
                      filesCounter={filesCounter}
                      register={register}
                      errors={errors}
                      setValue={setValue}
                      handleSolutionsLevelChange={handleSolutionsLevelChange}
                      solutionsLevel={solutionsLevel}
                      handleFinancialModelFileChange={handleFinancialModelFileChange} 
                      handleFinancialFileChange={handleFinancialFileChange} 
                      lang={lang || 'en'}
                    />
                  )
                }
              })()}
            </div>
          </div>

          <div className="flex justify-center w-1/3 md:w-1/4 lg:w-1/6 mx-auto mt-6">
            <ButtonRefactor type="submit" text={translations.sendButton} disabled={errorsList[0] ? true : false}/>
          </div>
          <NotificationSendForm lang={lang} successMessage={translations.successMessage} failedMessage={translations.failedMessage} />
        </form>
      </div>
    </div>
  );
}
