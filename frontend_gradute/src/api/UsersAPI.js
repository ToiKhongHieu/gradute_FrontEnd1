import instance from "./intance";

export const getAllUsers = () => {
  const url = "/api/Users";
  return instance.get(url);
};
export const getOneUsers = (id) => {
  const url = `/api/Users/${id}`;
  return instance.get(url);
};

export const AddUsers = (data) => {
  const url = "/api/Users";
  return instance.post(url,data);
};