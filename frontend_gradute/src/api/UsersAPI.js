import instance from "./intance";

export const getAllUsers = () => {
  const url = "/api/Users";
  return instance.get(url);
};
export const getOneCategory = (id) => {
  const url = `/categoryfoods/${id}`;
  return instance.get(url);
};

export const AddCategory = (data) => {
  const url = "/categoryfoods/create";
  return instance.post(url,data);
};