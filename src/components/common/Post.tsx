import React from "react";
import UserInfo, { UserInfoProps } from "./UserInfo";
import Link from "next/link";

export interface PostProps extends UserInfoProps {
  id: string;
  category: string[];
  title: string;
  createdAt: string;
  content: string;
  like_count: number;
  comments_count: number;
}

const Post: React.FC<PostProps> = ({ ...prop }) => {
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
          padding: "0px 11px",
          borderBottom: "1px solid black",
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
          <div
            style={{
              fontSize: "12px",
            }}
          >
            {prop.createdAt}
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
            width: "100%",
            padding: "0px 20px 0px 20px",
          }}
        >
          {prop.title}
        </div>
        <div
          style={{
            flex: "1",
            width: "100%",
            padding: "5px 20px 5px 20px",
            wordWrap: "break-word",
            fontSize: "12px",
          }}
        >
          {prop.content}
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
            src="../../../assets/images/Like_icon.png"
            style={{
              height: "16px",
              marginRight: "5px",
            }}
          ></img>
          {prop.like_count}
          <img
            src="../../../assets/images/Message_icon.png"
            style={{ height: "16px", marginLeft: "5px", marginRight: "5px" }}
          ></img>
          {prop.comments_count}
        </div>
      </div>
    </Link>
  );
};

export default Post;
