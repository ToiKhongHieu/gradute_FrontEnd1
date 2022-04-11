import instance from "./intance";

export const getAllCategoryTable = () => {
  const url = "/Categorytable";
  return instance.get(url);
};

export const getOneCategoryTable = (id) => {
  const url = `/categorytable/${id}`;
  return instance.get(url);
};

export const AddCategoryTablee = (data) => {
  const url = "categorytable/create";
  return instance.post(url,data);
};

export const removeCategoryTable = (id) => {
  const url = `/categorytable/${id}`;
  return instance.delete(url);
};
