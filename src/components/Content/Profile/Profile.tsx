import React, { useEffect, useRef, useState } from "react";
import styles from "./Profile.module.scss";
import {put} from "../../../utilities/api.ts";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { getUserInfo } from "../../../utilities/api.ts";
import { useParams } from "react-router-dom";
import { Button } from "antd";

export interface ProfileProps {}

export interface ProfileDataType {
  name: string;
  email: string;
  gender: string;
  address: string;
  phone: string;
}
interface UserInfoData{
  username: string,
  name: string;
  email: string;
  gender: string;
  address: string;
  phone: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const defaultUser: UserInfoData = {
    username:"",
    name: "",
    email: "",
    gender: "",
    address: "",
    phone: "",
  };
  const [userInfo, setUserInfo] = useState<UserInfoData>(defaultUser);
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { isDirty }
  } = useForm<ProfileDataType>();
  const { category, id } = useParams();
  const onSubmit: SubmitHandler<ProfileDataType> = async (data) => {
    const response = await put(`http://localhost:8080/api/user/update/${id}`, data);
    alert("Update user info success")
  };

  useEffect(() => {
    onUserInfo(); 
  }, []);
  const [name, setName] = useState<string>()
  const onUserInfo = async () => {
    const checkMe = await getUserInfo(`http://localhost:8080/api/user/me`).then(
      (data: UserInfoData) => {
        setUserInfo(data);
        setValue("name",data.name)
        setValue("email",data.email)
        setValue("gender",data.gender)
        setValue("address",data.address)
        setValue("phone",data.phone)
        console.log("data", data);
      }
    );
  };
  return (
    <div className={styles["root"]}>
      <div className={styles["profile-title"]}>
        <h1>My Profile</h1>
        <div className={styles["title-detail"]}>
          Manage profile information for account security
        </div>
      </div>
      <div className={styles["profile-content"]}>
        <div className={styles["profile-form"]}>
          <form
            onSubmit={(e) => {
              handleSubmit(onSubmit)(e)
              // you will have to catch those error and handle them
              .catch(() => {});
            }}
            method="put"
            style={{ display: "block", marginTop: "0em" }}
          >
            <div className={styles["form-item"]}>
              <div className={styles["form-content"]}>
                <div className={styles["form-label"]}>
                  <label htmlFor="">Username</label>
                </div>
                <div className={styles["form-input"]}>
                  <div className={styles["username-inputfield"]}>
                    <div className={styles["username-text"]}>{userInfo.username}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["form-item"]}>
              <div className={styles["form-content"]}>
                <div className={styles["form-label"]}>
                  <label htmlFor="">Name</label>
                </div>
                <div className={styles["form-input"]}>
                  <div className={styles["input-with-validator-wrapper"]}>
                    <div className={styles["input-with-validator"]}>
                      <input
                        type="text"
                        {...register("name")}
                        defaultValue={userInfo.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["form-item"]}>
              <div className={styles["form-content"]}>
                <div className={styles["form-label"]}>
                  <label htmlFor="">Email</label>
                </div>
                <div className={styles["form-input"]}>
                  <div className={styles["input-with-validator-wrapper"]}>
                    <div className={styles["input-with-validator"]}>
                      <input
                        type="email"
                        {...register("email")}
                        defaultValue={userInfo.email}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["form-item"]}>
              <div className={styles["form-content"]}>
                <div className={styles["form-label"]}>
                  <label htmlFor="">Gender</label>
                </div>
                <div className={styles["form-input"]}>
                  <div className={styles["input-with-validator-wrapper"]}>
                    <div className={styles["input-with-validator"]}>
                      <input
                        type="text"
                        {...register("gender")}
                        defaultValue={userInfo.gender}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["form-item"]}>
              <div className={styles["form-content"]}>
                <div className={styles["form-label"]}>
                  <label htmlFor="">Address</label>
                </div>
                <div className={styles["form-input"]}>
                  <div className={styles["input-with-validator-wrapper"]}>
                    <div className={styles["input-with-validator"]}>
                      <input
                        type="text"
                        {...register("address")}
                        defaultValue={userInfo.address}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["form-item"]}>
              <div className={styles["form-content"]}>
                <div className={styles["form-label"]}>
                  <label htmlFor="">Phone</label>
                </div>
                <div className={styles["form-input"]}>
                  <div className={styles["input-with-validator-wrapper"]}>
                    <div className={styles["input-with-validator"]}>
                      <input
                        type="text"
                        {...register("phone")}
                        defaultValue={userInfo.phone}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["form-item"]}>
              <div className={styles["form-content"]}>
                <div className={styles["form-input"]}>
                  <Button htmlType="submit">Save</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;