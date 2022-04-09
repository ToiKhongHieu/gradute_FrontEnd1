import instance from "./intance";

export const getAllCategoryProduct = () => {
  const url = "/categoryfoods";
  return instance.get(url);
};
<<<<<<< HEAD
=======

export const getOneCategory = (id) => {
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
>>>>>>> 2eff6986cb14af51e266b135d90bd6a3aa5b679a
