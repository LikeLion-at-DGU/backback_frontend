import React, { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const ReportButton: React.FC<ButtonProps> = ({ children }) => {
  const [isopen, setIsopen] = useState(false);
  const handleGoBack = () => {
    setIsopen(!isopen);
  };
  return (
    <div style={{ placeItems: "center", fontSize: "14px" }}>
      {isopen ? (
        <>
          <div
            style={{
              border: "0.5px solid black",
              width: "100%",
              cursor: "pointer",
            }}
          >
            신고하기
            <img src="../../../assets/images/alarm.svg"></img>
          </div>
          <div
            style={{
              border: "0.5px solid black",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={handleGoBack}
          >
            취소
          </div>
        </>
      ) : (
        <div
          style={{
            cursor: "pointer",
            placeItems: "center",
          }}
          onClick={handleGoBack}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ReportButton;
