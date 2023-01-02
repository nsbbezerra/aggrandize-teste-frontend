import { createContext, useState } from "react";
import { FavoritesProps } from "../../utils/types";

type PropsFavoritesContext = {
  favorites: FavoritesProps[];
  setFavorites: (data: FavoritesProps[]) => void;
};

const DEFAULT_VALUE: PropsFavoritesContext = {
  favorites: [],
  setFavorites: (data) => {},
};

const FavoritesContext = createContext<PropsFavoritesContext>(DEFAULT_VALUE);

const FavoritesContextProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState(DEFAULT_VALUE.favorites);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContextProvider };

export default FavoritesContext;
