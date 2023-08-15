import { Inter } from "next/font/google";
import Signup from "../../components/common/Signup";
import styles from "../../styles/Signup.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.cancelLogoContainer}>
        <img
          src="../../../assets/images/Cancel_icon.png"
          style={{ height: "15px", width: "15px" }}
          alt="cancel_logo"
        />
      </div>
      <img
        src="../../../assets/images/header.png"
        style={{ height: "50px", width: "150px", marginBottom: "30px" }}
        alt="header"
      />
      <Signup />
    </div>
  );
}
