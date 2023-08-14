import React from "react";
import UserInfo, { UserInfoProps } from "./UserInfo";
import Link from "next/link";

export interface ColumnProps extends UserInfoProps {
    createdAt: string;
    image: string;
    title: string;
    content: string;
    id: string;
    views: number;
    index?: number;
}

const Column: React.FC<ColumnProps> = ({ ... prop }) => {
    return (
        <Link href="/column/[id]" as={`/column/${prop.id}`}>
            <div
                style={{
                    minHeight: "280px",
                    alignItems: "center",
                    display: "inline-block",
                    flexDirection: "column",
                    margin: `${prop.index !== undefined && prop.index % 2 === 0 ? "13px 10px 13px 15px" : "13px 15px 13px 10px"}`,
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}>
                <img
                    src={prop.image}
                    style={{
                        width: "100%",
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                    }}
                />
                <div
                    style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        width: "100%",
                        padding: "8px 11px 0px 11px",
                        fontFamily: "MainFont",
                    }}
                >
                    {prop.createdAt}
                </div>
                <div
                    style={{
                        fontSize: "16px",
                        fontFamily: "BoldFont",
                        width: "100%",
                        padding: "0px 11px 0px 11px",
                    }}>
                    {prop.title}
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
                    }}>
                    <div
                        style={{
                            fontSize: "12px",
                            width: "100%",
                            height: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            margin: "0px",
                            fontFamily: "MainFont",
                        }}>
                            <UserInfo
                            nickname={prop.nickname}
                            type={prop.type} />
                    </div>
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "block",
                        flex: "1",
                        height: "52px",
                        padding: "8px 11px 0px 11px",
                        fontSize: "10px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordWrap: "break-word",
                        fontFamily: "MainFont",
                    }}
                >
                    {prop.content}
                </div>
                <div
                    style={{
                        width: "100%",
                        minHeight: "16px",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "10px",
                        margin: "10px 0px 0px 0px",
                        fontFamily: "MainFont",
                    }}
                >
                    <img
                        src="../../../assets/images/More_icon.png"
                        style={{ height: "14px", marginLeft: "11px", display: "flex"}}/>
                    <p style={{marginLeft: "7px"}}>더 알아보기</p>
                    <p style={{marginLeft: "auto", marginRight: "14px"}}>{prop.views}</p>
                </div>
            </div>
        </Link>
    )
};

export default Column;