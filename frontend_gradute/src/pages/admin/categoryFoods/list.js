import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategoryProduct } from "../../../api/CategoryFoodsAPI";


export default function ListCategoryFoods(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await getAllCategoryProduct();
                setCategories(data);
                console.log(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getCategory();
    }, []);

    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Danh sách thể loại</h4>
                                    <p class="mb-0">Xem danh sách thể loại món tại đây</p>
                                </div>
                                <a href="/admin/categoryFoodAdd" className="btn btn-primary add-list"><i
                                    className="las la-plus mr-3"></i>Thêm thể loại</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <table className="data-table table mb-0 tbl-server-info">
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" class="checkbox-input" id="checkbox1" />
                                                    <label for="checkbox1" className="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Tên danh mục</th>
                                            <th>Trạng thái</th>
                                            <th>Mô tả</th>
                                            <th>Ngày tạo</th>
                                            <th>Ngày sửa</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {categories.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.status}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.createdAt}</td>
                                                    <td>{item.updatedAt}</td>
                                                    <td className="text-right">
                                                        <Link
                                                            className="btn btn-primary btn-sm ms-1"
                                                            to={`/admin/category/${item.id}/edit`}
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            className="btn btn-danger btn-sm ms-1"
                                                            // onClick={() => onRemoveCate(item.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
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