import { isAuthenticated } from ".";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
const AdminRoute = (props) => {
  return (
    <Route 
      render={() =>
        isAuthenticated() ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
};
export default AdminRoute;
