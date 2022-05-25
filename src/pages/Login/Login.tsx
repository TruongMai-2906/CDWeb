import { Button, Input } from "antd";
import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { postUserInfo,get } from "../../utilities/api.ts";
import {url, User} from '../Register/Register.tsx'
import { useNavigate } from "react-router-dom";

export interface LoginProps {}

export interface LoginDataType {
  usernameOrEmail: string;
  password: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleSubmit, register } = useForm<LoginDataType>();
  const [redirect, setRedirect] = useState<boolean>(false)
  console.log("accessToken: ",localStorage.getItem("accessToken"));
  
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<User> = async (data) => {
    const response = await postUserInfo(`${url}api/auth/signin`, data
    ).catch(error => {
      console.log("Login fail");
      return;
    }
    );

    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("tokenType", response.tokenType);
    console.log("signin:",response);
    window.location.href="/"
  };
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-form"]}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>User Name</label>
          <input
            type="text"
            {...register("usernameOrEmail")}
            placeholder="Enter your user name"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button htmlType="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
