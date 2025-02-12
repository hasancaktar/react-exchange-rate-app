import React from 'react'

export default function ResultInput({convertAmount}) {
    return (
        <input type="text" className="bg-gray-100 border border-gray-300 rounded-lg py-2
             text-lg font-semibold text-gray-700 text-center
             focus:outline-none focus:ring-2 focus:ring-blue-500 m-2" value={convertAmount} readOnly/>
    )
}
