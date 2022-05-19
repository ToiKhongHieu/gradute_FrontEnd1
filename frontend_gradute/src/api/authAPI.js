import instance from "./intance";


export const signup = (user) => {
  const url = "/signup";
  return instance.post(url, user);
};
export const signin = (user) => {
  const url = "/Users/signin";
  return instance.post(url, user);  
};
export const signout = (next) => {
  localStorage.removeItem('token');
  next()
}