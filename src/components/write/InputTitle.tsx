import React, { ChangeEvent } from "react";

interface InputTitleProps {
  title: string;
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputTitle: React.FC<InputTitleProps> = ({ title, onTitleChange }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="제목"
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "1px solid #B7BBC8",
          width: "360px",
          height: "45px",
          display: "inline-block",
          cursor: "pointer",
          fontSize: "18px",
          color: "#000000",
          fontFamily: "MainFont",
          padding: "0px 0px 0px 10px",
        }}
      />
    </div>
  );
};

export default InputTitle;
