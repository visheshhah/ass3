import { useContext } from "react";
import { useCart } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

interface Product{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
}

export default function ProductCard({ id, title, price, category, description, image} : Product){
      const { addToCart } = useCart();
    return(
        <>
            <div className="border p-4 rounded m-4">

                <p><strong>Name:</strong> {title}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Category:</strong> {category}</p>

                
                <button className="bg-blue-600 text-white px-2 rounded mt-2 mr-2" onClick={() => addToCart({id: id, name: title, stock:1, price: price, category:category})}>Add to Cart</button>
                <NavLink to={`/shop/products/${id}`}>
                    <button className="bg-yellow-600 text-white px-2 rounded mt-2" >View Details</button>
                </NavLink>

            </div>
        </>
    )
}