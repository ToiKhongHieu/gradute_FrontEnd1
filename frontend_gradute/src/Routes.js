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
import ListAllFoods from "./pages/admin/listFoods/list";
import CreateFoods from "./pages/admin/listFoods/Add";
import CreateUsers from "./pages/admin/listUsers/Add";
<<<<<<< HEAD
import ListAllPost from "./pages/admin/PostAdmin/list";
import CreatePost from "./pages/admin/PostAdmin/Add";
=======
import AdminRoute from "./auth/adminRoute";
import ListVoucher from "./pages/admin/Vouchers/list";
import CreateVoucher from "./pages/admin/Vouchers/Add";
import Search from "./components/admin/Search";
>>>>>>> 56a0bacacf14b00adcac50a8a395e0f47a088f02

export default function Routess(props) {

    return (
        <BrowserRouter>
            <AdminLayout>
                <Routes>
                    {/*loại món */}
                    <Route exact path="/admin/categoryFoods" element={<ListCategoryFoods {...props} />} />
                    <Route exact path="/admin/categoryFoodAdd" element={<AddCategoryFood {...props} />} />
                    <Route exact path="/admin/CategoryFoodEdit/:id" element={<AddCategoryFood {...props} />} />
                    {/*loại bàn */}
                    <Route exact path="/admin/categorytable" element={<ListCategoryTable {...props} />} />
                    <Route exact path="/admin/categorytableEdit/:id" element={<AddCategoryTable {...props} />} />
                    <Route exact path="/admin/categorytableadd" element={<AddCategoryTable {...props} />} />
                    {/*user */}
                    <Route exact path="/admin/ListUsers" element={<ListAllUsers {...props} />} />
                    <Route exact path="/admin/addUsers" element={<CreateUsers {...props} />} />
                    <Route exact path="/admin/addUsers/:id" element={<CreateUsers {...props} />} />
                    {/* bàn */}
                    <Route exact path="/admin/TablesAdd" element={<CreateTables {...props} />} />
                    <Route exact path="/admin/TablesAdd/:id" element={<CreateTables {...props} />} />
                    <Route path="/admin/ListTables" element={<ListAllTables {...props} />} />
                    <Route path="/admin/ListTables/:id" element={<ListAllTables {...props} />} />
                    {/* dashboard */}
                    <Route exact path="/" element={<Dashboard {...props} />} />
                    <Route exact path="/admin/FoodsAdd" element={<CreateFoods {...props} />} />
<<<<<<< HEAD
                    <Route exact path="/admin/FoodssAdd:/id" element={<CreateFoods {...props} />} />
                    <Route  path="/admin/ListFoods" element={<ListAllFoods {...props} />} />
                     {/* Post */}
                    <Route exact path="/admin/Post" element={<ListAllPost {...props} />} />
                    <Route exact path="/admin/addPost" element={<CreatePost {...props} />} />
                    <Route exact path="/admin/addPost/:id" element={<CreatePost {...props} />} />
=======
                    <Route exact path="/admin/FoodssAdd/:id" element={<CreateFoods {...props} />} />
                    <Route path="/admin/ListFoods" element={<ListAllFoods {...props} />} />
                    {/* Vouchers */}
                    <Route exact path="/admin/voucheradd" element={<CreateVoucher {...props} />} />
                    <Route exact path="/admin/voucheradd/:id" element={<CreateVoucher {...props} />} />
                    <Route path="/admin/listvouchers" element={<ListVoucher {...props} />} />

                    <Route path="/search" element={<Search {...props} />} />

>>>>>>> 56a0bacacf14b00adcac50a8a395e0f47a088f02
                </Routes>
            </AdminLayout>
        </BrowserRouter>
    )
}