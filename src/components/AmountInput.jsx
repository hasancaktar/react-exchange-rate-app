import React, {useState} from 'react'

export default function AmountInput({amount, setAmount}) {

    const handleAmountChange = (e) => {
        const amount = e.target.value;
        if (amount < 0) setAmount(0);
        else setAmount(amount);
    };

    return (
        <input className="bg-gray-100 border m-3 border-gray-300 rounded-lg  py-2
             text-lg font-semibold text-gray-700 text-center
             focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" onChange={handleAmountChange} value={amount} />
    )
}
