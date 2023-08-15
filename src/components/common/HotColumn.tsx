import React from "react";
import UserInfo, { UserInfoProps } from "./UserInfo";
import Link from "next/link";

export interface HotColumnProps extends UserInfoProps {
    createdAt: string;
    image: string;
    title: string;
    content: string;
    id: string;
    views: number;
    index?: number;
    isHot?: boolean;
}

const HotColumn: React.FC<HotColumnProps> = ({ ... prop }) => {
    return (
        <Link href="/column/[id]" as={`/column/${prop.id}`}>
            <div
                style={{
                    height: "242px",
                    width: "146px",
                    alignItems: "center",
                    display: "inline-block",
                    flexDirection: "column",
                    margin: `${prop.isHot ? "0px 8px 0px 0px" : (prop.index !== undefined && prop.index % 2 === 0 ? "0px 10px 0px 1px" : "0px 1px 0px 10px")}`,
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}>
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
                    {prop.createdAt}
                </div>
                <div
                    style={{
                        fontSize: "14px",
                        fontFamily: "BoldFont",
                        width: "100%",
                        padding: "0px 9.45px 0px 9.45px",
                    }}>
                    {prop.title}
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
                    }}>
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
                        height: "36px",
                        padding: "7.39px 9.45px 0px 9.45px",
                        fontSize: "8px",
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
                        style={{ height: "12.02px", marginLeft: "9.45px", display: "flex"}}/>
                    <p style={{marginLeft: "6.01px"}}>더 알아보기</p>
                    <p style={{marginLeft: "auto", marginRight: "7.81px"}}>{prop.views}</p>
                </div>
            </div>
        </Link>
    )
};

export default HotColumn;