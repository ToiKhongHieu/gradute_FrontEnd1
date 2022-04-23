import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { getAllCategoryTable, removeCategoryTable } from "../../../api/CategoryTableAPI";


export default function ListCategoryTable(props) {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const getCategory = async () => {
            try {
                const {data} = await getAllCategoryTable();
                await setCategories(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getCategory();
    }, []);

    const columns = [{
        Header: props => <th className="col d-flex justify-content-center text-info">Loại bàn</th>,
            accessor: 'categoryName' 
        }, {
            Header: props => <th className="col d-flex justify-content-center text-info">Mô tả</th>,
            accessor: 'description',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">Ngày tạo</th>,
            accessor: 'createdAt' ,
            Cell: props => <td className="col d-flex justify-content-center">{props.value.split("T")[0]}</td> 
        }, {
            Header: props => <th className="col d-flex justify-content-center text-info">Ngày sửa</th>,
            accessor: 'updatedAt',
            Cell: props => <td className="col d-flex justify-content-center">{props.value.split("T")[0] }</td>
        }, {
            Header: props => <th className="col d-flex text-info">Hành động</th>,
            accessor: 'id',
            Cell: props => <td className="text-right justify-content-center">
            <Link
                className="btn btn-primary btn-sm ms-1"
                to={`/admin/categorytableEdit/${props.value}`}
            >
                Sửa
            </Link>
            <button
                className="btn btn-danger btn-sm ms-1"
                onClick={() => onRemoveCate(props.value)}
            >
                Xóa
            </button>
        </td>
        }
    ]

    const onRemoveCate = async (id) => {
        const check = window.confirm('Bạn có chắc muốn xóa thể loại #' + id + " ?");
        if (check) {
            try {
                await removeCategoryTable(id);
                const newProducts = categories.filter((item) => item.id !== id);
                setCategories(newProducts);
            } catch (error) {
                console.log(error);
            }
            alert("Đã xóa thể loại #" + id);
        }
    }
    const customTrGroupComponent = (props) => {
        console.log("props",props);
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

    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Danh sách thể loại bàn</h4>
                                    <p class="mb-0">Xem danh sách thể loại bàn tại đây</p>
                                </div>
                                <a href="/admin/categorytableadd" className="btn btn-primary add-list"><i
                                    className="las la-plus mr-3"></i>Thêm thể loại bàn</a>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="table-responsive rounded mb-3">
                                <ReactTable
                                    data={categories}
                                    columns={columns}
                                    defaultPageSize={5}
                                    pageSizeOptions = {[5,10,15]}  
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