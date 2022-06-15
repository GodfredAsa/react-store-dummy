import { useState } from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";
import CartProvider from "./store/CartProvider";
// import Modal from "./components/UI/input/Modal/Modal";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCarthandler = () => {
    setShowCart(true);
  };

  const closeCarthandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCarthandler} />}

      {/* pasring a function as a prop*/}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
