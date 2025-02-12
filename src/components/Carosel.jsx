import Marquee from "react-fast-marquee";

export default function Carosel({currencies}) {
    return (
       <div className="mt-5"> <Marquee speed={50} autoFill={true} gradient={false}>
           {Object.keys(currencies).map((currency, i) => (
               <div className="px-4 mx-1 rounded-2xl bg-amber-200" key={i}>USD/{currency}: {+currencies[currency].toFixed(4)}</div>
           ))}
       </Marquee></div>
    )
}
