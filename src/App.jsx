import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SearchResult from "./components/SearchResult";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div id="App">
      {/* Uso de Routes, Route, Layout */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/*" element={<Products />} />
          <Route path="search" element={<SearchResult />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* Otro ejemplo de Route Layout */}
        {/*         <Router path="/account" element={<AcountLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Router> */}
      </Routes>
    </div>
  );
}

export default App;
