import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { AddFoods, getOneFoods } from "../../../api/FoodsAPI";
import { useParams } from "react-router-dom";
const CreateFoods = (props) => {
    const [inputMultipart, setInputMultipart] = useState(true);
    const changeMultipart = () => {
        setInputMultipart(!inputMultipart);
    }
    const history = useNavigate();
    const [btnTile,setBtnTile] = useState("Thêm món");
    const {id} = useParams();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const {categoryId,setcategoryId} = useParams();
    const {price,setprice} = useParams();
    const [status, setStatus] = useState("Sẵn sàng");
    const [description, setDescription] = useState("");
    useEffect(() => {
        const getFoods = async () => {
            try {
                if(id){
                    const { data } = await getOneFoods(id);
                    setBtnTile("Sửa món");
                    setcategoryId(data.categoryId);
                    setImage(data.image);
                    setName(data.name);
                    setprice(data.price);
                    setStatus(data.status);
                    setDescription(data.description);
                    console.log(data);
                }
            } catch (error) {
                console.log("Error getFoods " + error);
            }
        }
        getFoods();
    }, []);
    const getImage = (e) => {
        setImage(e.target.value);
    }
    const getName = (e) => {
        setName(e.target.value);
    }
    const getcategoryId = (e) => {
        setcategoryId(e.target.value);
    }
    const getprice = (e) => {
        setprice(e.target.value);
    }
    const getStatus = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }
    const getDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data1 = { id ,image ,categoryId, name ,price, status , description};
        const {data} = await AddFoods(data1);
        if(id){
            alert("Sửa thành công món #" + data.id);
        }else{
            alert("Thêm thành công món #" + data.id);
        }
        clearForm();
        const check = window.confirm('Bạn có muốn về trang danh sách không ?');
        if (check) {
            history("/admin/ListFoods");
        }
    }
    const clearForm = () => {
        setImage("");
        setName("");
        setStatus("sẵn sàng");
        setDescription("");
        setcategoryId("");
        setprice("");
    }
    const renderForm = () => {
        if (inputMultipart) {
            return (
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Chọn Ảnh</label>
                        <input type="file" className="form-control image-file" name="image" id="image"
                            accept="../image/*"
                            required />
                        <a className="text-info" onClick={() => changeMultipart()}>hoặc thêm link ảnh</a>
                    </div>
                </div>
            )
        } if (!inputMultipart) {
            return (
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Thêm link Ảnh</label>
                        <input type="text" className="form-control image-file" name="image" id="image" onChange={getImage} required value={image} />
                        <a className="text-info" onClick={() => changeMultipart()}>hoặc chọn ảnh từ máy</a>
                    </div>
                </div>
            )
        }
    }

    return (
            <div className="content-page">
                <div className="container-fluid add-form-list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                       {!id &&  <h4 className="card-title">Thêm món</h4>}
                                       {id &&  <h4 className="card-title">Sửa món</h4>}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} data-toggle="validator">
                                        <div className="row">
                                            {renderForm()}
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Tên món</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tên món ở đây !" name="name" id="name"
                                                        required onChange={getName} value={name}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>ID món</label>
                                                    <input type="text" class="form-control" placeHolder="Điền ID món ở đây !" name="categoryId" id="categoryId"
                                                        required onChange={getcategoryId} value={categoryId}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Giá</label>
                                                    <input type="text" class="form-control" placeHolder="Điền giá món ở đây !" name="price" id="price"
                                                        required onChange={getprice} value={price}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3" >
                                                <div className="form-group">
                                                    <label>Trạng thái</label>
                                                    <select name="status" className="form-control" onChange={getStatus} value={status}>
                                                        <option className="text-success" value="Sẵn sàng">Sẵn sàng</option>
                                                        <option className="text-secondary" value="Ẩn" >Ẩn</option>
                                                    </select>
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
export default CreateFoods;