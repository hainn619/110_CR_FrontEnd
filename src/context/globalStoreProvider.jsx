import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalStoreProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "admin", id: 42 });
  const addProdToCart = (prod) => {
    console.log("Global add Prod", prod);
    let copy = [...cart];
    let found = false;
    for (let i = 0; i < copy.length; i++) {
      let item = copy[i];
      if (item._id == prod._id) {
        found = true;
        item.quantity += prod.quantity;
      }
    }
    if (!found) {
      copy.push(prod);
    }
    setCart(copy);
  };
  const removeProdfromCart = (_id) => {
    console.log("Global remove Prod", _id);
    let copy = [...cart];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i]._id === _id) {
        copy.splice(i, 1);
      }
    }
    setCart(copy);
  };
  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addProdToCart: addProdToCart,
        removeProdfromCart: removeProdfromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
export default GlobalStoreProvider;
