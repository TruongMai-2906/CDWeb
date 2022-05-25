import React, { useCallback, useState } from "react";
import { Input, Select, Checkbox, Button, Form } from "antd";
//@ts-ignore
import styles from "./Register.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProvider } from "rc-field-form";
import { post,get } from "../../utilities/api.ts";
import {debounce} from 'lodash'
import { useNavigate } from "react-router-dom";
export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}
export interface ResponseStatus{
  data: {
    success: boolean;
    message: string;
  }
}
export const url: string = "http://localhost:8080/";
export interface RegisterProps {}
export const Register: React.FC<RegisterProps> = (props) => {
  
  const { handleSubmit, register } = useForm<User>();
  const [password, setPassword] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(false);
  const [valid, setValid] = useState<{field: string, message: string}>({field: "", message: ""})
  const [validEmail, setValidEmail] = useState<{field: string, message: string}>({field: "", message: ""})
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  //call api
  const onSubmit: SubmitHandler<User> = async (data) => {
    const response = await post(`${url}api/auth/signup`, data
    );
    console.log(data);
    navigate("/login")
  };

  //check valid user name
  // const debounceValidName = useCallback(debounce( (nextValue) =>  get(`${url}api/auth/checkvalidname?name=${nextValue}`), 100), [])
  const checkValidName =async (name: string) => {
    const checkName: ResponseStatus = await get(`${url}api/auth/checkvalidname?name=${name}`)
    // const checkName = await debounceValidName(name)
    console.log("checkname:",checkName.data.success);
    if (!checkName.data.success) {
      setDisable(true);
      setValid({field:"name",message:checkName.data.message});
    }else {
      setValid({field: "", message: ""})
      setDisable(false)
    }
  }

  //check valid email
  const checkValidEmail =async (email: string) => {
    const checkEmail: ResponseStatus = await get(`${url}api/auth/checkvalidemail?email=${email}`)
    console.log("checkemail:",checkEmail.data.success);
    if (!checkEmail.data.success) {
      setDisable(true);
      setValidEmail({field:"email",message:checkEmail.data.message});
      console.log("validEmail:",validEmail);
      
    }else {
      setValidEmail({field: "", message: ""})
      setDisable(false)
    }
  }
  
  

  return (
    <div className={styles["register-container"]}>
      <div className={styles["register-form"]}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Full Name</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Your name.."
          />

          <label>User Name</label>
          <input
            type="text"
            {...register("username")}
            placeholder="Enter your user name"
            onChange={(e) => checkValidName(e.target.value)}
          />
          {valid.field === "name" && <div style={{paddingLeft:"20px",color: "red"}}>{valid.message}</div>}
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email")}
            placeholder="Enter your email"
            onChange={(e) => checkValidEmail(e.target.value)}
          />
          {validEmail.field === "email" && <div style={{paddingLeft:"20px",color: "red"}}>{validEmail.message}</div>}

          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button htmlType="submit" disabled={disable}>Submit</Button>
        </form>
      </div>
    </div>
  );
};
export default Register;
