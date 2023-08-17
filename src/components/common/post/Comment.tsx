import React from "react";
import UserInfo, { UserInfoProps } from "../UserInfo";
import ReportButton from "../../core/ReportButton";

export interface CommentProps {
  id: string;
  content: string;
  writer: UserInfoProps;
  createdAt: string;
}

const Comment: React.FC<CommentProps> = ({ ...prop }) => {
  console.log(prop.content);
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
          nickname={prop.writer.nickname}
          type={prop.writer.nickname}
          profileId={prop.writer.nickname}
          level={prop.writer.level}
        />
        <ReportButton id={prop.id} type={"comment"} />
      </div>

      <div
        style={{
          flex: "1",
          width: "100%",
          padding: "10px 40px 10px 40px",
          wordWrap: "break-word",
          borderBottom: "1px solid #B7BBC8",
        }}
      >
        {prop.content}
      </div>
    </div>
  );
};

export default Comment;
