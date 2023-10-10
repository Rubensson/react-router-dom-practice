import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  // Uso de useNavigate
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  // handleSubmit, preventDefault evita que se recargue la pagina al ejecutar submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword("");
    e.target.reset();
    if (keyword == "") {
      alert("Debe ingresar un producto!");
    } else {
      navigate(`/search?keyword=${keyword}`);
    }
  };
  return (
    <div className="relative w-11/12 md:w-8/12 lg:w-6/12 mx-auto flex bg-red-500  rounded-md md:rounded-full flex-col md:flex-row justify-center gap-4 items-center p-4">
      <h2 className="text-xl text-white">Busca un producto</h2>
      <form onSubmit={handleSubmit} className="inline-flex">
        <input
          defaultValue={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Buscar"
          className="rounded-full pl-4 mr-2"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white px-2 rounded-full"
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
