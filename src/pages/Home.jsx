import { useState } from "react";
import Header from "../components/Header";
import { useApiService } from "../services/ApiService";  // useApiService olarak import et
import ExchangeRateView from "../components/ExchangeRateView";
import Carosel from "../components/Carosel.jsx";

export default function Home() {
    const [currency, setCurrency] = useState("USD");
    const res = useApiService(currency);
    if (!res) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <Carosel currencies={res} />
            <ExchangeRateView currencies={res} />
        </>
    );
}
