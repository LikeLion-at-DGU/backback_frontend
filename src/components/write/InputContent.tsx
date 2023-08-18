import React, { ChangeEvent } from "react";

interface InputContentProps {
  content: string;
  onContentChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputContent: React.FC<InputContentProps> = ({
  content,
  onContentChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <textarea
        value={content}
        onChange={onContentChange}
        placeholder="내용을 입력하세요."
        style={{
          border: "1px solid #B7BBC8",
          width: "360px",
          height: "430px",
          fontSize: "18px",
          color: "#000000",
          resize: "none",
          fontFamily: "MainFont",
          padding: "23px 0px 0px 21px",
        }}
      />
    </div>
  );
};

export default InputContent;
