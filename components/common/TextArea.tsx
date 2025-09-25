export default function TextArea({
  title,
  register,
  errors,
  required,
  nameTextArea,
  patternValue,
  patternMessage,
  placeholder,
  rows,
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
    <div className='w-full flex flex-col mb-4'>
      {/* Label for the textarea */}
      {title && (<label className="pb-2">{title}</label>)}
      <textarea
        rows={rows}
        cols={cols}
        className={
          'textarea rounded bg-white w-full border border-gray-400 text-sm placeholder:text-gray focus:outline-none' +
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
      {errors[nameTextArea] && (
        <span className="mt-1 text-md text-red-500">
          {errors[nameTextArea].message}
        </span>
      )}
    </div>
  );
}
