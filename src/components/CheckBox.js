import React from 'react'

export default function CheckBox({ label, options, selected, onChange }) {
  return (
    <div className="mb-4">
      <label className="block  text-md font-semibold text-green-900 mb-1">{label}</label>
      <div className="flex flex-col md:flex-row gap-1 flex-wrap md:gap-4">
        {options.map((option) => (
          <label key={option} className="flex text-sm items-center gap-2">
            <input
              type="checkbox"
              value={option}
              checked={selected.includes(option)}
              onChange={(e) => onChange(e)} 
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
