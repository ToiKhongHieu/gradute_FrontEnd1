import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPost, removePost } from "../../../api/PostAPI";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

export default function ListAllPost(props) {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await getAllPost();
                setPost(data);
                console.log(data);
            } catch (error) {
                console.log("Error Post " + error);
            }
        }
        getPost();
    }, []);

    const onRemoveCate = async (id) => {
        const check = window.confirm('Bạn có chắc muốn xóa bài viết #' + id + " ?");
        if (check) {
            try {
                await removePost(id);
                const newPost = post.filter((item) => item.id !== id);
                setPost(newPost);
            } catch (error) {
                console.log(error);
            }
            alert("Đã xóa bài viết #" + id);
        }
    }

    const columns = [{
        Header: props => <th className="col d-flex justify-content-center text-info">Ảnh</th>,
        accessor: 'image',
        Cell: props => <td><img src={props.value} height="100" /></td>
    },{
        Header: props => <th className="col d-flex justify-content-center text-info">ID bài viết</th>,
        accessor: 'id',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">ID người đăng</th>,
        accessor: 'userid',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}</td>
    }, {
        Header: props => <th className="col d-flex justify-content-center text-info">Tiêu đề</th>,
        accessor: 'title',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}</td>
    },{
        Header: props => <th className="col d-flex justify-content-center text-info">Nội dung</th>,
        accessor: 'content',
        Cell: props => <td className="col d-flex justify-content-center">{props.value}</td>
    }, {
        Header: props => <th className="col d-flex text-info">Hành động</th>,
        accessor: 'id',
        Cell: props => <td className="text-right justify-content-center">
            <Link
                className="btn btn-primary btn-sm ms-1"
                to={`/admin/addPost/${props.value}`}
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
    const customTrGroupComponent = (props) => {
        console.log("props", props);
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
                                    <h4 className="mb-3">Danh sách bài viết</h4>
                                    <p class="mb-0">Xem danh sách bài viết tại đây</p>
                                </div>
                                <a href="/admin/addPost" className="btn btn-primary add-list"><i
                                    className="las la-plus mr-3"></i>Thêm bài viết</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <ReactTable
                                    data={post}
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
                                        <h3 className="mb-3">Bài viết</h3>
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