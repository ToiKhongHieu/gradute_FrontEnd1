import instance from "./intance";

export const getAllTables = () => {
  const url = "/api/tables";
  return instance.get(url);
};