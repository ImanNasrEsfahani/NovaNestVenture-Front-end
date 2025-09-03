
import UploadInput from './UploadInput';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
export default function YesRadioButton({
  title,
  register,
  errors,
  required,
  name,
  selectedRadio,
  handleRadioChange,
  handleFileChange,
  fileName,
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
  selectedRadio: string;
  handleRadioChange: any;
  handleFileChange: any;
  fileName: string;
}) {
  const { lang } = useLang();
  const {t}=getServerTranslation(lang, "formComponent");
  let uploadInputTitle = ""

  switch (title) {
    case t("startUp", {returnObjects: true}).pitchDeck:
      uploadInputTitle = "Pitch deck file"
      break;
    case t("startUp", {returnObjects: true}).businessPlan:
      uploadInputTitle = "Business plan file"
      break
    case t("startUp", {returnObjects: true}).financialFile:
      uploadInputTitle = "Financial file"
    default:
      break;
  }

  return (
    <div>
      {/* Label for the radio buttons */}
      <label className="text-purple-600 dark:text-current">{title}</label>
      <div className="flex flex-col">
        {/* Radio buttons for 'Yes' and 'No' */}
        <div className="mt-4 flex flex-row rounded-lg bg-whiteGold p-4 drop-shadow-lg">
          <label className="flex-column mr-10 flex">
            <input
              type="radio"
              value="true"
              {...register(name, { required: required })}
              checked={selectedRadio === 'true'}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 drop-shadow-lg"
            />
            <span>{t("startUp", {returnObjects: true}).YesButton}</span>
          </label>
          <label className="flex flex-row">
            <input
              type="radio"
              value=""
              {...register(name, { required: 'this file is requied!' })}
              checked={selectedRadio === ''}
              onChange={handleRadioChange}
              className="radio mr-2 text-indigo-600 drop-shadow-lg"
            />
            <span>{t("startUp", {returnObjects: true}).NoButton}</span>
          </label>
        </div>

        {/* Conditional file input */}
        {selectedRadio === 'true' && (
          <div className="my-4 flex justify-center">
            <UploadInput
              title={uploadInputTitle}
              nameInput={uploadInputTitle}
              register={register}
              errors={errors}
              handleChange={handleFileChange}
            />
            {errors[fileName] && (
              <span className="mt-4 text-sm text-red-500">
                {errors[fileName].message}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Error message for radio buttons */}
      {errors[name] && (
        <span className="mt-4 text-sm text-red-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
