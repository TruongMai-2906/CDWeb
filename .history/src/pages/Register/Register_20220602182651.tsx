import React, { useCallback, useState } from "react";
import { Input, Select, Checkbox, Button, Form } from "antd";
//@ts-ignore
import styles from "./Register.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProvider } from "rc-field-form";
import { post, get } from "../../utilities/api.ts";
import { debounce } from 'lodash'
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ResponseStatus {
  data: {
    success: boolean;
    message: string;
  }
}
export const url: string = "http://localhost:8080/";
export interface RegisterProps { }
export const Register: React.FC<RegisterProps> = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/, "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });
  const { handleSubmit, register, formState: { errors } } = useForm<User>({
    resolver: yupResolver(validationSchema)
  });
  const [disable, setDisable] = useState<boolean>(false);
  const [valid, setValid] = useState<{ field: string, message: string }>({ field: "", message: "" })
  const [validEmail, setValidEmail] = useState<{ field: string, message: string }>({ field: "", message: "" })
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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
  const checkValidName = async (name: string) => {
    const checkName: ResponseStatus = await get(`${url}api/auth/checkvalidname?name=${name}`)
    // const checkName = await debounceValidName(name)
    console.log("checkname:", checkName.data.success);
    if (!checkName.data.success) {
      setDisable(true);
      setValid({ field: "name", message: checkName.data.message });
    } else {
      setValid({ field: "", message: "" })
      setDisable(false)
    }
  }

  //check valid email
  const checkValidEmail = async (email: string) => {
    const checkEmail: ResponseStatus = await get(`${url}api/auth/checkvalidemail?email=${email}`)
    console.log("checkemail:", checkEmail.data.success);
    if (!checkEmail.data.success) {
      setDisable(true);
      setValidEmail({ field: "email", message: checkEmail.data.message });
      console.log("validEmail:", validEmail);

    } else {
      setValidEmail({ field: "", message: "" })
      setDisable(false)
    }
  }



  return (
    <div className={styles["register-container"]}>
      <div className={styles["register-form"]}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Full Name <span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            {...register("name")}
            placeholder="Your name.."
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>

          <label>User Name <span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            {...register("username")}
            placeholder="Enter your user name"
            onChange={(e) => checkValidName(e.target.value)}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          {valid.field === "name" && <div style={{ paddingLeft: "20px", color: "red" }}>{valid.message}</div>}
          <div className="invalid-feedback">{errors.username?.message}</div>
          <label>Email <span style={{ color: "red" }}>*</span></label>
          <input
            id={styles['form-control']}
            type="text"
            name="email"
            {...register("email")}
            placeholder="Enter your email"
            onChange={(e) => checkValidEmail(e.target.value)}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {validEmail.field === "email" && <div style={{ paddingLeft: "20px", color: "red" }}>{validEmail.message}</div>}
          <div className="invalid-feedback">{errors.email?.message}</div>
          <label>Password <span style={{ color: "red" }}>*</span></label>
          <input
            id={styles['form-control']}
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
          <label>Confirm Password <span style={{ color: "red" }}>*</span></label>
          <input
            id={styles['form-control']}
            type="password"
            {...register("confirmPassword")}
            placeholder="Enter your password"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
          <Button htmlType="submit" type="primary" disabled={disable}>Submit</Button>
        </form>
      </div>
    </div>
  );
};
export default Register;
