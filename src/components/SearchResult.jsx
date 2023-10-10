import Axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductsLIst from "./ProductsLIst";

function SearchResult() {
  // Uso de searchParams, objeto de tipo url.searchParam, devuelve una variable de una url
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log(searchParams.get("keyword"));
    Axios.get(
      `https://dummyjson.com/products/search?q=${searchParams.get("keyword")}`
    ).then((res) => setProducts(res.data.products));
  }, [searchParams]);

  return (
    <div className="h-screen">
      <h4 className="font-bold text-sm text-center py-8">SEARCH RESULTS</h4>
      {/* Uso de conditional rendering */}
      {products.length === 0 ? (
        <em>No products found</em>
      ) : (
        <ProductsLIst products={products} />
      )}
    </div>
  );
}

export default SearchResult;
