import { ScrollContent } from "../../post/PostDetail";
import UserInfo, { UserInfoProps } from "@/components/common/UserInfo";
import DeleteButton from "@/components/core/DeleteButton";
import ReportButton from "@/components/core/ReportButton";
import { cookies } from "next/dist/client/components/headers";
import { useCookies } from "react-cookie";

export interface CompletionDetailProps extends UserInfoProps {
  id: string;
  title: string;
  createdAt: string;
  image: string;
  content: string;
  like_count: number;
  is_liked: boolean;
}

export const CompletionDetail: React.FC<CompletionDetailProps> = ({
  ...prop
}) => {
  const [cookies] = useCookies(["uid"]);
  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 15px 0px 15px",
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
          <img
            src="../../../assets/images/Category_right_icon.png"
            style={{
              height: "11px",
              width: "7px",
              marginRight: "7px",
            }}
          />
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
            borderBottom: "1px solid #B7BBC8",
            padding: "10px 0px 10px 0px",
            position: "relative",
          }}
        >
          <UserInfo
            profileId={prop.profileId}
            nickname={prop.nickname}
            type={prop.type}
            level={prop.level}
          />
          {cookies.uid == prop.writer.profileId ? (
            <DeleteButton id={prop.id} type={"post"} />
          ) : (
            <ReportButton id={prop.id} type={"post"} />
          )}
        </div>
        <div
          style={{
            width: "100%",
            padding: "9px 0px 5px 0px",
            borderBottom: "1px solid #B7BBC8",
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
                style={{ height: "30px" }}
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
