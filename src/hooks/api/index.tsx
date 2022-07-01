import useQuery from "./useQuery";

const route = process.env.REACT_APP_API_URL;

const routes = {
  products: `${route}/api/product`,
  categories: `${route}/api/category`,
};

export const GetProducts = (params?: any) => {
  return useQuery(routes.products, params);
};

export const GetProductById = (id: string) => {
  return useQuery(`${routes.products}/${id}`);
};

export const GetCategories = () => {
  return useQuery(routes.categories);
};
