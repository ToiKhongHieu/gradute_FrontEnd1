
import { useEffect, useState } from "react";
import { AddTables, getIdTables } from "../../../api/TablesAPI";
import { useParams } from "react-router-dom";
const CreateTables = (props) => {
    const [createdAt , setcreatedAt] = useState();
    const [btnTile,setBtnTile] = useState("Thêm bàn");
    const {id} = useParams();
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Sẵn sàng");
    const [categoryId, setcategoryId] = useState("");
    useEffect(() => {
        const getTables = async () => {
            try {
                if(id){
                    const { data } = await getIdTables(id);
                    setBtnTile("Sửa bàn");
                    setcreatedAt(data.createdAt);
                    setName(data.name);
                    setStatus(data.status);
                    setcategoryId(data.description);
                    console.log(data);
                }
            } catch (error) {
                console.log("Error Table " + error);
            }
        }
        getTables();
    }, []);
    const getName = (e) => {
        setName(e.target.value);
    }
    const getStatus = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }
    const getcategoryId = (e) => {
        setcategoryId(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data1 = { id , name , status , categoryId , createdAt};
        const {data} = await AddTables(data1);
        if(id){
            alert("Sửa thành công bàn #" + data.id);
        }else{
            alert("Thêm thành công bàn #" + data.id);
        }
        clearForm();
    }
    const clearForm = () => {
        setName("");
        setStatus("sẵn sàng");
        setcategoryId("");
    }
   
    return (
            <div className="content-page">
                <div className="container-fluid add-form-list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                       {!id &&  <h4 className="card-title">Thêm bàn</h4>}
                                       {id &&  <h4 className="card-title">Sửa bàn</h4>}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} data-toggle="validator">
                                        <div className="row">
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Tên bàn</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tên bàn    !" name="name" id="name"
                                                        required onChange={getName} value={name}/>
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
                                            <div className="form-group">
                                                    <label>Thể loại bàn</label>
                                                    <input type="text" class="form-control" placeHolder="Thể loại bàn    !" name="name" id="name"
                                                        required onChange={getcategoryId} value={categoryId}/>
                                                    <div className="help-block with-errors">
                                                    </div>
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
export default CreateTables;
