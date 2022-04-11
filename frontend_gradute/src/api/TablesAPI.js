import instance from "./intance";

export const getAllTables = () => {
  const url = "/api/tables";
  return instance.get(url);
};
export const getIdTables = (id) => {
  const url = `/api/tables/${id}`;
  return instance.get(url);
};

export const AddTables = (data) => {
  const url = "/api/tables/create";
  return instance.post(url,data);
};

export const removeTables= (id) => {
  const url = `/api//tables/${id}`;
  return instance.delete(url);
};