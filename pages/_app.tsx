import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalFavoritesContext from "../context/favorites";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalFavoritesContext>
      <Component {...pageProps} />
    </GlobalFavoritesContext>
  );
}
