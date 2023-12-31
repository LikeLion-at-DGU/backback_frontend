import React from "react";
import UserInfo, { UserInfoProps } from "../common/UserInfo";
import ReportButton from "../core/ReportButton";
import { useCookies } from "react-cookie";
import DeleteButton from "../core/DeleteButton";
import RouterLink from "../core/RouterLink";
import { useState, useEffect } from "react";

export interface CommentProps {
  id: string;
  content: string;
  writer: UserInfoProps;
  createdAt: string;
}

const Comment: React.FC<CommentProps> = ({ ...prop }) => {
  const [cookies] = useCookies(["uid"]);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    if (cookies.uid) setIsLogin(true);
    else setIsLogin(false);
  }, [cookies]);
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
          margin: "10px 15px 10px 15px",
          fontFamily: "MainFont",
        }}
      >
        <RouterLink
          href={
            isLogin && cookies.uid == prop.writer.profileId
              ? "/mypage"
              : "/profile/" + prop.writer.profileId
          }
        >
          <UserInfo
            nickname={prop.writer.nickname}
            type={prop.writer.type}
            profileId={prop.writer.profileId}
            level={prop.writer.level}
          />
        </RouterLink>
        {isLogin && cookies.uid == prop.writer.profileId ? (
          <DeleteButton id={prop.id} type={"comment"} />
        ) : (
          <ReportButton id={prop.id} type={"comment"} />
        )}
      </div>

      <div
        style={{
          flex: "1",
          width: "100%",
          padding: "0px 30px 10px 40px",
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
