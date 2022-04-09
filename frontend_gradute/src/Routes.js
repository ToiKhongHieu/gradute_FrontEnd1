import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AddCategoryFood from "./pages/admin/categoryFoods/Add";
import ListCategoryFoods from "./pages/admin/categoryFoods/list";
<<<<<<< HEAD
import ListAllUsers from "./pages/admin/listUsers/list";
import ListAllTables from "./pages/admin/listTables/list";
=======
import Dashboard from "./pages/admin/Dashboard";
>>>>>>> 2eff6986cb14af51e266b135d90bd6a3aa5b679a

export default function Routess(props) {
    return (
        <BrowserRouter>
<<<<<<< HEAD
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
=======
            <AdminLayout>
                <Routes>
                    <Route exact path="/admin/categoryFoods" element={<ListCategoryFoods {...props} />}/>
                    <Route exact path="/admin/categoryFoodAdd" element={<AddCategoryFood {...props} />} />
                    <Route exact path="/admin/CategoryFoodEdit/:id" element={<AddCategoryFood {...props} />} />
                    <Route exact path="/" element={<Dashboard {...props} />} />
                </Routes>
            </AdminLayout>
>>>>>>> 2eff6986cb14af51e266b135d90bd6a3aa5b679a
        </BrowserRouter>
    )
}