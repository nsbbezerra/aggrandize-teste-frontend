import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 w-full py-10">
      <div className="container mx-auto px-5 max-w-4xl flex flex-col justify-center items-center gap-5">
        <strong className="text-xl text-zinc-100 font-black">E-Commerce</strong>

        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center w-full text-lg text-sky-500 gap-3">
          <div className="flex items-center gap-2">
            <FaMapMarkedAlt />
            Nosso Endereço
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            (99) 99999-9999
          </div>

          <div className="flex items-center gap-2">
            <FaMailBulk />
            email@email.com
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          <div className="sm:col-span-2 flex items-center order-2 sm:order-1">
            <input
              className="h-10 bg-white w-full rounded-l-md px-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Seu email"
              type={"email"}
            />
            <button className="newsletter-btn">Inscreva-se</button>
          </div>

          <div className="flex justify-center gap-5 items-center order-1 sm:order-2">
            <a href="#" className="social-btn">
              <FaWhatsapp />
            </a>
            <a href="#" className="social-btn">
              <FaFacebook />
            </a>
            <a href="#" className="social-btn">
              <FaInstagram />
            </a>
            <a href="#" className="social-btn">
              <FaTwitter />
            </a>
          </div>
        </div>

        <span className="text-center text-zinc-100 block mt-5">
          © 2023 Todos os direitos reservador. Por Natanael Bezerra
        </span>
      </div>
    </footer>
  );
}
