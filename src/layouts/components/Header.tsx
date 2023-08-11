import UserInfo from "@/components/common/UserInfo";
import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        height: "50px",
        width: "100%",
        maxWidth: "480px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid black",
      }}
    >
      <div style={{ flex: "1", textAlign: "center" }}></div>
      <div style={{ flex: "7", textAlign: "center" }}>로고</div>
      <div style={{ flex: "1", textAlign: "center" }}>검색</div>
    </header>
  );
};

export default Header;
