import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { getAllTables, getTableByCategory, removeTables } from "../../../api/TablesAPI";
import Search from "../../../components/admin/Search";



export default function ListAllTables(props) {
    const [Tables, setTables] = useState([]);
    const pageName = "table";
    const status = ["Đang sử dụng","Trống"];
    const { id } = useParams();

    useEffect(() => {
        const getTables = async () => {
            if (!id) {
                try {
                    const { data } = await getAllTables();
                    setTables(data);
                } catch (error) {
                    console.log("Error getTables " + error);
                }
            } else {
                try {
                    const { data } = await getTableByCategory(id);
                    setTables(data);
                    console.log(data);
                } catch (error) {
                    console.log("Error getTables " + error);
                }
            }

        }
        getTables();
    }, []);
    const onremoveTables = async (id) => {
        const check = window.confirm('Bạn có chắc muốn xóa table #' + id + " ?");
        if (check) {
            try {
                await removeTables(id);
                const newTable = Tables.filter((item) => item.id !== id);
                setTables(newTable);
            } catch (error) {
                console.log(error);
            }
            alert("Đã xóa bàn #" + id);
        }
    }
    const columns = [{
        Header: props => <th className="text-info">ID</th>,
        accessor: 'id',
        cell: props => <td>{props.value}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Tên</th>,
        accessor: 'name',
        Cell: props => <td>{props.value}</td>
    }
        , {
        Header: props => <th className="col d-flex justify-content-center text-info">Trạng thái</th>,
        accessor: 'status',
        Cell: props => {
            if(props.value == "Trống"){
                return <td className="text-success">{props.value}</td>
            }if(props.value == "Đang sử dụng"){
                return <td className="text-danger">{props.value}</td>
            }
        } 
    }
        , {
        Header: props => <th className="col d-flex justify-content-center text-info">Tên thể loại</th>,
        accessor: 'categoryId',
        Cell: props => <td>{props.value.name}</td>
    }
        , {
        Header: props => <th className="col d-flex justify-content-center text-info">Ngày tạo</th>,
        accessor: 'createdAt',
        Cell: props => <td className="col d-flex justify-content-center">{props.value.split("T")[0]}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Ngày sửa</th>,
        accessor: 'updatedAt',
        Cell: props => <td className="col d-flex justify-content-center">{props.value.split("T")[0]}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Hành động</th>,
        accessor: 'id',
        Cell: props => <td className="col d-flex justify-content-center">
            <Link
                className="btn btn-primary btn-sm ms-1"
                to={`/admin/TablesAdd/${props.value}`}
            >
                Sửa
            </Link>
            <button
                className="btn btn-danger btn-sm ms-1"
                onClick={() => onremoveTables(props.value)}
            >
                Xóa
            </button>
        </td>
    }
    ]
    const customTrGroupComponent = (props) => {
        console.log("table ", props);
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
        setTables(childData);
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
                                    <h4 className="mb-3">Danh sách bàn</h4>
                                    <p class="mb-0">Xem danh sách bàn tại đây</p>
                                </div>
                                <a href="/admin/TablesAdd" className="btn btn-primary add-list"><i
                                    className="las la-plus mr-3"></i>Thêm bàn</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <ReactTable
                                    data={Tables}
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
                                        <h3 className="mb-3">Bàn</h3>
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