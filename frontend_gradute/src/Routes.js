import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AddCategoryFood from "./pages/admin/categoryFoods/Add";
import CreateTables from "./pages/admin/listTables/Add";
import ListCategoryFoods from "./pages/admin/categoryFoods/list";
import ListAllUsers from "./pages/admin/listUsers/list";
import ListAllTables from "./pages/admin/listTables/list";
import Dashboard from "./pages/admin/Dashboard";
import ListCategoryTable from "./pages/admin/CategoryTable/list";
import AddCategoryTable from "./pages/admin/CategoryTable/Add";

export default function Routess(props) {
    
    return (
        <BrowserRouter>
            <AdminLayout>
                <Routes >
                    <Route exact path="/admin/categoryFoods" element={<ListCategoryFoods {...props} />} />
                    <Route exact path="/admin/categorytable" element={<ListCategoryTable {...props} />} />
                    <Route exact path="/admin/categorytableEdit/:id" element={<AddCategoryTable {...props} />} />
                    <Route exact path="/admin/categoryFoodAdd" element={<AddCategoryFood {...props} />} />
                    <Route exact path="/admin/categorytableadd" element={<AddCategoryTable {...props} />} />
                    <Route exact path="/admin/CategoryFoodEdit/:id" element={<AddCategoryFood {...props} />} />
                    <Route exact path="/admin/ListUsers" element={<ListAllUsers {...props} />} />
                    <Route exact path="/admin/TablesAdd" element={<CreateTables {...props} />} />
                    <Route exact path="/admin/TablesAdd:/id" element={<CreateTables {...props} />} />

                    <Route  path="/admin/ListTables" element={<ListAllTables {...props} />}/>
                    <Route exact path="/" element={<Dashboard {...props} />} />categorytableadd                 
                    <Route exact path="/admin/ListTables" element={<ListAllTables {...props} />} />
                    <Route exact path="/" element={<Dashboard {...props} />} />
                </Routes>
            </AdminLayout>
        </BrowserRouter>
    )
}