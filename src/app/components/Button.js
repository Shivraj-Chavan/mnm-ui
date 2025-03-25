export default function Button({ text, type = "submit" }) {
    return (
      <button
        type={type}
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {text}
      </button>
    );
  }
  