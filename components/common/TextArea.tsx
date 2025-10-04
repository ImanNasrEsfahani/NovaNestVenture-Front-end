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
}: {
  title?: string;
  register: any;
  errors: any;
  required: string;
  nameTextArea: string;
  patternValue: string;
  patternMessage: string;
  placeholder: string;
  rows?: number;
  cols?: number;
}) {
  // Create a regular expression pattern for validation
  const pattern = new RegExp(patternValue);

  return (
    <div className='w-full flex flex-col py-4'>
      {/* Label for the textarea */}
      <label htmlFor={nameTextArea} className="w-full px-2 !text-[#6B6B6B] dark:text-current">
        {title}
        {required ? <span > *</span> : null}
        <textarea
          id={nameTextArea}
          rows={rows}
          cols={cols}
          className={
            'textarea w-full !rounded-sm get-shadow-sm focus:outline-none border border-gray-400 bg-transparent placeholder:text-[#939393B2]' +
            (errors[nameTextArea] ? ' border-red-500' : '')
          }
          {...register(nameTextArea, {
            required: required,
            pattern: {
              value: pattern,
              message: patternMessage,
            },
          })}
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
