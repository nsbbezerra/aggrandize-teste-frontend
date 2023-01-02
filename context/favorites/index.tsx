import { FavoritesContextProvider } from "./favorites";

const GlobalFavoritesContext = ({ children }: any) => {
  return <FavoritesContextProvider>{children}</FavoritesContextProvider>;
};

export default GlobalFavoritesContext;
