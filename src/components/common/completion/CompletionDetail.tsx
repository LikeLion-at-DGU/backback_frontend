import styled from "styled-components";
import { ScrollContent } from "@/components/common/PostDetail";
import UserInfo, {UserInfoProps} from "@/components/common/UserInfo";
import ReportButton from "@/components/core/ReportButton";

export interface CompletionDetailProps extends UserInfoProps{
  id: string;
  title: string;
  createdAt: string;
  image: string;
  content: string;
  like_count: number;
  is_liked: boolean;
}

export const CompletionDetail: React.FC<CompletionDetailProps> = ({ ...prop }) => {
  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "22px",
            marginBottom: "7px",
            fontSize: "14px",
          }}
        >
          <img src="../../../assets/images/Category_right_icon.png" style={{
            height: "11px",
            width: "7px",
            marginRight: "7px",
          }}/>
          오운완 기록
        </div>
        <div
          style={{
            width: "100%",
            height: "28px",
            fontSize: "18px",
            marginBottom: "2px",
            fontFamily: "BoldFont",
          }}
        >
          {prop.title}
        </div>
        <div
          style={{
            width: "100%",
            height: "18px",
            fontSize: "12px",
          }}
        >
          {prop.createdAt}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid black",
            padding: "10px 0px 10px 0px",
            postion: "relative",
          }}
        >
          <UserInfo
            nickname={prop.nickname}
            type={prop.type}
            profileimage={prop.profileimage}
          />
          <ReportButton>
            <img
              src="../../../assets/images/Three_Dots_icon.png"
              style={{ height: "17px" }}
            ></img>
          </ReportButton>
        </div>
        <div
          style={{
            width: "100%",
            padding: "9px 0px 5px 0px",
            borderBottom: "1px solid black",
            zIndex: "1",
          }}
        >
          <img src={prop.image} style={{ width: "100%" }} />
          <div
            style={{
              width: "100%",
              padding: "0px 22px 0px 22px",
              whiteSpace: "pre-wrap",
              fontSize: "16px",
            }}
          >
            {prop.content}
          </div>
        </div>
        <div
          style={{
            height: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "20px 0px 20px 0px",
          }}
        >
          <div
            style={{
              height: "25px",
              display: "flex",
              alignItems: "center",
                marginLeft: "13px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                placeItems: "center",
              }}
            >
              <img
                src="../../../assets/images/Like_icon.png"
                style={{ height: "25px" }}
              ></img>
            </div>
            <div style={{ margin: "8px" }}>좋아요 {prop.like_count}</div>
          </div>
        </div>
      </div>
    </ScrollContent>
  );
};

export default CompletionDetail;
