//Use of
import { Link } from "react-router-dom";

function NavBar() {
  // Definimos un array de links, para la navegacion
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className=" pt-4 pb-2 bg-zinc-100">
        <div className="relative lg:w-8/12 mx-auto">
          <Link to={"/"}>
            <div className=" absolute left-2 w-20 h-20 bg-red-500 rounded-full text-white font-bold flex justify-center items-center shadow-md z-10">
              <span>SHOP</span>
            </div>
          </Link>

          <ul className="  md:w-10/12 mx-auto flex justify-center md:justify-around gap-4">
            {links.map((link) => (
              <li key={link.name} className="font-semibold text-sm">
                {/* Uso de Link */}
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
