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

<<<<<<< HEAD
    return (
        <div className={styles['login-page']}>
            <div className={styles['bg']}>
                <div className={classNames(
                    styles["title"],
                    styles["border"]
                  )}>
                    Đăng nhập thành viên
                </div>
            </div>
            <div className={styles['form']}>
                <div>
                    <div id="my-signin2" className="g-signin2" data-gapiscan="true" data-onload="true">
                        <div style={{ height: "50px", width: "240px" }} className="abcRioButton abcRioButtonBlue">
                            <div className="abcRioButtonContentWrapper">
                                <div className="abcRioButtonIcon" style={{ padding: "15px", backgroundColor: "#fff", borderRadius: "1px" }}>
                                    <div style={{ width: "18px", height: "18px" }} className="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" className="abcRioButtonSvg">
                                            <g>
                                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                                <path fill="none" d="M0 0h48v48H0z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <span style={{ fontSize: "16px", lineHeight: "48px" }} className="abcRioButtonContents">
                                    <span id="not_signed_inb71ujlofmclw">Sign in with Google</span>
                                    <span id="connectedb71ujlofmclw" style={{ display: "none" }}>Signed in with Google</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Form action="" method="POST">
                    <div>
                        <label>Email</label>
                        <Input type="email" placeholder="Nhập email của bạn" value="" name="email" />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <Input type="password" placeholder="Nhập mật khẩu của bạn" name="password" />
                    </div>
                    <div id="message-line"></div> <div className="flex flex-hozi-center flex-column">
                        <div className="flex flex-hozi-center">
                            <button type="submit" className="button-default color-white bg-red" name="action_login" value="submit">Đăng nhập</button>
                            <a href="/quen-mat-khau" className="margin-0-10">Quên mật khẩu ?</a>
                        </div>
                        <div>
                            <a href="/dang-ky" className="button-default bg-green margin-5-0 padding-10-20">Đăng ký</a>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
=======
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
>>>>>>> b2f10f90e39a77835f9c6549a628902fb1957985
};
export default Register;
