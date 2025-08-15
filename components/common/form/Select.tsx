'use client';

export default function Select({
  register,
  errors,
  nameInput,
  label,
  required,
  options,
  className,
  labelClass,
  placeholder,
  handleChange
}: {
  register: any;
  errors: any;
  nameInput: string;
  label: string;
  required: string;
  options: Array<{ value: string; label: string }>;
  className: string;
  labelClass: string;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected?: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <label
        htmlFor={nameInput}
        className={`self-start px-4 !text-[#6B6B6B] ${labelClass}`}
      >
        {label}
      </label>

      <div className="flex w-full flex-col items-start">
        <select
          id={nameInput}
          {...register(nameInput, {
            required: required
          })}
          className={`w-full mt-2 !rounded-sm get-shadow-sm active:outline-none focus:outline-none appearance-none bg-transparent placeholder:text-[#939393B2] ${className} ${errors[nameInput] ? ' border-red-500' : ''}`}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {errors[nameInput] && (
          <span className="mt-2 inline text-sm text-red-500">
            {errors[nameInput].message}
          </span>
        )}
      </div>

      <br />
    </div>
  );
}
