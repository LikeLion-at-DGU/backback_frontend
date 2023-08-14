import React from "react";
import UserInfo, { UserInfoProps } from "./UserInfo";
import ReportButton from "../core/ReportButton";

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
        fontSize: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px 10px 0px",
        }}
      >
        <UserInfo
          nickname={prop.nickname}
          type={prop.type}
          profileimage={prop.profileimage}
        />
        <ReportButton>
          <img
            src="../../../assets/images/dot.svg"
            style={{ height: "100%" }}
          ></img>
        </ReportButton>
      </div>

      <div
        style={{
          flex: "1",
          width: "100%",
          padding: "10px 30px 10px 30px",
          wordWrap: "break-word",
          borderBottom: "1px solid black",
        }}
      >
        {prop.comment}
      </div>
    </div>
  );
};

export default Comment;
