import { useCart } from "../context/CartContext";

interface CartPageProps{
    handleBackClick: () => void;
}

export default function CartPage({handleBackClick} : CartPageProps){
    const {cart, incrementItem, decrementItem, removeItem} = useCart();

    if(cart.length === 0){
        return (
            <>
                <div>
                    <button onClick={handleBackClick}>Back</button>
                </div>
                <h2>Cart is empty</h2>
            </>
            
        )
    }

    return(
        <>
        <div>
            <button onClick={handleBackClick}>Back</button>
        </div>
        <div>
            <h2>Your Cart</h2>
            {cart.map(item => (

            <div key={item.id} className=" border p-4 rounded m-4">

                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Quantity:</strong> {item.stock}</p>
                    <button onClick={() => incrementItem(item.id)}>+</button>

                    <button onClick={() => decrementItem(item.id)}>-</button>
                    <button className="bg-red-600 text-white" onClick={() => removeItem(item.id)}>Remove</button>

                </div>
            ))}
        </div>
        </>
    )
}