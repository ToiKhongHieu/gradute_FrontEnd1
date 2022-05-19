export const authenticate = (token) => {
  if (typeof window != undefined && token.role == "admin") {
    console.log("token" , token.role);
      localStorage.setItem('token', JSON.stringify(token))
  }
}
export const isAuthenticated = () => {
  if (localStorage.getItem('token')) {
      return true
  } else {
      return false
  }
}
export const signout = (next) => {
  localStorage.removeItem('token');
  next()
}