import React from 'react'

export default function FromCurrencySelect({fromSelected, setFromSelected, currencies}) {
    return (
        <select className=" m-3
        bg-gray-50 border
        border-gray-300
        text-gray-900
        text-sm
        rounded-lg
         min-w-xs/2 p-2.5
        "
            value={fromSelected}
            onChange={(e) => {
                setFromSelected(e.target.value);
            }}
        >
            <option>Select..</option>
            {Object.keys(currencies).map((cur, i) => (
                <option key={i}>{cur}</option>
            ))}
        </select>
    )
}
