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
    <div>
      <textarea
        value={content}
        onChange={onContentChange}
        placeholder="  내용을 입력하세요."
        style={{
          border: "1px solid #B7BBC8",
          width: "360px",
          height: "420px",
          fontSize: "18px",
          color: "#B3B3B3",
          resize: "none",
          fontFamily: "MainFont",
        }}
      />
    </div>
  );
};

export default InputContent;
