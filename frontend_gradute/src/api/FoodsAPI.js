import instance from "./intance";

export const getAllFoods = () => {
  const url = "/api/v1/foods";
  return instance.get(url);
};

export const getOneFoods = (id) => {
  const url = `/api/v1/foods/update/${id}`;
  return instance.get(url);
};

export const AddFoods = (data) => {
  const url = "/api/v1/foods/create";
  return instance.post(url,data);
};

export const removeFoods = (id) => {
  const url = `/api/v1/foods/delete/${id}`;
  return instance.delete(url);
};