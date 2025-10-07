export default function TextArea({
  title,
  register,
  errors,
  required,
  nameTextArea,
  patternValue,
  patternMessage,
  placeholder,
  rows = 4,
  cols,
  maxLength,
  maxLengthMessage,
  validate,
}: {
  title?: string;
  register: any;
  errors: any;
  required?: string | boolean;
  nameTextArea: string;
  patternValue: string;
  patternMessage: string;
  placeholder: string;
  rows?: number;
  cols?: number;
  maxLength: number;
  maxLengthMessage: string;
  validate: any;
  // maxLength?: number;
  // maxLengthMessage?: string;
  // validate?: any;
}) {
  const pattern = patternValue ? new RegExp(patternValue) : undefined;

  const isRequired =
    required !== undefined &&
    required !== false &&
    !(typeof required === 'string' && required.trim() === '');

  const registerOptions: any = {};
  if (isRequired) registerOptions.required = typeof required === 'string' ? required : true;
  if (pattern) registerOptions.pattern = { value: pattern, message: patternMessage };
  if (maxLength) registerOptions.maxLength = { value: maxLength, message: maxLengthMessage ?? `Ensure this field has no more than ${maxLength} characters.` };
  if (validate) registerOptions.validate = validate;

  return (
    <div className='w-full flex flex-col py-4'>
      {/* Label for the textarea */}
      <label htmlFor={nameTextArea} className="w-full px-2 !text-[#6B6B6B] dark:text-current">
        {title}
        {isRequired ? <span className="text-red-500 ml-1">*</span> : null}
        <textarea
          id={nameTextArea}
          rows={rows}
          cols={cols}
          className={
            'textarea w-full !rounded-sm get-shadow-sm focus:outline-none border border-gray-400 bg-transparent placeholder:text-[#939393B2]' +
            (errors[nameTextArea] ? ' border-red-500' : '')
          }
          {...register(nameTextArea, registerOptions)}
          placeholder={placeholder}
        />
      </label>
      {errors[nameTextArea] && (
        <span className="px-2 text-sm text-red-500">
          {errors[nameTextArea].message}
        </span>
      )}
    </div>
  );
}
