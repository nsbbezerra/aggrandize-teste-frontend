import Image from "next/image";
import { ProductsProps, ToastProps } from "../../../utils/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Fragment, useContext, useEffect, useState } from "react";
import FavoritesContext from "../../../context/favorites/favorites";
import Toast from "../Toast";
import { FaBoxOpen } from "react-icons/fa";
import Rating from "react-star-ratings";
import { calcDiscount, formatCurrency } from "../../../utils/functionalites";

interface Props {
  products: ProductsProps[];
}

export default function Cards({ products }: Props) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [onChangeToast, setOnChangeToast] = useState<ToastProps>({
    mode: "add",
    isOpen: false,
  });

  function onCloseToast(isOpen: boolean) {
    setOnChangeToast({
      mode: "add",
      isOpen,
    });
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    storedFavorites && setFavorites(JSON.parse(String(storedFavorites)));
  }, []);

  function favoriteProduct(id: number) {
    const result = products?.find((item) => item.id === id);
    const productToFavorite = {
      id: result?.id || 0,
      discountPercentage: result?.discountPercentage || 0,
      thumbnail: result?.thumbnail || "",
      title: result?.title || "",
      price: result?.price || 0,
    };
    setFavorites([...favorites, productToFavorite]);
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, productToFavorite])
    );
    setOnChangeToast({
      mode: "add",
      isOpen: true,
    });
  }

  function removeFromFavorites(id: number) {
    const filteredFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(filteredFavorites);
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    setOnChangeToast({
      mode: "remove",
      isOpen: true,
    });
  }

  return (
    <Fragment>
      <Toast
        isOpen={onChangeToast.isOpen}
        close={onCloseToast}
        title="Concluído"
        content={
          onChangeToast.mode === "add"
            ? "Produto favoritado com sucesso"
            : "Produto removido dos favoritos"
        }
      />
      {!products.length ? (
        <div className="flex flex-col justify-center items-center gap-2 text-zinc-700 py-16">
          <FaBoxOpen className="text-7xl animate-bounce" />
          <span className="text-center md:text-xl">
            Desculpe, mais não encontramos nenhum produto para lhe mostrar!
          </span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-5">
            {products.map((product) => (
              <div className="cards" key={product.id}>
                <div className="card-image-container">
                  <Image
                    fill
                    alt="Ecommerce product thumbnail"
                    src={product.thumbnail}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="p-3 border-t w-full text-center">
                  <strong className="text-zinc-700 text-sm md:text-base">
                    {product.title}
                  </strong>

                  <div className="flex items-center gap-2 justify-center text-sm sm:text-base">
                    <span
                      className={`${
                        product.discountPercentage > 0
                          ? "line-through text-zinc-500"
                          : "text-zinc-800"
                      }`}
                    >
                      {formatCurrency(product.price)}
                    </span>
                    {product.discountPercentage > 0 && (
                      <span>
                        {calcDiscount(
                          product.price,
                          product.discountPercentage
                        )}
                      </span>
                    )}
                  </div>

                  <div className="block">
                    <Rating
                      rating={product.rating}
                      starDimension={"15px"}
                      starSpacing={"2px"}
                      starRatedColor={"#f59e0b"}
                    />
                  </div>

                  {favorites.find((obj) => obj.id === product.id) ? (
                    <button
                      className="set-favorite-btn"
                      onClick={() => removeFromFavorites(product.id)}
                    >
                      <AiFillHeart className="text-sky-700" />
                    </button>
                  ) : (
                    <button
                      className="set-favorite-btn"
                      onClick={() => favoriteProduct(product.id)}
                    >
                      <AiOutlineHeart className="text-sky-700" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Fragment>
  );
}
