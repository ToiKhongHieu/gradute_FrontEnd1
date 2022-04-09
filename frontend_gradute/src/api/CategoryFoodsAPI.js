import instance from "./intance";

export const getAllCategoryProduct = () => {
  const url = "/categoryfoods";
  return instance.get(url);
};
