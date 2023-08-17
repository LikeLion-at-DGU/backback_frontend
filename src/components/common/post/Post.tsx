import React from "react";
import UserInfo, { UserInfoProps } from "../UserInfo";
import Link from "next/link";

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
    <Link href="/post/[id]" as={`/post/${prop.id}`}>
      <div
        style={{
          width: "100%",
          minHeight: "115px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontSize: "16px",
          borderBottom: "1px solid #B7BBC8",
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
            type={prop.writer.type}
            profileId={prop.writer.profileId}
            level={prop.writer.level}
          />
          <div
            style={{
              fontSize: "12px",
            }}
          >
            {createdAt}
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
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
            fontSize: "12px",
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
    </Link>
  );
};

export default Post;
