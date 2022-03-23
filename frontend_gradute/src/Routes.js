import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ListCategoryFoods from "./pages/admin/categoryFoods/list";

export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <AdminLayout path="/admin">
                    <Switch>
                        <Route exact path="/admin/categoryFoods">
                            <ListCategoryFoods {...props} />
                        </Route>
                    </Switch>
                </AdminLayout>
            </Switch>
        </BrowserRouter>
    )
}