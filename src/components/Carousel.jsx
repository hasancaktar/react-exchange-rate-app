import Marquee from "react-fast-marquee";

export default function Carousel({currencies}) {
    return (
       <div className="mt-5"> <Marquee speed={50} autoFill={true} gradient={false}>
           {Object.keys(currencies).map((currency, i) => (
               <div className="px-6 mx-2 rounded-xl  bg-gray-900 text-yellow-400 text-lg font-bold shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out" key={i}>USD/{currency}: {+currencies[currency].toFixed(4)}</div>
           ))}
       </Marquee></div>
    )
}
