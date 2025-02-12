import React from 'react'

export default function ToCurrencySelect({toSelected, setToSelected,currencies}) {
    return (
        <select className="bg-gray-50 border m-3
        border-gray-300
        text-gray-900
        text-sm
        rounded-lg
         min-w-xs/2 p-2.5"
            value={toSelected}
            onChange={(e) => {
                setToSelected(e.target.value);
            }}
        >
            <option>Select..</option>
            {Object.keys(currencies).map((cur, i) => (
                <option key={i}>{cur}</option>
            ))}
        </select>
    )
}
