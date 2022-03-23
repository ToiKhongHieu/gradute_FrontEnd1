import instance from "./intance";

export const getAllCategoryProduct = () => {
  const url = "/public/api/categoryfoods";
  return instance.get(url);
};