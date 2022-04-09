import instance from "./intance";

export const getAllUsers = () => {
  const url = "/api/Users";
  return instance.get(url);
};