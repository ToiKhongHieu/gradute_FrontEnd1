import { useEffect, useState } from "react";
import { AddTables, getIdTables } from "../../../api/TablesAPI";
import { getAllCategoryTable } from "../../../api/CategoryTableAPI";
const CreateTables = (props) => {
    const [createdAt, setcreatedAt] = useState();
    const [btnTile, setBtnTile] = useState("Thêm bàn");
    const id = window.location.toString().split("TablesAdd/")[1];
    const [name, setName] = useState("");
    const [status, setStatus] = useState("còn bàn");
    const [categoryId, setcategoryId] = useState(null);
    const [categoryTable, setCategoryTable] = useState([]);
    useEffect(() => {
        const getTables = async () => {
            try {
                if (id) {
                    const { data } = await getIdTables(id);
                    setBtnTile("Sửa bàn");
                    setcreatedAt(data.createdAt);
                    setName(data.name);
                    setStatus(data.status);
                    setcategoryId(data.categoryId.id);
                    console.log("haha ", data);
                }
            } catch (error) {
                console.log("Error Table " + error);
            }
        }
        getTables();
    }, []);

    useEffect(() => {
        const getCategoryTables = async () => {
            try {
                const { data } = await getAllCategoryTable();
                await setCategoryTable(data);
            } catch (error) {
                console.log("Error categorytable " + error);
            }
        }
        getCategoryTables();
    }, []);
    const getName = (e) => {
        setName(e.target.value);
    }
    const getStatus = (e) => {
        setStatus(e.target.value);
    }
    const getcategoryId = async (e) => {
        setcategoryId(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data1 = { id, name, status, categoryId, createdAt };
        const { data } = await AddTables(data1);
        if (id) {
            alert("Sửa thành công bàn #" + data.id);
        } else {
            alert("Thêm thành công bàn #" + data.id);
        }
        clearForm();
        const check = window.confirm('Bạn có muốn về trang danh sách không ?');
        if (check) {
            window.location.replace("/admin/ListTables");
        }
    }
    const clearForm = () => {
        setName("");
        setStatus("sẵn sàng");
        setcategoryId(null);
    }

    return (
        <div className="content-page">
            <div className="container-fluid add-form-list">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    {!id && <h4 className="card-title">Thêm bàn</h4>}
                                    {id && <h4 className="card-title">Sửa bàn</h4>}
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <label>Tên bàn</label>
                                                <input type="text" class="form-control" placeHolder="Điền tên bàn    !" name="name" id="name"
                                                    required onChange={getName} value={name} />
                                                <div className="help-block with-errors">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3" >
                                            <div className="form-group">
                                                <label>Trạng thái</label>
                                                <select name="status" className="form-control" onChange={getStatus} value={status}>
                                                    <option className="text-primary" value={null}>chọn</option>
                                                    <option className="text-success" value="đang sử dụng">đang sử dụng</option>
                                                    <option className="text-secondary" value="còn bàn" >còn bàn</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3" >
                                            <div class="form-group">
                                                <label>Thể loại bàn</label>
                                                <select className="form-control form-control-sm mb-3" onChange={getcategoryId} value={categoryId}>
                                                    <option className="text-primary" value={null}>Chọn</option>
                                                    {
                                                        categoryTable.map((item) => (
                                                            <option value={item.id}>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                    <button type="submit" className="btn btn-primary mr-2">{btnTile}</button>
                                    <button type="reset" onClick={clearForm} className="btn btn-danger">Cài lại</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateTables;
