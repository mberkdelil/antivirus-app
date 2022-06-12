import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndividualProduct from "./components/IndividualProduct";
import Cart from "./components/Cart";


function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<IndividualProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default (App);
