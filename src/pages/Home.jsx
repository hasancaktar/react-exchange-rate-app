import {useState} from "react";
import Header from "../components/Header";
import {useApiService} from "../services/ApiService";  // useApiService olarak import et
import ExchangeRateView from "../components/ExchangeRateView";
import Carousel from "../components/Carousel.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    const [currency, setCurrency] = useState("USD");
    const res = useApiService(currency);
    if (!res) return <p>Loading...</p>;

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Carousel currencies={res}/>
            <ExchangeRateView currencies={res}/>
            <Footer/>
        </div>
    );
}
