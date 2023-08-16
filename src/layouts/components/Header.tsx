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
        marginTop: "22px",
      }}
    >
      <div style={{ flex: "1", textAlign: "center" }}></div>
      <div style={{ flex: "7", textAlign: "center" }}>
        <img
          src="../../../assets/images/Logo.png"
          style={{ height: "30px" }}
        ></img>
      </div>
      <div style={{ flex: "1", textAlign: "center" }}>
        <img
          src="../../../assets/images/find_icon.png"
          style={{ height: "30px" }}
        ></img>
      </div>
    </header>
  );
};

export default Header;
