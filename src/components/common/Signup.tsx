import React from "react";
import styles from "../../styles/Signup.module.css";
import LoginButton from "../login/LoginButton";
import { LOGIN_DOMAIN } from "@/constants";

const Signup = () => {
  return (
    <div className={styles.center}>
      <LoginButton loginUrl={`${LOGIN_DOMAIN}/accounts/kakao/login`}>
        <img
          src="../../../assets/images/kakaologin.png"
          style={{ height: "50px", width: "250px" }}
          alt="kakaologin"
        />
      </LoginButton>
      {/* <LoginButton loginUrl={`${LOGIN_DOMAIN}/accounts/google/login`}>
        <img
          src="../../../assets/images/googlelogin.png"
          style={{ height: "50px", width: "250px", marginTop: "15px" }}
          alt="googlelogin"
        />
      </LoginButton> */}
    </div>
  );
};

export default Signup;
