import {useEffect, useState} from "react";
import AmountInput from "./AmountInput.jsx";
import ResultInput from "./ResultInput.jsx";
import FromCurrencySelect from "./FromCurrencySelect.jsx";
import ToCurrencySelect from "./ToCurrencySelect.jsx";
import {HiArrowCircleRight} from "react-icons/hi";

export default function ExchangeRateView({currencies}) {
    const [fromSelected, setFromSelected] = useState("");
    const [toSelected, setToSelected] = useState("");
    const [amount, setAmount] = useState(0);
    const [convertAmount, setConvertAmount] = useState(0);

    useEffect(() => {
        handleExchange();
    }, [fromSelected, toSelected, amount]);

    const handleExchange = () => {
        if (!fromSelected || !toSelected || amount <= 0) return;

        const fromRate = currencies[fromSelected];
        const toRate = currencies[toSelected];

        if (fromRate && toRate) {
            const result = (amount / fromRate) * toRate;

            setConvertAmount(result.toFixed(4));
        }
    };
    return (
        <>
            <div className=" mt-32
                       flex flex-col md:flex-row items-center justify-center
                       ">
                <AmountInput amount={amount} setAmount={setAmount}/>
                <FromCurrencySelect fromSelected={fromSelected} currencies={currencies}
                                    setFromSelected={setFromSelected}/>
                <HiArrowCircleRight className="h-10 w-10 m-3 hidden md:block"/>
                <ToCurrencySelect toSelected={toSelected} setToSelected={setToSelected} currencies={currencies}/>
                <ResultInput convertAmount={convertAmount}/>
            </div>
        </>
    );

}
