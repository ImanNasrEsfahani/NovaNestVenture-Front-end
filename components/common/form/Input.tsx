// import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';

export default function Input({
  id,
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
  id: string;
  register: any;
  errors: any;
  nameInput: string;
  type: string;
  label?: string;
  required: string | boolean | undefined;
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

  // treat empty string / undefined / false as NOT required
  const isRequired =
    required !== undefined &&
    required !== false &&
    !(typeof required === 'string' && required.trim() === '');

  const registerOptions: any = {};
  if (isRequired) {
    registerOptions.required = typeof required === 'string' ? required : true;
  }
  if (value) registerOptions.pattern = { value, message: patternMessage };
  if (validate) registerOptions.validate = validate;

  console.log("errors: ", errors);
  
  return (
    <div className={`flex flex-col items-start ${containerClass ?? ''}`}>
      <label htmlFor={id} className={`w-full px-2 text-gray ${labelClass ?? ''}`}>
        {label}
        {isRequired ? <span className="text-red-500 ml-1">*</span> : null}
        <input
          id={id}
          type={type}
          {...register(nameInput, registerOptions)}
          placeholder={placeholder}
          required={isRequired}
          aria-required={isRequired}
          className={`w-full !rounded-sm get-shadow-sm focus:outline-none border border-gray-400 bg-transparent placeholder:text-[#939393B2] ${
            (className ?? '') + (errors?.[nameInput] ? ' border-red-500' : '')
          }`}
        />
      </label>
      {errors[nameInput] && (
        <span className="px-2 text-sm text-red-500">
          {errors[nameInput].message}
        </span>
      )}

    </div>
  );
}
