import Head from "next/head";
import Image from "next/image";
import { Fragment, useContext } from "react";
import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineShopping,
} from "react-icons/ai";
import FavoritesContext from "../../context/favorites/favorites";
import Menu from "./Menu";

export default function Header() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <Fragment>
      <Head>
        <title>E-commerce</title>
        <link rel="icon" href="icon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="w-full bg-bgHeader bg-center py-7 bg-cover bg-no-repeat border-b-4 border-b-sky-700 shadow-md">
        <div className="container mx-auto px-5 max-w-4xl flex flex-col justify-center items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={"/icon.png"}
              width={64}
              height={64}
              alt="Shopping Online Logo"
            />
            <strong className="text-3xl text-zinc-700 font-black">
              E-Commerce
            </strong>
          </div>

          <div className="flex items-center justify-center gap-2 w-full">
            <a href="#" className="menu-items">
              <AiOutlineHome />
              Início
            </a>
            <a href="#" className="menu-items hidden sm:flex">
              <AiOutlineShopping />
              Minhas Compras
            </a>
            <a href="#" className="menu-items hidden sm:flex">
              <AiOutlineIdcard />
              Sobre Nós
            </a>

            <Menu products={favorites} />
          </div>
        </div>
      </header>
    </Fragment>
  );
}
