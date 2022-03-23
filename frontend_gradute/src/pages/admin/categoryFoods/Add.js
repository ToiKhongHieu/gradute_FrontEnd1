
export default function AddCategoryFood(props) {
    return (
        <>
            <div className="content-page">
                <div className="container-fluid add-form-list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Thêm thể loại</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form action="page-list-category.html" data-toggle="validator">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Ảnh</label>
                                                    <input type="file" class="form-control image-file" name="pic"
                                                        accept="image/*" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Tên thể loại</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tên thể loại ở đây !"
                                                        required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3" >
                                                <div className="form-group">
                                                    <label>Trạng thái</label>
                                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                                        <option className="text-success">Sẵn sàng</option>
                                                        <option className="text-secondary">Ẩn</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-label-group mb-3 mt-3">
                                                <textarea data-length="20" class="form-control" id="exampleFormControlTextarea3" rows="3"
                                                    placeholder="Mô tả"></textarea>
                                                <label>Mô tả</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Thêm thể loại</button>
                                        <button type="reset" className="btn btn-danger">Cài lại</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}