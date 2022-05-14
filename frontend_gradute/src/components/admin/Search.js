import { useEffect, useState } from "react";
import { getAllCategoryFood } from "../../api/CategoryFoodsAPI";
import { getAllCategoryTable } from "../../api/CategoryTableAPI";
import { getAllFoods } from "../../api/FoodsAPI";
import { getAllTables } from "../../api/TablesAPI";
import { getAllVouchers } from "../../api/VoucherAPI";
export default function Search(props) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [discount, setDiscount] = useState(0);
    const [lable, setLable] = useState("Tên");
    const [code, setCode] = useState("");
    const [new1, setNew1] = useState([]);
    const [new2, setNew2] = useState([]);
    const [data, setData] = useState([]);
    const [starttime, setStartTime] = useState(null);
    const [endtime, setEndTime] = useState(null);
    const onSearch = async () => {
        const newD1 = await data.filter((item) => item.name.indexOf(name) != -1);
        setNew1(newD1);
        if (props.status !== undefined) {
            const newD2 = await newD1.filter((item) => item.status.indexOf(status) != -1);
            props.parentCallback(newD2);
        } else {
            props.parentCallback(new1);
        }
    }
    const onSearchVoucher = async () => {
        const newD1 = await data.filter((item) => item.title.indexOf(name) != -1);
        const newD2 = await newD1.filter((item) => item.status.indexOf(status) != -1);
        const newD3 = await newD2.filter((item) => item.code.indexOf(code) != -1);
        await setNew1(newD3);
        if (discount && discount !== 0) {
            const newD4 = await newD3.filter((item) => item.discount == discount);
            await setNew1(newD4);
        }
        props.parentCallback(new1);
    }
    const getName = (e) => {
        setName(e.target.value);
    }
    const getStatus = (e) => {
        setStatus(e.target.value);
    }
    const getDiscount = (e) => {
        setDiscount(e.target.value);
    }
    const getCode = (e) => {
        setCode(e.target.value);
    }
    useEffect(() => {
        const getData = async () => {
            try {
                if (props.data === "categoryfood") {
                    const { data } = await getAllCategoryFood();
                    setData(data);
                    console.log(data);
                }
                if (props.data === "food") {
                    const { data } = await getAllFoods();
                    setData(data);
                    console.log(data);
                }
                if (props.data === "categoryTable") {
                    const { data } = await getAllCategoryTable();
                    setData(data);
                    console.log(data);
                } if (props.data === "table") {
                    const { data } = await getAllTables();
                    setData(data);
                    console.log(data);
                } if (props.data === "vouchers") {
                    setLable("Tiêu đề");
                    const { data } = await getAllVouchers();
                    setData(data);
                    console.log(data);
                }
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getData();
    }, [])
    const getStartTime = (e) => {
        setStartTime(e.target.value);
    }
    const getEndTime = (e) => {
        setEndTime(e.target.value);
    }
    const renderStatus = () => {
        if (props.status !== undefined && props.data !== "vouchers") {
            return (
                <div className="col">
                    <div class="form-group">
                        <label className="form-lable">Trạng thái</label>
                        <select class="form-control form-control-sm mb-3" value={status} onChange={getStatus}>
                            <option className="text-primary" value="">chọn</option>
                            <option className="text-success" value={props.status[0]}>{props.status[0]}</option>
                            <option className="text-muted" value={props.status[1]}>{props.status[1]}</option>
                        </select>
                    </div>
                </div>
            )
        } if (props.data === "vouchers") {
            return (
                <>
                    <div className="col">
                        <div class="form-group">
                            <label className="form-lable">Mã</label>
                            <input type="text" class="form-control form-control-sm" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={getCode} value={code} />
                        </div>
                    </div>
                    <div className="col">
                        <div class="form-group">
                            <label className="form-lable">Trạng thái</label>
                            <select class="form-control form-control-sm mb-3" value={status} onChange={getStatus}>
                                <option className="text-primary" value="">chọn</option>
                                <option className="text-primary" value={props.status[0]}>{props.status[0]}</option>
                                <option className="text-success" value={props.status[1]}>{props.status[1]}</option>
                                <option className="text-muted" value={props.status[2]}>{props.status[2]}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div class="form-group">
                            <label className="form-lable">Chiết khấu</label>
                            <input type="number" class="form-control form-control-sm" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={getDiscount} value={discount} />
                        </div>
                    </div>
                </>
            )
        }
    }
    const renderButton = () => {
        if (lable === "Tên") {
            return <button className="btn-muted" onClick={onSearch} type="button">Tìm kiếm</button>
        } else {
            return <button className="btn-muted" onClick={onSearchVoucher} type="button">Tìm kiếm</button>
        }
    }
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h5 className="card-title text-muted">Tìm kiếm</h5>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <lable className="form-lable">{lable}</lable>
                                    <input type="text" class="form-control form-control-sm mt-2" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={getName} value={name} />
                                </div>
                            </div>
                            {renderStatus()}
                            <div className="" style={{ "margin-top": "32px" }}>
                                {renderButton()}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}