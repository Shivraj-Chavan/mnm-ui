export default function Button({ text, type = "submit" }) {
    return (
      <button
        type={type}
        className="w-full rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-green-600 focus:ring-2 focus:ring-green-700 focus:ring-green-2"
      >
        {text}
      </button>
    );
}
  