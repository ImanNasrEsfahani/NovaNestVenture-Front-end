export default function NoRadioButton({
  title,
  register,
  errors,
  required,
  name
}: {
  title: string;
  register: any;
  errors: any;
  required: string;
  name: string;
}) {
  return (
    <div>
      <label className="">{title}</label>
      <div className="mb-5 mt-4 flex flex-row rounded-lg bg-[#f9f6f3] p-4 drop-shadow-lg">
        <label className="flex-column mr-10 flex">
          <input
            type="radio"
            value="yes"
            {...register(name, {
              required: required
            })}
            className="radio mr-2 text-indigo-600 drop-shadow-lg"
          />
          <span>Yes</span>
        </label>
        <label className="flex flex-row">
          <input
            type="radio"
            value="no"
            {...register(name, {
              required: required
            })}
            className="radio mr-2 text-indigo-600 drop-shadow-lg"
          />
          <span>No</span>
        </label>
      </div>

      {errors[name] && (
        <span className="mt-4 text-sm text-red-500">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
