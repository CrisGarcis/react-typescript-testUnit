import { QueryFunctionContext, useQuery } from "react-query";
import { Products } from "./types/products";
import { request } from "../utilities/request.utilities";
async function fetchProducts(ctx: QueryFunctionContext) {
  const [_, page] = ctx.queryKey;

  const response = await request<Products>(
    `https://peticiones.online/api/products?page=${page}`
  );
  return response;
}

export function useFetchProducts(page: number) {
  return useQuery(["products", page], fetchProducts);
}
