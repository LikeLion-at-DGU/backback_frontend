import styled from "styled-components";
import CommentList, { CommentListProps } from "./CommentList";
import UserInfo, { UserInfoProps } from "../common/UserInfo";
import ReportButton from "../core/ReportButton";
import ImageCarousel from "../core/ImageCarousel";
import { exercise_options } from "@/components/write/ExerciseChoice";
import { purpose_options } from "@/components/write/PurposeChoice";
import { useRef, useState, useEffect } from "react";
import postApi from "@/apis/postApi";
import { isAxiosError } from "axios";
import { useCookies } from "react-cookie";
import DeleteButton from "../core/DeleteButton";
import RouterLink from "../core/RouterLink";
import profileApi from "@/apis/profileApi";

export interface PostDetailProps extends CommentListProps {
  id: string;
  purpose: number;
  exercise: number;
  title: string;
  createdAt: string;
  images: string[];
  content: string;
  likesCnt: number;
  commentsCnt: number;
  writer: UserInfoProps;
  isLiked: boolean;
  isClipped: boolean;
  viewCnt: number;
  type: string;
}

export const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const PostDetail: React.FC<PostDetailProps> = ({ ...prop }) => {
  const [cookies] = useCookies(["uid"]);
  const date = prop.createdAt.split("T")[0].split("-").join(".");
  const time = prop.createdAt
    .split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(":");
  const createdAt = `${date} ${time}`;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  // const category =
  //   exercise_options[prop.exercise - 1] +
  //   " / " +
  //   purpose_options[prop.purpose - 1];
  const [category, setCateogry] = useState<string>("");
  useEffect(() => {
    if (prop.exercise && prop.purpose) {
      const category =
        exercise_options[prop.exercise - 1] +
        " / " +
        purpose_options[prop.purpose - 1];
      setCateogry(category);
    } else {
      setCateogry("전문가 / 칼럼");
    }
  }, [category, prop.exercise]);
  const postComment = async (content: string) => {
    try {
      await postApi()
        .postPostComment(prop.id, { content: content })
        .then(() => window.location.reload());
    } catch (error) {}
  };
  const postLike = async () => {
    try {
      await postApi()
        .likePost(prop.id)
        .then(() => window.location.reload());
    } catch (error) {}
  };
  const postScrap = async () => {
    try {
      if (!prop.isClipped) {
        await postApi().scrapPost(prop.id);
      } else {
        await postApi().scrapDelete(prop.id);
      }
      window.location.reload();
    } catch (error) {}
  };
  const handleSubmit = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue !== undefined) {
      postComment(inputValue);
    }
  };
  const [userNickname, setUserNickname] = useState<string>("");
  useEffect(() => {
    if (cookies.uid === undefined) return;
    profileApi()
      .getMe()
      .then((res: any) => {
        setUserNickname(res.data.nickname);
      });
  }, [userNickname, cookies.uid]);

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
            marginBottom: "10px",
            fontSize: "14px",
            fontFamily: "MainFont",
          }}
        >
          <img
            src="../../../assets/images/Category_right_icon.png"
            style={{ height: "11px", width: "7px", marginRight: "7px" }}
          ></img>
          {category}
        </div>
        <div
          style={{
            width: "100%",
            fontSize: "18px",
            fontFamily: "BoldFont",
            marginBottom: "5px",
          }}
        >
          {prop.title}
        </div>
        <div
          style={{
            width: "100%",
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
          }}
        >
          <RouterLink
            href={
              cookies.uid == prop.writer.profileId
                ? "/mypage"
                : "/profile/" + prop.writer.profileId
            }
          >
            <UserInfo
              nickname={prop.writer.nickname}
              type={prop.writer.type}
              profileId={prop.writer.profileId}
              level={prop.writer.level}
            />
          </RouterLink>
          {cookies.uid &&
            (cookies.uid == prop.writer.profileId ? (
              <DeleteButton id={prop.id} type={"post"} />
            ) : (
              <ReportButton id={prop.id} type={"post"} />
            ))}
        </div>
        <div
          style={{
            width: "100%",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid #B7BBC8",
          }}
        >
          <ImageCarousel images={prop.images} />
          <div
            style={{
              width: "100%",
              padding: "10px",
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
            margin: "14px 10px 20px 10px",
          }}
        >
          <div
            style={{
              height: "25px",
              display: "flex",
              alignItems: "center",
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
              {!prop.isLiked ? (
                <img
                  src="../../../assets/images/like_icon.png"
                  style={{ height: "30px" }}
                  onClick={postLike}
                ></img>
              ) : (
                <img
                  src="../../../assets/images/Click_Like_icon.png"
                  style={{ height: "30px" }}
                  onClick={postLike}
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
            <img
              src="../../../assets/images/Message_icon.png"
              style={{ height: "23px", width: "21px" }}
            ></img>
            <div
              style={{
                margin: "8px",
                fontSize: "16px",
                fontFamily: "MainFont",
              }}
            >
              댓글 {prop.commentsCnt}
            </div>
          </div>
          <div style={{ cursor: "pointer", placeItems: "center" }}>
            {!prop.isClipped ? (
              <img
                src="../../../assets/images/noscrap.svg"
                style={{ height: "22px" }}
                onClick={postScrap}
              ></img>
            ) : (
              <img
                src="../../../assets/images/Click_Scrap_icon.png"
                style={{ height: "22px" }}
                onClick={postScrap}
              ></img>
            )}
          </div>
        </div>
        <CommentList comments={[...prop.comments]} />
        <div style={{ width: "100%", padding: "0px 15px 0px 15px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px 0px 10px 0px",
              height: "auto",
              borderTop: "1px solid #B7BBC8",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "15px 20px 15px 20px",
                border: "1px solid #B7BBC8",
                borderRadius: "10px",
                height: "auto",
                fontSize: "16px",
                fontFamily: "BoldFont",
              }}
            >
              {userNickname}
              <textarea
                placeholder="댓글을 남겨보세요"
                style={{
                  border: "none",
                  resize: "none",
                  overflow: "hidden",
                  outline: "none",
                  minHeight: "60px",
                  scrollBehavior: "smooth",
                  marginTop: "10px",
                  fontSize: "14px",
                  fontFamily: "MainFont",
                }}
                ref={inputRef}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: "10px",
              }}
            >
              {cookies.uid ? (
                <button
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "#B7BBC8",
                    width: "38px",
                    height: "30px",
                    fontSize: "14px",
                    cursor: "pointer",
                    fontFamily: "MainFont",
                  }}
                  onClick={handleSubmit}
                >
                  등록
                </button>
              ) : (
                <RouterLink href="/login">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                      borderRadius: "10px",
                      backgroundColor: "#B7BBC8",
                      height: "30px",
                      fontSize: "14px",
                      cursor: "pointer",
                      fontFamily: "MainFont",
                      padding: "10px",
                    }}
                  >
                    로그인 후 이용 가능
                  </div>
                </RouterLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollContent>
  );
};

export default PostDetail;
