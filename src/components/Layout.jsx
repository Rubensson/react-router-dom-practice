import { Outlet } from "react-router-dom";

import Navbar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="font-open bg-zinc-200">
      <Navbar />
      {/* Uso de Outlet */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
