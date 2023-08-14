import React from "react";
import styles from "../../styles/Signup.module.css";

const Signup = () => {

    return (
        <div className={styles.center}>
            <a href="http://localhost:4000/auth/kakao" >
                <img
                    src="../../../assets/images/kakaologin.png"
                    style={{ height: "50px", width: "250px" }}
                    alt="kakaologin"
                />
            </a>
            <a href="http://localhost:4000/auth/google">
                <img
                    src="../../../assets/images/googlelogin.png"
                    style={{ height: "50px", width: "250px", marginTop: "10px" }}
                    alt="googlelogin"
                />
            </a>
        </div>
    );
};

export default Signup;