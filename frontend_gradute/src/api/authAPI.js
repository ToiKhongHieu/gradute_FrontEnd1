import instance from "./intance";

export const getAllTables = () => {
  const url = "api/uploadfile";
  return instance.post(url);
};
