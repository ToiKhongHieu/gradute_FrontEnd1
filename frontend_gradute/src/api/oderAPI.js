import instance from "./intance";

export const getTotal = () => {
  const url = "/api/v1/oder/total";
  return instance.get(url);
};

