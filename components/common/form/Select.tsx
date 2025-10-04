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
  options: { value: string; label: string }[];
  className: string;
  labelClass: string;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected?: string;
}) {
  return (
    <>
      <label
        htmlFor={nameInput}
        className={`flex flex-col px-2 !text-[#6B6B6B] ${labelClass}`}
      >
        <span className="flex">
          {label}
          {required ? <span>&nbsp;*</span> : null}
        </span>
        <select
          id={nameInput}
          {...register(nameInput, {
            required: required
          })}
          className={`w-full !rounded-sm border border-gray-400 get-shadow-sm appearance-none bg-transparent placeholder:text-[#939393B2] ${className} ${errors[nameInput] ? ' border-red-500' : ''}`}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      {errors[nameInput] && (
        <span className="mt-2 inline text-sm text-red-500">
          {errors[nameInput].message}
        </span>
      )}
    </>
  );
}
