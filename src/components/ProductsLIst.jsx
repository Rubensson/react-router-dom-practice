import { Link } from "react-router-dom";

function ProductsLIst({ products }) {
  return (
    <>
      <ul className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-3 gap-2 justify-center">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="bg-zinc-100 h-[300px] lg:h-[400px] flex flex-col items-center border-[1px] rounded-md hover:scale-105 hover:shadow-zinc-300 hover:shadow-sm"
            >
              <div className="w-full h-[50%] lg:h-[60%] overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-t-md w-full h-full object-cover"
                />
              </div>
              <div className=" flex flex-col gap-2 items-center py-4">
                <h3 className="  text-xs md:text-sm overflow-hidden ">
                  {product.title}
                </h3>
                <h2 className="text-xl font-bold text-blue-800">
                  ${product.price}
                </h2>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-red-500 rounded-full px-2 py-1 text-xs font-semibold text-white"
                >
                  More info
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductsLIst;
