import { GetStaticProps } from "next";
import { Fragment } from "react";
import { ProductsProps } from "../utils/types";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cards from "./components/products/Cards";

interface Props {
  products: ProductsProps[] | null;
}

export default function Home({ products }: Props) {
  return (
    <Fragment>
      <Header />

      <section className="container mx-auto px-5 py-10 max-w-6xl">
        <Cards products={products || []} />
      </section>

      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = process.env.ENDPOINT_URL;

  const response = await fetch(`${url}/products`);
  const data = await response.json();

  return {
    props: {
      products: data || null,
    },
  };
};
