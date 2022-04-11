import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneCategoryTable , AddCategoryTablee} from "../../../api/CategoryTableAPI";
const AddCategoryTable = (props) => {
    const [createdAt , setcreatedAt] = useState();
    const [btnTile,setBtnTile] = useState("Thêm thể loại bàn");
    const {id} = useParams();
    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        const getCategory = async () => {
            try {
                if(id){
                    const { data } = await getOneCategoryTable(id);
                    setBtnTile("Sửa thể loại bàn");
                    setcreatedAt(data.createdAt);
                    setCategoryName(data.CategoryName);
                    setDescription(data.description);
                }
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getCategory();
    }, []);
    const getName = (e) => {
        setCategoryName(e.target.value);
    }
    const getDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data1 = { id  , categoryName  , description , createdAt};
        const {data} = await AddCategoryTablee(data1);
        if(id){
            alert("Sửa thành công thể loại bàn #" + data.id);
        }else{
            alert("Thêm thành công thể loại bàn #" + data.id);
        }
        clearForm();
    }
    const clearForm = () => {
        setCategoryName("");
        setDescription("");
    }
    return (
            <div className="content-page">
                <div className="container-fluid add-form-list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                       {!id &&  <h4 className="card-title">Thêm thể loại bàn</h4>}
                                       {id &&  <h4 className="card-title">Sửa thể loại bàn</h4>}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} data-toggle="validator">
                                        <div className="row">
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Tên thể loại bàn</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tên thể loại bàn ở đây !" name="name" id="name"
                                                        required onChange={getName} value={categoryName}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-label-group mb-3 mt-3">
                                                <textarea data-length="20" class="form-control" id="description" rows="3"
                                                    placeholder="Mô tả" name="description" onChange={getDescription} value={description}></textarea>
                                                <label>Mô tả</label>
                                            </div>
                                        </div>
                                        <button  type="submit" className="btn btn-primary mr-2">{btnTile}</button>
                                        <button type="reset" onClick={clearForm} className="btn btn-danger">Cài lại</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default AddCategoryTable;
