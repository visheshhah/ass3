import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../api/product.api";
import { useProduct } from "../../hooks/useProduct";

const ProductDetails = () => {
  const {id} = useParams<{id: string}>();
  const {
    data: product,
    error,
    isLoading,
  } = useProduct(id);

   if (isLoading) return <div>Fetching products...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    const navigate = useNavigate();
  return (
    <>
    <div className="border p-4 rounded m-4">
      <button onClick={() => navigate(-1)} className="bg-blue-600 text-white px-2 rounded mt-2 mr-2">Back</button>
      <div className="p-6 max-w-xl mx-auto">
        {/* <div>ProductDetails</div> */}
        <img className="h-64 mx-auto object-contain" src={product?.image} alt="" />
        <h1 className="mt-4 text-xl font-semibold">{product?.title}</h1>
        <p className="mt-4 text-lg">{product?.description}</p>
      </div>
      <div className="p-6 max-w-xl mx-auto flex justify-between">
        <p className="mt-4 text-lg font-bold">${product?.price}</p>

        <button className="bg-blue-600 text-white px-2 rounded mt-2 mr-2">Add to cart</button>
      </div>
    </div>

    </>
  )
}

export default ProductDetails