import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export default function Navbar(){
  const {cart} = useCart();

  const totalQuantity = cart.reduce((total ,item) => total + item.quantity, 0);

  return (
    <>
      <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold"><NavLink to={"/"}>Shopie</NavLink></div>
        <div className="relative">
          {totalQuantity > 0 && <ShoppingCart/>} 

          {totalQuantity > 0 && (
            <span className="absolute -top-1.5 -right-1.5 px-1.5 bg-red-500 text-white text-xs rounded-full">
              {totalQuantity}
            </span>
          )}
        </div>
        <div><NavLink to={"/about"}>About</NavLink></div>
        <div><NavLink to={"shop/products"}>Products</NavLink></div>
      </nav>
    </>
  );
}

