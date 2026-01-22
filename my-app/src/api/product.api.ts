import axiosInstance from "./axiosIntance"

interface Product{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
}

export async function getProducts() : Promise<Product[]>{
  const response =  await axiosInstance.get("https://fakestoreapi.com/products");
    return response.data
};
