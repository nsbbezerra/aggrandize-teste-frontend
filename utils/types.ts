interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category:
    | "tops"
    | "womens-dresses"
    | "womens-shoes"
    | "mens-shirts"
    | "mens-shoes"
    | "mens-watches"
    | "womens-watches"
    | "womens-bags"
    | "womens-jewellery"
    | "sunglasses";
  thumbnail: string;
  images: string[];
}

interface FavoritesProps {
  id: number;
  thumbnail: string;
  title: string;
  discountPercentage: number;
  price: number;
}

interface ToastProps {
  mode: "remove" | "add";
  isOpen: boolean;
}

export type { ProductsProps, FavoritesProps, ToastProps };
