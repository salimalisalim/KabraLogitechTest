import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NewProduct from "./Components/NewProduct";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import Cart from "./Components/Cart";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>

    </Fragment>

  );
}

export default App;
