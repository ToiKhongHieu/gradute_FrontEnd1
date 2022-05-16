import instance from "./intance";

export const getAllVouchers = () => {
  const url = "/voucher";
  return instance.get(url);
};

export const getOneVoucher = (id) => {
  const url = `/voucher/${id}`;
  return instance.get(url);
};

export const AddVoucher = (data) => {
  const url = "/voucher/create";
  return instance.post(url,data);
};

export const removeVoucher = (id) => {
  const url = `/voucher/${id}`;
  return instance.delete(url);
};
