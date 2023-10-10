import Axios from "axios";
import ProductsLIst from "../components/ProductsLIst";
import SearchForm from "../components/SearchForm";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Uso de axios, para conectar a la api de productos
    Axios.get("https://dummyjson.com/products").then((res) => {
      let data = res.data.products;
      let randomIndex = Math.floor(Math.random() * 27);

      setProducts(data.slice(randomIndex, randomIndex + 3));
    });
  }, []);
  return (
    <div className="relative h-screen pt-20  bg-homeBg bg-cover bg-center z-1 py-4">
      <div className="absolute left-0 top-0 w-full h-full bg-zinc-800 z-0 opacity-60"></div>

      <div className="relative text-center z-30">
        <h1 className="text-6xl font-bold text-white mb-10">
          LLEGARON LAS OFERTAS!!
        </h1>
        <SearchForm />
        <div className=" pt-20">
          <ProductsLIst products={products} />
        </div>
      </div>
    </div>
  );
}

export default Home;
