export default function TextArea({ label, id, required = false,onChange }) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-semibold text-gray-900">
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          required={required}
          onChange={onChange}
          rows="3"
          className="md:mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
      </div>
    );
  }
  