import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AddCategoryFood from "./pages/admin/categoryFoods/Add";
import ListCategoryFoods from "./pages/admin/categoryFoods/list";
import ListAllUsers from "./pages/admin/listUsers/list";
import ListAllTables from "./pages/admin/listTables/list";

export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <AdminLayout path="/admin">
                    <Switch>
                        <Route  path="/admin/categoryFoods">
                            <ListCategoryFoods {...props} />
                        </Route>
                        <Route  path="/admin/categoryFoodAdd">
                            <AddCategoryFood {...props} />
                        </Route>
                        <Route  path="/admin/ListUsers">
                            <ListAllUsers {...props} />
                        </Route>
                        <Route  path="/admin/ListTables">
                            <ListAllTables {...props} />
                        </Route>
                    </Switch>
                </AdminLayout>

            </Switch>
        </BrowserRouter>
    )
}