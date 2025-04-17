export default function TextInput({ label, id,name, type = "text", required = false ,onChange}) {
    return (
      <div className="mt-3">
        <label htmlFor={id} className="block text-sm font-semibold text-green-900">
          {label}
        </label>
        <input
          id={id}
          name={id || name}
          type={type}
          onChange={onChange}
          required={required}
          className="md:mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm "
        />
      </div>
    );
  }
  