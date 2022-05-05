
import { useEffect, useState } from "react";
import { AddUsers, getOneUsers } from "../../../api/UsersAPI";
import { useParams } from "react-router-dom";
const CreateTables = (props) => {
    const [btnTile,setBtnTile] = useState("Thêm người dùng");
    const {id} = useParams();
    const [username, setusername] = useState("");
    const [name, setName] = useState("");
    const [isfemale, setisfemale] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [cmnd, setcmnd] = useState("");
    const [dateofbirth, setdateofbirth] = useState("");
    const [address, setaddress] = useState("");
    const [eamil, seteamil] = useState("");
    const [password, setpassword] = useState("");
    const [role, setrole] = useState("");
    const [salary, setsalary] = useState("");
    const [blocked, setblocked] = useState("");
    const [confirmed, setconfirmed] = useState("");
    useEffect(() => {
        const getUsers = async () => {
            try {
                if(id){
                    const { data } = await getOneUsers(id);
                    setBtnTile("Sửa thông tin nhân viên");
                    setusername(data.username);
                    setName(data.name);
                    setisfemale(data.isfemale);
                    setphonenumber(data.phonenumber);
                    setcmnd(data.cmnd);
                    setdateofbirth(data.dateofbirth);
                    setaddress(data.address);
                    seteamil(data.eamil);
                    setpassword(data.password);
                    setrole(data.role);
                    setsalary(data.salary);
                    setblocked(data.blocked);
                    setconfirmed(data.confirmed);                  
                    console.log(data);
                }
            } catch (error) {
                console.log("Error Users " + error);
            }
        }
        getUsers();
    }, []);
    const getusersname = (e) => {
        setusername(e.target.value);
    }
    const getName = (e) => {
        setName(e.target.value);
    }
    const getisfemale = (e) => {
        setisfemale(e.target.value);
    }
    const getphonenumber = (e) => {
        setphonenumber(e.target.value);
    }
    const getcmnd = (e) => {
        setcmnd(e.target.value);
    }
    const getdateofbirth = (e) => {
        setdateofbirth(e.target.value);
    }
    const getaddress = (e) => {
        setaddress(e.target.value);
    }
    const geteamil = (e) => {
        seteamil(e.target.value);
    }
    const getpassword = (e) => {
        setpassword(e.target.value);
    }
    const getrole = (e) => {
        setrole(e.target.value);
    }
    const getsalary = (e) => {
        setsalary(e.target.value);
    }
    const getblocked = (e) => {
        setblocked(e.target.value);
    }
    const getconfirmed = (e) => {
        setconfirmed(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data1 = { id , name , isfemale, phonenumber, cmnd, dateofbirth, address, eamil, password, role, salary, blocked, confirmed};
        const {data} = await AddUsers(data1);
        if(id){
            alert("Sửa thành công người dùng #" + data.id);
        }else{
            alert("Thêm thành công người dùng #" + data.id);
        }
        clearForm();
    }
    const clearForm = () => {
        setusername("");
        setName("");
        setphonenumber("");
        setcmnd("");
        setdateofbirth("");
        setaddress("");
        seteamil("");
        setpassword("");
        setrole("");
        setsalary("");
     
    }
   
    return (
            <div className="content-page">
                <div className="container-fluid add-form-list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                       {!id &&  <h4 className="card-title">Thêm người dùng</h4>}
                                       {id &&  <h4 className="card-title">Chỉnh sửa thông tin người dùng</h4>}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} data-toggle="validator">
                                        <div className="row">
                                        <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Tên tài khoản</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tài khoản    !" name="username" id="username"
                                                        required onChange={getusersname} value={username}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Tên người dùng</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tên bàn    !" name="name" id="name"
                                                        required onChange={getName} value={name}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3" >
                                                <div className="form-group">
                                                    <label>Giới tính</label>
                                                    <select name="isfemale" className="form-control" onChange={getisfemale} value={isfemale}>
                                                        <option  className="text-success" value="Nam">Nam</option>
                                                        <option  className="text-success" value="Nữ">Nữ</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                    <label>Số điện thoại</label>
                                                    <input type="text" class="form-control" placeHolder="số điện thoại    !" name="phonenumber" id="phonenumber"
                                                        required onChange={getphonenumber} value={phonenumber}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                            </div>
                                            <div className="form-group">
                                                    <label>CMND</label>
                                                    <input type="text" class="form-control" placeHolder="Chứng minh nhân dân    !" name="cmnd" id="cmnd"
                                                        required onChange={getcmnd} value={cmnd}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                            </div>
                                            <div className="form-group">
                                                    <label>Ngày sinh</label>
                                                    <input type="text" class="form-control" placeHolder="ngày sinh    !" name="dateofbirth" id="dateofbirth"
                                                        required onChange={getdateofbirth} value={dateofbirth}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                            </div>
                                            <div className="form-group">
                                                    <label>Địa chỉ</label>
                                                    <input type="text" class="form-control" placeHolder="địa chỉ    !" name="address" id="address"
                                                        required onChange={getaddress} value={address}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                            </div>
                                            <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="text" class="form-control" placeHolder="địa chỉ Email    !" name="eamil" id="eamil"
                                                        required onChange={geteamil} value={eamil}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                            </div>
                                            <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="password" class="form-control" placeHolder="mật khẩu   !" name="password" id="password"
                                                        required onChange={getpassword} value={password}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                            </div>
                                            <div className="form-group">
                                                    <label>Vai trò</label>
                                                    <select name="role" className="form-control" onChange={getrole} value={role}>
                                                        <option className="text-success" value="chủ của hàng">chủ của hàng</option>
                                                        <option className="text-success" value="quản lý">quản lý</option>
                                                        <option className="text-success" value="nhân viên">nhân viên</option>
                                                        <option className="text-success" value="thu ngân">thu ngân</option>
                                                        <option className="text-success" value="lễ tân">lễ tân</option>
                                                    </select>
                                            </div>
                                            <div className="form-group">
                                                    <label>Salary</label>
                                                    <input type="salary" class="form-control" placeHolder="Salary   !" name="salary" id="salary"
                                                        required onChange={getsalary} value={salary}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                            </div>
                                            <div className="col-md-12 mt-3" >
                                                <div className="form-group">
                                                    <label>Trạng thái</label>
                                                    <select name="blocked" className="form-control" onChange={getblocked} value={blocked}>
                                                        <option className="text-success" value="Active">Đang sử dụng</option>
                                                        <option className="text-secondary" value="Ẩn" >Ẩn</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3" >
                                                <div className="form-group">
                                                    <label>Xác nhận</label>
                                                    <select name="confirmed" className="form-control" onChange={getconfirmed} value={confirmed}>
                                                        <option className="text-success" value="đã xác nhận">Đã xác nhận</option>
                                                        <option className="text-secondary" value="chưa xác nhận" >chưa xác nhận</option>
                                                    </select>
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
