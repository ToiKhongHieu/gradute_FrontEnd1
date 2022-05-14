export const isAuthenticated = () => {
  // if (typeof window == 'undefined') return false;

  if (document.cookie) {
    console.log("cookie",document.cookie);
      return JSON.parse(localStorage.getItem('token'))
  } else {
      return false
  }
}
export const signout = (next) => {
  localStorage.removeItem('token');
  next()
}