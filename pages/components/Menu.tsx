import { Fragment, useContext, useState } from "react";
import cx from "classnames";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastProps } from "../../utils/types";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import Image from "next/image";
import { FaBoxOpen, FaTrash } from "react-icons/fa";
import Toast from "./Toast";
import FavoritesContext from "../../context/favorites/favorites";
import { calcDiscount, formatCurrency } from "../../utils/functionalites";

export default function Menu() {
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

      <div className="relative text-left z-50">
        <PopoverPrimitive.Root>
          <PopoverPrimitive.Trigger asChild>
            <button className="favorite-btn">
              <AiOutlineHeart className="text-sky-700" />
              Meus Favoritos
              <span className="favorite-tag">
                {!favorites || !favorites.length ? 0 : favorites.length}
              </span>
            </button>
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Content
            align="center"
            sideOffset={4}
            className={cx(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-[90vw] mr-2 py-2 px-4 shadow-xl sm:w-[80vw] md:w-[70vw] lg:w-[55vw] xl:w-[35rem] rounded-md hide-scrollbar",
              "bg-white max-h-[70vh] overflow-auto"
            )}
          >
            <PopoverPrimitive.Arrow className="fill-current text-white" />

            <div className="grid grid-cols-1 divide-y divide-zinc-100">
              {!favorites || !favorites.length ? (
                <div className="flex flex-col justify-center items-center gap-2 py-2 text-zinc-700">
                  <FaBoxOpen className="text-2xl animate-bounce" />
                  <span>Nenhum produto favoritado</span>
                </div>
              ) : (
                <>
                  {favorites?.map((product) => (
                    <div
                      key={product.id}
                      className="grid grid-cols-[50px_1fr] gap-4 py-2 relative"
                    >
                      <div className="w-full relative h-[50px] border rounded-md overflow-hidden">
                        <Image
                          fill
                          alt="Ecommerce product thumbnail"
                          src={product.thumbnail}
                          objectFit="contain"
                        />
                      </div>
                      <div>
                        <span className="text-zinc-700">{product.title}</span>
                        <div className="flex items-center gap-2">
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
                        <button
                          className="remove-btn"
                          onClick={() => removeFromFavorites(product.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Root>
      </div>
    </Fragment>
  );
}
