import instance from "./intance";

export const getAllPost = () => {
  const url = "/api/posts";
  return instance.get(url);
};

export const getOnePost = (id) => {
  const url = `/api/posts/${id}`;
  return instance.get(url);
};

export const AddPost = (data) => {
  const url = "/api/posts/create";
  return instance.post(url,data);
};

export const removePost = (id) => {
  const url = `/posts/${id}`;
  return instance.delete(url);
};
