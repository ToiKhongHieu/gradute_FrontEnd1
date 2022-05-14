import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { AddVoucher, getOneVoucher } from "../../../api/VoucherAPI";
import { useParams } from "react-router-dom";
const CreateVoucher = (props) => {

    const history = useNavigate();
    const [btnTile, setBtnTile] = useState("Thêm voucher");
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [starttime, setStartTime] = useState(null);
    const [endtime, setEndTime] = useState(null);
    const [amount, setAmount] = useState(0);
    const [status, setStatus] = useState("Đã hết hạn");
    const [today, setToday] = useState(null);
    useEffect(() => {
        const getVoucher = async () => {
            try {
                var today = new Date();
                setToday(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
                if (id) {
                    const { data } = await getOneVoucher(id);
                    setBtnTile("Sửa Voucher");
                    setTitle(data.title);
                    setContent(data.content);
                    setCode(data.code);
                    setDiscount(data.discount);
                    setStartTime(data.starttime);
                    setEndTime(data.endtime);
                    setAmount(data.amount)
                    console.log(data);
                }
            } catch (error) {
                console.log("Error getVouchers " + error);
            }
        }
        getVoucher();
    }, []);



    const getTitle = (e) => {
        setTitle(e.target.value);
    }
    const getContent = (e) => {
        setContent(e.target.value);
    }
    const getCode = () => {
        let r = Math.random().toString(36).substring(7);
        let m = Math.random().toString(36).substring(7);
        let h = Math.random().toString(36).substring(7);
        let p = Math.random().toString(36).substring(7);
        setCode(r + m + h + p);
    }
    const getDiscount = (e) => {
        setDiscount(e.target.value);
    }
    const getStartTime = (e) => {
        setStartTime(e.target.value);
    }
    const getEndTime = (e) => {
        setEndTime(e.target.value);
    }
    const getAmount = (e) => {
        setAmount(e.target.value);
    }
    useEffect(() => {
        const getStatus = async () => {
            if (today && starttime && endtime) {
                if (new Date(today).getTime() < new Date(starttime).getTime()) {
                    await setStatus("Chưa phát hành");
                } else if (new Date(today).getTime() >= new Date(starttime).getTime()) {
                    if (new Date(today).getTime() <= new Date(endtime).getTime()) {
                        await setStatus("Hiện hành");
                    }
                } 
            }

        }
        getStatus();
    }, [starttime, endtime]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("status", status);
        const data1 = { id, title, content, status, code, discount, starttime, endtime, amount };
        if(starttime && endtime && new Date(endtime).getTime() > new Date(starttime).getTime()){
            await AddVoucher(data1);
            if (id) {
                alert("Sửa thành công Voucher #" + id);
            } else {
                alert("Thêm thành công Voucher " + "'" + data1.title + "'");
            }
            // clearForm();
            const check = window.confirm('Bạn có muốn về trang danh sách không ?');
            if (check) {
                history("/admin/listvouchers");
            }
        }
    }
    const clearForm = () => {
        setTitle("");
        setContent("");
        setCode("");
        setDiscount(0);
        setStartTime(null);
        setEndTime(null);
        setAmount(0);
    }

    return (
        <div className="content-page">
            <div className="container-fluid add-form-list">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    {!id && <h4 className="card-title">Thêm Voucher</h4>}
                                    {id && <h4 className="card-title">Sửa Voucher</h4>}
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <label>Tiêu đề</label>
                                                <input type="text" class="form-control" placeHolder="Điền tiêu đề Voucher ở đây !" name="title" id="title"
                                                    required onChange={getTitle} value={title} />
                                                <div className="help-block with-errors">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <label>nội dung</label>
                                                <textarea data-length="20" class="form-control" id="content" rows="3"
                                                    placeholder="Nội dung" name="content" onChange={getContent} value={content}></textarea>
                                                <div className="help-block with-errors">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" aria-label="Text input with dropdown button" value={code} name="code" id="code" disabled />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-success dropone dropdown-toggle" type="button" onClick={getCode}
                                                            aria-haspopup="true" aria-expanded="false">Tạo mã</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <label>Chiết khấu (%)</label>
                                                <input type="number" class="form-control" placeHolder="Điền giá trị chiết khấu ở đây !" name="discount" id="discount"
                                                    required onChange={getDiscount} value={discount} max={100} min={0} />

                                                <div className="help-block with-errors">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3 mr-3">
                                            <div className="form-group">
                                                <label>Số lượng</label>
                                                <input type="number" class="form-control" placeHolder="Điền số lượng Voucher ở đây !" name="amount" id="amount"
                                                    required onChange={getAmount} value={amount} min={0} />
                                                <div className="help-block with-errors">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3 mr-3">
                                            <div className="form-group">
                                                <label>Ngày hiệu lực</label>
                                                <input type="date" class="form-control" name="startTime" id="startTime"
                                                    required onChange={getStartTime} value={starttime} defaultValue={starttime} />
                                                <div className="help-block with-errors">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <label>Ngày hết hạn</label>
                                                <input type="date" class="form-control" name="endTime" id="endTime"
                                                    required onChange={getEndTime} value={endtime} />
                                                <div className="help-block with-errors">
                                                    {
                                                        starttime && endtime && new Date(endtime).getTime() < new Date(starttime).getTime() && <span className='text-danger'>Vui lòng nhập Ngày hết hạn {">"} Ngày hiệu lực</span>
                                                        }
                                                </div>
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
export default CreateVoucher;
