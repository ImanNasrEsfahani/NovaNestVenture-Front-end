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
  containerClass,
  validate,
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
  validate?: any;
}) {
  
  const value = patternValue ? new RegExp(patternValue) : undefined;

  const registerOptions: any = {};
  if (required) registerOptions.required = required;
  if (value) registerOptions.pattern = { value, message: patternMessage };
  if (validate) registerOptions.validate = validate;

  return (
    <div className={`flex flex-col items-start ${containerClass}`}>
      <label htmlFor={nameInput} className={`w-full px-2 !text-[#6B6B6B] ${labelClass}`}>
        {label}
        {required ? <span > *</span> : null}
        <input
          id={nameInput}
          type={type}
          {...register(nameInput, registerOptions)}
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
