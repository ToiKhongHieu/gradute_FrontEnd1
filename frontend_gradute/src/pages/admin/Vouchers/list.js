import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllVouchers, removeVoucher } from "../../../api/VoucherAPI";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Search from "../../../components/admin/Search";

export default function ListVoucher(props) {
    const [vouchers, setVouchers] = useState([]);
    const status = ["Chưa phát hành","Hiện hành","Đã hết hạn"];
    const pageName = "vouchers";
    useEffect(() => {
        const getVouchers = async () => {
            try {
                const { data } = await getAllVouchers();
                setVouchers(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getVouchers();
    }, []);

    const onRemoveVoucher = async (id) => {
        const check = window.confirm('Bạn có chắc muốn xóa voucher #' + id + " ?");
        if (check) {
            try {
                await removeVoucher(id);
                const newVouchers = vouchers.filter((item) => item.id !== id);
                setVouchers(newVouchers);
            } catch (error) {
                console.log(error);
            }
            alert("Đã xóa voucher #" + id);
        }
    }

    const columns = [{
        Header: props => <th className="col d-flex justify-content-center text-info">Tiêu đề</th>,
        accessor: 'title',
        Cell: props =>  <td className="col d-flex justify-content-center">{props.value}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Nội dung</th>,
        accessor: 'content',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}</td>
    },  {
        Header: props => <th className="col d-flex justify-content-center text-info">Mã</th>,
        accessor: 'code',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Chiết khấu</th>,
        accessor: 'discount',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}(%)</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Trạng thái</th>,
        accessor: 'status',
        Cell: props =>{
            if(props.value === "Chưa phát hành"){ return <td className="col d-flex justify-content-center text-primary">{props.value}</td>}
            if(props.value === "Hiện hành"){ return <td className="col d-flex justify-content-center text-success">{props.value}</td>}
            if(props.value === "Đã hết hạn"){ return <td className="col d-flex justify-content-center text-muted">{props.value}</td>}
        }
    },{
        Header: props => <th className="col d-flex justify-content-center text-info">Số lượng</th>,
        accessor: 'amount',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}</td>
    },
    // {
    //     Header: props => <th className="col d-flex justify-content-center text-info">Người tạo</th>,
    //     accessor: 'users',
    //     Cell: props => <td className="col d-flex justify-content-center">{props.value.username}</td>
    // },
    {
        Header: props => <th className="col d-flex justify-content-center text-info">Ngày hiệu lực</th>,
        accessor: 'starttime',
        Cell: props => <td className="col d-flex justify-content-center">{props.value.split("T")[0]}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Ngày kết thúc</th>,
        accessor: 'endtime',
        Cell: props => <td className="col d-flex justify-content-center">{props.value.split("T")[0]}</td>
    },  {
        Header: props => <th className="col d-flex justify-content-center text-info">Hành động</th>,
        accessor: 'id',
        Cell: props => <td className="col d-flex justify-content-center">
            <Link
                className="btn btn-primary btn-sm ms-1"
                to={`/admin/voucheradd/${props.value}`}
            >
                Sửa
            </Link>
            <button
                className="btn btn-danger btn-sm ms-1"
                onClick={() => onRemoveVoucher(props.value)}
            >
                Xóa
            </button>
        </td>
    }
    ]
    const customTrGroupComponent = (props) => {
        var extra_style = null;
        if (props.viewIndex % 2 != 0 && props.viewIndex) {
            extra_style = {
                backgroundColor: '#F0FFF0'
            }
        }
        return <div className='rt-tr-group' style={extra_style}>
            {props.children}
        </div>;
    }
    const callbackFunction = (childData)=>{
        setVouchers(childData);
  }
    return (
        <>
            <div className="content-page">
            <Search data={pageName} status={status} parentCallback={callbackFunction}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Danh sách Vouchers</h4>
                                    <p class="mb-0">Xem danh sách Vouchers tại đây</p>
                                </div>
                                <a href="/admin/voucheradd" className="btn btn-primary add-list"><i
                                    className="las la-plus mr-3"></i>Thêm Voucher</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <ReactTable
                                    data={vouchers}
                                    columns={columns}
                                    defaultPageSize={5}
                                    pageSizeOptions={[5, 10, 15]}
                                    getTrGroupProps={(state, rowInfo, column, instance) => rowInfo}
                                    TrGroupComponent={customTrGroupComponent}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="edit-note" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="popup text-left">
                                    <div className="media align-items-top justify-content-between">
                                        <h3 className="mb-3">Product</h3>
                                        <div className="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                    </div>
                                    <div className="content edit-notes">
                                        <div className="card card-transparent card-block card-stretch event-note mb-0">
                                            <div className="card-body px-0 bukmark">
                                                <div
                                                    className="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom">
                                                    <div className="quill-tool">
                                                    </div>
                                                </div>
                                                <div id="quill-toolbar1">
                                                    <p>Virtual Digital Marketing Course every week on Monday, Wednesday and
                                                        Saturday.Virtual Digital Marketing Course every week on Monday</p>
                                                </div>
                                            </div>
                                            <div className="card-footer border-0">
                                                <div className="d-flex flex-wrap align-items-ceter justify-content-end">
                                                    <div className="btn btn-primary mr-3" data-dismiss="modal">Cancel</div>
                                                    <div className="btn btn-outline-primary" data-dismiss="modal">Save</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}