import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-stone-800 text-white p-4 items-center justify-center flex text-center mt-auto">
            <div className="cursor-pointer text-teal-400 hover:text-teal-600 transition-all duration-300" onClick={()=>{window.open("https://github.com/hasancaktar/react-exchange-rate-app","_blank")}}>
                <FaGithub size={30}/>
            </div>
            <div className="mx-5"></div>
        </footer>
    );
}
