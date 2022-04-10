import instance from "./intance";

export const getAllCategoryFood = () => {
  const url = "/categoryfoods";
  return instance.get(url);
};

export const getOneCategoryFood = (id) => {
  const url = `/categoryfoods/${id}`;
  return instance.get(url);
};

export const AddCategory = (data) => {
  const url = "/categoryfoods/create";
  return instance.post(url,data);
};

export const removeCate = (id) => {
  const url = `/categoryfoods/${id}`;
  return instance.delete(url);
};
