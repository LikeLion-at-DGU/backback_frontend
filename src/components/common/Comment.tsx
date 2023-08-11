import React from "react";
import UserInfo, { UserInfoProps } from "./UserInfo";

export interface CommentProps extends UserInfoProps {
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ ...prop }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "65px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "0px 20px 0px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px 0px 10px",
          margin: "10px 0px 10px 0px",
        }}
      >
        <UserInfo
          nickname={prop.nickname}
          type={prop.type}
          image={prop.image}
        />
        <button>버튼</button>
      </div>

      <div
        style={{
          flex: "1",
          width: "100%",
          padding: "10px 40px 10px 40px",
          wordWrap: "break-word",
          fontSize: "18px",
          borderBottom: "1px solid black",
        }}
      >
        {prop.comment}
      </div>
    </div>
  );
};

export default Comment;
