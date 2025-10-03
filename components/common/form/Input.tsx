// import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';

export default function Input({
  register,
  errors,
  nameInput,
  type,
  label,
  required,
  patternValue,
  placeholder,
  patternMessage,
  className,
  labelClass,
  containerClass
}: {
  register: any;
  errors: any;
  nameInput: string;
  type: string;
  label?: string;
  required: string;
  patternValue: string;
  patternMessage: string;
  placeholder: string;
  className: string;
  labelClass?: string;
  containerClass?: string;
  inputValue?: string;
}) {
  
  const value = new RegExp(patternValue); // **don`t use slash (/) before and after regex pattern for this component and don`t use i end of regex pattern in this component

  return (
    <div className={`flex flex-col items-start ${containerClass}`}>
      <label htmlFor={nameInput} className={`w-full px-2 !text-[#6B6B6B] ${labelClass}`}>{label}
        <input
          id={nameInput}
          type={type}
          {...register(nameInput, {
            required: required,
            pattern: {
              value: value,
              message: patternMessage
            }
          })}
          placeholder={placeholder}
          className={`w-full !rounded-sm get-shadow-sm focus:outline-none border border-gray-400 bg-transparent placeholder:text-[#939393B2] ${
            className + (errors[nameInput] ? ' border-red-500' : '')
          }`}
        />
      </label>
      {errors[nameInput] && (
        <span className="px-2 text-sm text-red-500">
          {errors[nameInput].message}
        </span>
      )}

      {label && <br />}
    </div>
  );
}
