import { isAuthenticated } from ".";
import { Routes, useNavigate } from "react-router-dom";
const AdminRoute = (props) => {
const history = useNavigate();
  return (
    <Routes
      render={() =>
        isAuthenticated() && isAuthenticated().id == 1 ? (
          props.children
        ) : (
          history("https://datn-hethongdatban.herokuapp.com/auth/login")
        )
      }
    ></Routes>
  );
};
export default AdminRoute;
