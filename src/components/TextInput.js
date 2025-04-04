export default function TextInput({ label, id, type = "text", required = false ,onChange}) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-semibold text-gray-900">
          {label}
        </label>
        <input
          id={id}
          name={id}
          type={type}
          onChange={onChange}
          required={required}
          className="md:mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm "
        />
      </div>
    );
  }
  