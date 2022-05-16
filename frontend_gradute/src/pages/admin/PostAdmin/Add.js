import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { AddPost, getOnePost } from "../../../api/PostAPI";
import { useParams } from "react-router-dom";
const CreatePost = (props) => {
    const history = useNavigate();
    const [btnTile,setBtnTile] = useState("Thêm bài viết");
    const {id} = useParams();
    const [image, setImage] = useState("");
    const [userid, setuserid] = useState("");
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    useEffect(() => {
        const getPost = async () => {
            try {
                if(id){
                    const { data } = await getOnePost(id);
                    setBtnTile("Sửa bài viết");
                    setImage(data.image);
                    setuserid(data.userid);
                    settitle(data.title);
                    setcontent(data.content);
                    console.log(data);
                }
            } catch (error) {
                console.log("Error getPost " + error);
            }
        }
        getPost();
    }, []);
    const getImage = (e) => {
        setImage(e.target.value);
    }
    const getuserid = (e) => {
        setuserid(e.target.value);
    }
    const getcontent = (e) => {
        setcontent(e.target.value);
    }
    const gettitle = (e) => {
        settitle(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data1 = { id ,image ,userid, title , content};
        const {data} = await AddPost(data1);
        if(id){
            alert("Sửa thành công bài viết #" + data.id);
        }else{
            alert("Thêm thành công bài viết #" + data.id);
        }
        clearForm();
        const check = window.confirm('Bạn có muốn về trang danh sách không ?');
        if (check) {
            history("/admin/Post");
        }
    }
    const clearForm = () => {
        setImage("");
        setuserid("");
        settitle("");
        setcontent("");
    }
    return (
            <div className="content-page">
                <div className="container-fluid add-form-list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                       {!id &&  <h4 className="card-title">Thêm bài viết</h4>}
                                       {id &&  <h4 className="card-title">Sửa bài viết</h4>}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} data-toggle="validator">
                                        <div className="row">
                                            <label>
                                            Chọn ảnh:
                                            <input type="file" name="image" onChange={getImage}/>
                                            </label>
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Người đăng bài</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tên người đăng bài !" name="userid" id="userid"
                                                        required onChange={getuserid} value={userid}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="col-md-12 mt-3">
                                                <div className="form-group">
                                                    <label>Tiêu đề bài viết</label>
                                                    <input type="text" class="form-control" placeHolder="Điền tiêu đề bài viết !" name="userid" id="userid"
                                                        required onChange={gettitle} value={title}/>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>                                            
                                            <div className="form-label-group mb-3 mt-3">
                                                <textarea data-length="20" class="form-control" id="description" rows="3"
                                                    placeholder="Nội dung" name="description" onChange={getcontent} value={content}></textarea>
                                                <label>Nội dung</label>
                                            </div>
                                        </div>
                                        <button  type="submit" className="btn btn-primary mr-2">{btnTile}</button>
                                        <button type="reset" onClick={clearForm} className="btn btn-danger">Cài lại</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default CreatePost;
