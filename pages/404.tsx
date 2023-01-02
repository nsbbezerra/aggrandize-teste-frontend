import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function NotFoundPage() {
  return (
    <Fragment>
      <Head>
        <title>Página não encontrada!</title>
        <link rel="icon" href="icon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="p-16 w-screen bg-zinc-50 flex flex-col justify-center items-center h-screen gap-5">
        <div className="max-w-sm">
          <Image
            src={"/404.svg"}
            width={860}
            height={571}
            alt="404 error image"
          />
        </div>

        <span className="text-zinc-500 text-xl text-center">
          Página não encontrada!
        </span>

        <Link
          href={"/"}
          className="bg-sky-700 flex items-center gap-3 px-4 py-2 text-white rounded-md transition-all delay-75 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer"
        >
          <AiOutlineHome />
          Ir ao início
        </Link>
      </div>
    </Fragment>
  );
}
