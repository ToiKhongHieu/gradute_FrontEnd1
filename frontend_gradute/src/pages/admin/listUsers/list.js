import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { getAllUsers } from "../../../api/UsersAPI";


export default function ListAllUsers(props) {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await getAllUsers();
                setUsers(data);
                console.log(data);
            } catch (error) {
                console.log("Error getUsers " + error);
            }
        }
        getUsers();
    }, []);
    const columns = [{
        Header: props => <th className="col d-flex justify-content-center text-info">ID</th>,
            accessor: 'id' 
        }, {
            Header: props => <th className="col d-flex justify-content-center text-info">UsersName</th>,
            accessor: 'username',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">Name</th>,
            accessor: 'name',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">ISFEMALE</th>,
            accessor: 'isfemale',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">PHONENUMBER</th>,
            accessor: 'phonenumber',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">CMND</th>,
            accessor: 'cmnd',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">DATEOFBIRTH</th>,
            accessor: 'dateofbirth',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">ADDRESS</th>,
            accessor: 'address',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">EMAIL</th>,
            accessor: 'eamil',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">ROLE</th>,
            accessor: 'role',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">SALARY</th>,
            accessor: 'salary',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">BLOCKED</th>,
            accessor: 'blocked',
            Cell: props => <td>{props.value}</td> 
        }
        , {
            Header: props => <th className="col d-flex justify-content-center text-info">CONFIRMED</th>,
            accessor: 'confirmed',
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
        },{
            Header: props => <th className="col d-flex text-info">Hành động</th>,
            accessor: 'id',
            Cell: props => <td className="text-right justify-content-center">
            <Link
                className="btn btn-primary btn-sm ms-1"
                to={`/admin/category/${props.value}/edit`}
            >
                Sửa
            </Link>
         
        </td>
        }
    ]
    const customTrGroupComponent = (props) => {
        console.log("props",props);
        var extra_style = null;
        if (props.viewIndex % 2 != 0 && props.viewIndex) {
          extra_style = {
            backgroundColor: '#F0FFFO'
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
                                    <h4 className="mb-3">Danh sách người dùng</h4>
                                    <p class="mb-0">Xem danh người dùng tại đây</p>
                                </div>
                                <a href="/admin/addUsers" className="btn btn-primary add-list"><i
                                    className="las la-plus mr-3"></i>Thêm người dùng</a>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="table-responsive rounded mb-3">
                                <ReactTable
                                    data={Users}
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