import { getProducts } from "../../api/product.api"
import { useQuery } from "@tanstack/react-query"
import ProductCard from "./ProductCard";

const Products = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(
      {
        queryKey: ["productData"],
        queryFn: getProducts,
      }
      );

   if (isLoading) return <div>Fetching products...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {products?.map((p) => (
        <li key={p.id}>
          <ProductCard id={p.id} title={p.title} category={p.category} price={p.price} description={p.description} image={p.image}/>

        </li>
      ))}
    </ul>
  );
}

export default Products