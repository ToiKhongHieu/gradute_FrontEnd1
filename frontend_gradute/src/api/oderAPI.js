import instance from "./intance";

export const getTotal = () => {
  const url = "/api/v1/oder/total";
  return instance.get(url);
};

export const getsaleatshop = () => {
  const url = "/api/v1/oder/getsaleatshop";
  return instance.get(url);
};

export const getTotalShip = () => {
  const url = "/api/v1/oder/getsaleship";
  return instance.get(url);
};

export const getTotalSalesDay = () => {
  const url = "/api/v1/oder/sumday";
  return instance.get(url);
};

export const getTotalSalesMonth = () => {
  const url = "/api/v1/oder/summonth";
  return instance.get(url);
};

export const getTotalSalesYear = () => {
  const url = "/api/v1/oder/sumyear";
  return instance.get(url);
};
export const getSumOrders = () => {
  const url = "/api/v1/oder/sum";
  return instance.get(url);
};

export const getTopFoods = () => {
  const url = "/api/v1/orderdetail/topfoods";
  return instance.post(url);
};

