import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AddCategoryFood from "./pages/admin/categoryFoods/Add";
import ListCategoryFoods from "./pages/admin/categoryFoods/list";

export default function Routess(props) {
    return (
        <BrowserRouter>
            <AdminLayout>
                <Routes>
                    <Route exact path="/admin/categoryFoods" element={<ListCategoryFoods {...props} />}/>
                    <Route exact path="/admin/categoryFoodAdd" element={<AddCategoryFood {...props} />} />
                    <Route exact path="/admin/CategoryFoodEdit/:id" element={<AddCategoryFood {...props} />} />
                </Routes>
            </AdminLayout>
        </BrowserRouter>
    )
}