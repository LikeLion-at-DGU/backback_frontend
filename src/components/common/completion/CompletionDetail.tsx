import { ScrollContent } from "../../post/PostDetail";
import UserInfo, { UserInfoProps } from "@/components/common/UserInfo";
import DeleteButton from "@/components/core/DeleteButton";
import ReportButton from "@/components/core/ReportButton";
import completionApi from "@/apis/completionApi";
import { isAxiosError } from "../../../../node_modules/axios/index";
import { useCookies } from "react-cookie";
import RouterLink from "@/components/core/RouterLink";

export interface CompletionDetailProps extends UserInfoProps {
  id: string;
  title: string;
  createdAt: string;
  writer: UserInfoProps;
  image: string;
  content: string;
  likesCnt: number;
  isLiked: boolean;
  isPrivate: boolean;
}

export const CompletionDetail: React.FC<CompletionDetailProps> = ({
  ...prop
}) => {
  const date = prop.createdAt?.split("T")[0].split("-").join(".");
  const time = prop.createdAt
    ?.split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(":");
  const createdAt = `${date} ${time}`;
  const completionLike = async () => {
    try {
      await completionApi()
        .likeCompletion(prop.id)
        .then(() => window.location.reload());
    } catch (error) {
      if (isAxiosError(error)) {
      }
    }
  };

  const [cookies] = useCookies(["uid"]);
  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          padding: "19px",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "22px",
            marginBottom: "10px",
            fontSize: "14px",
            fontFamily: "MainFont",
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
            fontFamily: "MainFont",
          }}
        >
          {createdAt}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid #B7BBC8",
            padding: "10px 0px 10px 0px",
            fontFamily: "MainFont",
            fontSize: "16px",
          }}
        >
          <UserInfo
            nickname={prop.writer?.nickname}
            type={prop.writer?.type}
            profileId={prop.writer?.profileId}
            level={prop.writer?.level}
          />
          {cookies.uid &&
            (cookies.uid == prop.writer?.profileId ? (
              <DeleteButton id={prop.id} type={"completion"} />
            ) : (
              <ReportButton id={prop.id} type={"completion"} />
            ))}
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
              padding: "0px 20px 0px 20px",
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
              {prop.isLiked ? (
                <img
                  src="../../../assets/images/Click_Like_icon.png"
                  style={{ height: "30px" }}
                  onClick={completionLike}
                ></img>
              ) : (
                <img
                  src="../../../assets/images/Like_icon.png"
                  style={{
                    height: "30px",
                  }}
                  onClick={completionLike}
                ></img>
              )}
            </div>
            <div
              style={{
                margin: "8px",
                fontSize: "16px",
                fontFamily: "MainFont",
              }}
            >
              좋아요 {prop.likesCnt}
            </div>
          </div>
        </div>
      </div>
    </ScrollContent>
  );
};

export default CompletionDetail;
