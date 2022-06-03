import { Button, Input } from "antd";
import React, { useCallback, useState } from "react";
import styles from "./Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { postUserInfo,get } from "../../utilities/api.ts";
import {url, User} from '../Register/Register.tsx'
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
<<<<<<< HEAD
import { debounce } from "lodash";
=======
import Swal from 'sweetalert2/dist/sweetalert2.js';
>>>>>>> 3c7ecdaa0d28b7190cf03e76fd3a9df25033ce03

export interface LoginProps {}

export interface LoginDataType {
  username: string;
  password: string;
}
export interface CurrentUserType {
  id?: number;
  username: string;
  name: string;
  roles: {
    id:number;
    name: string;
  }[]
}

const Login: React.FC<LoginProps> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required')
  });
  const { handleSubmit, register, formState: { errors } } = useForm<LoginDataType>({
    resolver: yupResolver(validationSchema)
  });
  const [redirect, setRedirect] = useState<boolean>(false)
  console.log("accessToken: ",localStorage.getItem("accessToken"));
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<User> = async (data) => {
    const response = await postUserInfo(`${url}api/auth/signin`, data)
    .catch(error => {
      console.log("Login fail");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      return;
    }
    );
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("tokenType", response.tokenType);
<<<<<<< HEAD
    const checkMe: {data: CurrentUserType} = await get(`${url}api/user/me`, {headers:{
      authorization: `${response.tokenType} ${response.accessToken}`
    }})
    console.log("here");
    
    console.log("role",checkMe.data.roles[0].name);

    if (checkMe.data.roles[0].name === "ROLE_ADMIN") {
      window.location.href="/admin"
    }else if(checkMe.data.roles[0].name === "ROLE_USER"){
      window.location.href="/"
    }
    
=======
    console.log("signin:",response);
    window.location.href="/";
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Login Successfully',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
>>>>>>> 3c7ecdaa0d28b7190cf03e76fd3a9df25033ce03
  };
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-form"]}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <label>User Name</label>
          <input
            id={styles['form-control']}
            type="text"
            {...register("username")}
            placeholder="Enter your user name"
            onChange={(e) => setUsername(e.target.value)}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>

          <label>Password</label>
          <input
            id={styles['form-control']}
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
          <Button htmlType="submit" type="primary">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
