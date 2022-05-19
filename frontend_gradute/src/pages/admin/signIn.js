import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { signin } from "../../api/authAPI";
import { authenticate, isAuthenticated } from "../../auth";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const onSubmit = async (user) => {
    try {
      const { data } = await signin(user);
      if (data) {
        await authenticate(data);
        redirectUser();
      }else{
        setError("Tài khoản hoặc mật khẩu không chính xác");
      }
    } catch (error) {
    }
   
  };
  useEffect(() => {
    redirectUser();
  })
  const redirectUser = () => {
    if (isAuthenticated()) {
      return (() =><Redirect
        to= "/admin"
      />)
    }
  };
  return (
    <div className="col-6 mx-auto mt-2" style={{ marginBottom: '100px' }}>
      <h2 style={{ marginTop: '150px' }}>Đăng nhập</h2>
      <hr />
      {error && <div className="alert alert-danger">{error}</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input type="text" className="form-control" {...register("username")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginBottom: '20px' }}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Signin;
