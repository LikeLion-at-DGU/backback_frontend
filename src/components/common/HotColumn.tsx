import React from "react";
import UserInfo, { UserInfoProps } from "./UserInfo";
import RouterLink from "../core/RouterLink";

export interface HotColumnProps extends UserInfoProps {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  contentShort: string;
  writer: UserInfoProps;
  viewCnt: number;
  index?: number;
  image?: string;
  isHot?: boolean;
}

const HotColumn: React.FC<HotColumnProps> = ({ ...prop }) => {
  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "...";
    } else {
      return str;
    }
  }
  const date = prop.createdAt.split("T")[0].split("-").join(".");
  const time = prop.createdAt
    .split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(":");
  const createdAt = `${date} ${time}`;
  const title = truncateString(prop.title, 25);
  return (
    <RouterLink href={`/column/${prop.id}`}>
      <div
        style={{
          height: "242px",
          width: "146px",
          alignItems: "center",
          display: "inline-block",
          flexDirection: "column",
          margin: `${
            prop.isHot
              ? "0px 8px 0px 0px"
              : prop.index !== undefined && prop.index % 2 === 0
              ? "0px 10px 0px 1px"
              : "0px 1px 0px 10px"
          }`,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src={prop.image}
          style={{
            width: "100%",
            height: "86.12px",
            display: "flex",
            alignItems: "center",
          }}
        />
        <div
          style={{
            fontSize: "10px",
            width: "100%",
            padding: "6.89px 0px 0px 9.45px",
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
            padding: "0px 9.45px 0px 9.45px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "10px",
            width: "100%",
            minHeight: "15px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 0px 9.45px",
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
            height: "36px",
            padding: "7.39px 9.45px 0px 9.45px",
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
            minHeight: "12.86px",
            display: "flex",
            alignItems: "center",
            fontSize: "8px",
            margin: "11.37px 0px 0px 0px",
            fontFamily: "MainFont",
          }}
        >
          <img
            src="../../../assets/images/More_icon.png"
            style={{ height: "12.02px", marginLeft: "9.45px", display: "flex" }}
          />
          <p style={{ marginLeft: "6.01px" }}>더 알아보기</p>
          <p style={{ marginLeft: "auto", marginRight: "7.81px" }}>
            {prop.viewCnt}
          </p>
        </div>
      </div>
    </RouterLink>
  );
};

export default HotColumn;
