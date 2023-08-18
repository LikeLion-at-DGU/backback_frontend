import React from "react";
import UserInfo, { UserInfoProps } from "./UserInfo";
import RouterLink from "../core/RouterLink";

export interface ColumnProps {
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
  index?: number;
  image?: string;
}

const Column: React.FC<ColumnProps> = ({ ...prop }) => {
  const date = prop.createdAt.split("T")[0].split("-").join(".");
  const time = prop.createdAt
    .split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(":");
  const createdAt = `${date} ${time}`;
  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "...";
    } else {
      return str;
    }
  }
  const title = truncateString(prop.title, 25);
  return (
    <RouterLink href={`/column/${prop.id}`}>
      <div
        style={{
          height: "280px",
          width: "165px",
          alignItems: "center",
          display: "inline-block",
          flexDirection: "column",
          margin: "13px 0px 13px 0px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src={
            prop.image ? prop.image : "../../assets/images/ColumnDefault.png"
          }
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "center",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            fontSize: "10px",
            fontWeight: "400",
            width: "100%",
            padding: "8px 11px 0px 11px",
            fontFamily: "MainFont",
          }}
        >
          {createdAt}
        </div>
        <div
          style={{
            fontSize: "14px",
            fontFamily: "BoldFont",
            width: "100%",
            height: "45px",
            padding: "0px 11px 0px 11px",
            overflow: "hidden",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "12px",
            width: "100%",
            minHeight: "16px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "0px 11px 0px 11px",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              width: "100%",
              height: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0px",
              fontFamily: "MainFont",
            }}
          >
            <UserInfo
              profileId={prop.writer.profileId}
              nickname={prop.writer.nickname}
              type={prop.writer.type}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "block",
            flex: "1",
            height: "52px",
            padding: "8px 11px 0px 11px",
            fontSize: "8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            fontFamily: "MainFont",
          }}
        >
          {prop.contentShort}
        </div>
        <div
          style={{
            width: "100%",
            minHeight: "16px",
            display: "flex",
            alignItems: "center",
            fontSize: "8px",
            margin: "10px 0px 0px 0px",
            fontFamily: "MainFont",
          }}
        >
          <img
            src="../../../assets/images/More_icon.png"
            style={{ height: "14px", marginLeft: "11px", display: "flex" }}
          />
          <p style={{ marginLeft: "7px" }}>더 알아보기</p>
          <p style={{ marginLeft: "auto", marginRight: "14px" }}>
            {prop.viewCnt}
          </p>
        </div>
      </div>
    </RouterLink>
  );
};

export default Column;
