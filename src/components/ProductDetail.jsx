import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

function ProductDetail() {
  // Uso de useParams, usando los paramtros pasados en las rutas
  const { productId } = useParams();

  // Uso de useState para alojar el producto requerido
  const [product, setProduct] = useState(null);

  // Uso de useEffect y axios para traer un unico producto de la api mediante su :id
  useEffect(() => {
    Axios.get(`https://dummyjson.com/products/${productId}`).then(
      (res) => console.log(res.data) || setProduct(res.data)
    );
  }, [productId]);
  return (
    <div className="h-screen">
      {!product && <em>Loading...</em>}
      {product && (
        <div className="flex flex-col md:flex-row gap-4 w-10/12 md:w-6/12 mx-auto rounded-md shadow-sm shadow-slate-300 p-4  ">
          <img
            src={product.thumbnail}
            alt=""
            className="w-full md:w-5/12 border-[1px] rounded-sm"
          />
          <div>
            {/*             <h1 id="product-title" className="text-lg font-bold">
              Product id: {productId}
            </h1> */}
            <h1 className="text-lg font-bold mb-4">{product.title}</h1>
            {/* <p id="product-description" className="text-sm text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              consectetur ex repellendus?
            </p> */}
            <p className="mb-8">{product.description}</p>
            <Link to={"/products"} className="text-red-700">
              &lt;&lt; Back to products list
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
