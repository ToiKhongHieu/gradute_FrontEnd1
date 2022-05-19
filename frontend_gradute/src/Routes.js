import { BrowserRouter, Route, Switch} from "react-router-dom";
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
import ListVoucher from "./pages/admin/Vouchers/list";
import CreateVoucher from "./pages/admin/Vouchers/Add";
import Signin from "./pages/admin/signIn";
import AdminRoute from "./auth/adminRoute";

export default function Routess(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login"><Signin {...props} /></Route>
            </Switch>
            <AdminRoute path="/admin">
                <AdminLayout >
                    <Switch>
                        {/*loại món */}
                        <Route exact path="/admin/categoryFoods"  ><ListCategoryFoods {...props} /></Route>
                        <Route exact path="/admin/categoryFoodAdd" ><AddCategoryFood {...props} /></Route>
                        <Route exact path="/admin/CategoryFoodEdit/:id" ><AddCategoryFood {...props} /></Route>
                        {/*loại bàn */}
                        <Route exact path="/admin/categorytable" ><ListCategoryTable {...props} /> </Route>
                        <Route exact path="/admin/categorytableEdit/:id" ><AddCategoryTable {...props} /></Route>
                        <Route exact path="/admin/categorytableadd" ><AddCategoryTable {...props} /></Route>
                        {/*user */}
                        <Route exact path="/admin/ListUsers" ><ListAllUsers {...props} /></Route>
                        <Route exact path="/admin/addUsers"><CreateUsers {...props} /></Route>
                        <Route exact path="/admin/addUsers/:id"><CreateUsers {...props} /></Route>
                        {/* bàn */}
                        <Route exact path="/admin/TablesAdd"><CreateTables {...props} /></Route>
                        <Route exact path="/admin/TablesAdd/:id"><CreateTables {...props} /></Route>
                        <Route path="/admin/ListTables" ><ListAllTables {...props} /></Route>
                        <Route path="/admin/ListTables/:id" ><ListAllTables {...props} /></Route>
                        {/* dashboard */}
                        <Route exact path="/admin"><Dashboard {...props} /></Route>
                        <Route exact path="/admin/FoodsAdd"><CreateFoods {...props} /></Route>
                        <Route exact path="/admin/FoodssAdd/:id"><CreateFoods {...props} /></Route>
                        <Route path="/admin/ListFoods"><ListAllFoods {...props} /></Route>
                        {/* Vouchers */}
                        <Route exact path="/admin/voucheradd"><CreateVoucher {...props} /></Route>
                        <Route exact path="/admin/voucheradd/:id"><CreateVoucher {...props} /></Route>
                        <Route path="/admin/listvouchers"><ListVoucher {...props} /></Route>
                    </Switch>
                </AdminLayout>
            </AdminRoute>
        </BrowserRouter>

    )
}