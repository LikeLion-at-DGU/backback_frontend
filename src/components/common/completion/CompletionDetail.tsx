import { ScrollContent } from "../../post/PostDetail";
import UserInfo, { UserInfoProps } from "@/components/common/UserInfo";
import DeleteButton from "@/components/core/DeleteButton";
import ReportButton from "@/components/core/ReportButton";
import RouterLink from "@/components/core/RouterLink";
import completionApi from "@/apis/completionApi";
import { useState } from "react";
import ImageSwiper from "@/components/core/ImageSwiper";
import { isAxiosError } from "../../../../node_modules/axios/index";
import { cookies } from "next/dist/client/components/headers";
import { useCookies } from "react-cookie";

export interface CompletionDetailProps extends UserInfoProps {
  id: string;
  title: string;
  createdAt: string;
  writer: UserInfoProps;
  image: string;
  content: string;
  likeCnt: number;
  isLiked: boolean;
  isPrivate: boolean;
}

const deleteCompletion = (id: string) => {
  completionApi()
    .deleteCompletion(id)
    .then(() => {
      window.location.href = `/completion`;
    });
};

export const CompletionDetail: React.FC<CompletionDetailProps> = ({
  ...prop
}) => {
  const completionLike = async () => {
    try {
      await completionApi()
        .likeCompletion(prop.id)
        .then((res) => console.log(res.data));
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data);
      }
    } finally {
      window.location.reload();
    }
  };

  const changeprivate = async () => {
    try {
      await completionApi()
        .privateCompletion(prop.id, { isPrivate: prop.isPrivate })
        .then((res) => console.log(res.data));
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data);
      }
    } finally {
      window.location.reload();
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
          }}
        >
          <UserInfo
            nickname={prop.writer?.nickname}
            type={prop.writer?.type}
            profileId={prop.writer?.profileId}
            level={prop.writer?.level}
          />
          {cookies.uid == prop.writer.profileId ? (
            <DeleteButton id={prop.id} type={"completion"} />
          ) : (
            <ReportButton id={prop.id} type={"completion"} />
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
            <div style={{ margin: "8px" }}>
              좋아요
              {prop.likeCnt}
            </div>
            <RouterLink href={`/completion/edit/${prop.id}/`}>
              수정하기
            </RouterLink>
            <button onClick={() => deleteCompletion(prop.id)}>삭제하기</button>
            <button onClick={changeprivate}>나만보기</button>
          </div>
        </div>
      </div>
    </ScrollContent>
  );
};

export default CompletionDetail;
