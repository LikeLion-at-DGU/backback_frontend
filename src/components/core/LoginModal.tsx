import { useState } from "react";
import RouterLink from "./RouterLink";

interface Props {
  onClick: () => void;
}

const MustLogin = (prop: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "210px",
        height: "140px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "20",
      }}
    >
      <div
        style={{
          width: "100%",
          flex: "1",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          textAlign: "center",
          border: "1px solid #B7BBC8",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        로그인 후 이용가능합니다
        <br />
        로그인 하시겠습니까?
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "35px",
          fontSize: "12px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            height: "100%",
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #B7BBC8",
            borderRadius: "0px 0px 0px 10px",
          }}
          onClick={prop.onClick}
        >
          취소
        </div>

        <div
          style={{
            height: "100%",
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #B7BBC8",
            borderRadius: "0px 0px 10px 0px",
          }}
        >
          <RouterLink href={"login/"}>로그인</RouterLink>
        </div>
      </div>
    </div>
  );
};

export default MustLogin;
