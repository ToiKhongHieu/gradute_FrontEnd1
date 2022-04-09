// import { useEffect, useState } from "react";
// import { useStyles } from '../hooks/useStyles';
// import { useSelector } from 'react-redux';
// export default function AddCategoryFood(props) {
//     const [inputMultipart, setInputMultipart] = useState(true);
//     const changeMultipart = () => {
//         setInputMultipart(!inputMultipart);
//     }
//     const renderForm = () => {
//         if (inputMultipart) {
//             return (
//                 <div className="col-md-12">
//                     <div className="form-group">
//                         <label>Chọn Ảnh</label>
//                         <input type="file" class="form-control image-file" name="image" id="image"
//                             accept="image/*"
//                             required onChange={handleImageFileChange} />
//                         <a class="text-info" onClick={() => changeMultipart()}>hoặc thêm link ảnh</a>
//                     </div>
//                 </div>
//             )
//         } if (!inputMultipart) {
//             return (
//                 <div className="col-md-12">
//                     <div className="form-group">
//                         <label>Thêm link Ảnh</label>
//                         <input type="text" class="form-control image-file" name="image1" id="image"
//                             required />
//                         <a class="text-info" onClick={() => changeMultipart()}>hoặc chọn ảnh từ máy</a>
//                     </div>
//                 </div>
//             )
//         }
//     }
    

//     const handleImageChange = (e) => {
//         setImage(e.target.value);
//     }
//     const handleImageFileChange = (e) => {
//     }
//     const handleDecriptionChange = () => {

//     }
//     const handleStatusChange = () => {

//     }
//     const handleNameChange = () => {

//     }
//     return (
//         <>
//             <div className="content-page">
//                 <div className="container-fluid add-form-list">
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <div className="card">
//                                 <div className="card-header d-flex justify-content-between">
//                                     <div className="header-title">
//                                         <h4 className="card-title">Thêm thể loại</h4>
//                                     </div>
//                                 </div>
//                                 <div className="card-body">
//                                     <form action="page-list-category.html" data-toggle="validator">
//                                         <div className="row">
//                                             {renderForm()}
//                                             <div className="col-md-12 mt-3">
//                                                 <div className="form-group">
//                                                     <label>Tên thể loại</label>
//                                                     <input type="text" class="form-control" placeHolder="Điền tên thể loại ở đây !" name="name" id="name"
//                                                         required onChange={handleNameChange} />
//                                                     <div className="help-block with-errors"></div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-12 mt-3" >
//                                                 <div className="form-group">
//                                                     <label>Trạng thái</label>
//                                                     <select name="status" className="selectpicker form-control" data-style="py-0" onChange={handleStatusChange}>
//                                                         <option className="text-success" value="Sẵn sàng">Sẵn sàng</option>
//                                                         <option className="text-secondary" value="Ẩn">Ẩn</option>
//                                                     </select>
//                                                 </div>
//                                             </div>
//                                             <div class="form-label-group mb-3 mt-3">
//                                                 <textarea data-length="20" class="form-control" id="description" rows="3"
//                                                     placeholder="Mô tả" name="description" onChange={handleDecriptionChange}></textarea>
//                                                 <label>Mô tả</label>
//                                             </div>
//                                         </div>
//                                         <button type="submit" className="btn btn-primary mr-2">Thêm thể loại</button>
//                                         <button type="reset" className="btn btn-danger">Cài lại</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }