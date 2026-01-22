import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/product.api";

interface Product{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
}

export const useProduct = (id: string | undefined) => {
    return useQuery<Product>({
        queryKey: ["product", id],
        queryFn: () => getProductById(id as string),
    })
}