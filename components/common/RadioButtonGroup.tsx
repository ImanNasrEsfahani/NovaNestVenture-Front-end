

export default function RadioButtonGroup({
  title,
  options,
  register,
  errors,
  required,
  nameRadioButton
}: {
  title: string;
  options: Array<{ value: string; label: string }>;
  register: any;
  errors: any;
  required: string;
  nameRadioButton: string;
}) {
  return (
    <div className='flex flex-col items-start'>
      <label className="px-3 text-[#6b6b6b]">{title}</label>
      <div className="mb-1 mt-3 w-full rounded-lg bg-[#f9f6f3] p-4 drop-shadow-lg">
        {options.map((option) => (
          <label key={option.value} className="my-4 flex items-center gap-2">
            <input
              type="radio"
              value={option.value}
              {...register(nameRadioButton, {
                required: required
              })}
              className="radio mr-2 text-indigo-600 drop-shadow-lg "
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {errors[nameRadioButton] && (
        <span className="mt-4 px-3 text-sm text-yellow-500">
          {errors[nameRadioButton].message}
        </span>
      )}
    </div>
  );
}
