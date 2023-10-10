import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

import ProductDetail from "../components/ProductDetail";
import ProductsList from "../components/ProductsLIst";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Uso de axios, para conectar a la api de productos
    Axios.get("https://dummyjson.com/products").then((res) =>
      setProducts(res.data.products)
    );
  }, []);

  return (
    <div className="py-4">
      <h1 className="font-bold text-sm text-center py-8">PRODUCTS</h1>
      <Routes>
        {/* Uso de useParams, pasando un parametro en la ruta */}
        <Route index element={<ProductsList products={products} />}></Route>
        <Route path=":productId" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default Products;
