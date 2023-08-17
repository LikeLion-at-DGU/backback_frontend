import React from "react";
import UserInfo, { UserInfoProps } from "../common/UserInfo";
import RouterLink from "../core/RouterLink";

export interface PostProps {
  id: string;
  category: string[];
  title: string;
  createdAt: string;
  updatedAt: string;
  contentShort: string;
  likesCnt: number;
  commentsCnt: number;
  writer: UserInfoProps;
  viewCnt: number;
}

const Post: React.FC<PostProps> = ({ ...prop }) => {
  const date = prop.createdAt.split("T")[0].split("-").join(".");
  const time = prop.createdAt
    .split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(":");
  const createdAt = `${date} ${time}`;
  return (
    <RouterLink href={`/post/${prop.id}`}>
      <div
        style={{
          width: "100%",
          minHeight: "115px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontSize: "16px",
          borderBottom: "1px solid #B7BBC8",
          margin: "0px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "13px 0px 9px 0px",
            fontSize: "14px",
            fontFamily: "MainFont",
          }}
        >
          <UserInfo
            nickname={prop.writer.nickname}
            type={prop.writer.type}
            profileId={prop.writer.profileId}
            level={prop.writer.level}
          />
          <div
            style={{
              fontSize: "10px",
              marginLeft: "auto",
              marginRight: "22px",
              fontFamily: "MainFont",
            }}
          >
            {createdAt}
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            fontFamily: "BoldFont",
            width: "100%",
            padding: "0px 15px 0px 15px",
          }}
        >
          {prop.title}
        </div>
        <div
          style={{
            flex: "1",
            width: "100%",
            padding: "5px 15px 5px 15px",
            wordWrap: "break-word",
            fontSize: "10px",
            fontFamily: "MainFont",
          }}
        >
          {prop.contentShort}
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "10px",
            padding: "0px 10px 10px 10px",
          }}
        >
          <img
            src="../../../assets/images/like_icon.png"
            style={{
              height: "16px",
              marginRight: "5px",
            }}
          ></img>
          {prop.likesCnt}
          <img
            src="../../../assets/images/Message_icon.png"
            style={{ height: "16px", marginLeft: "5px", marginRight: "5px" }}
          ></img>
          {prop.commentsCnt}
        </div>
      </div>
    </RouterLink>
  );
};

export default Post;
