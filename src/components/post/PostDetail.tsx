import styled from "styled-components";
import CommentList, { CommentListProps } from "./CommentList";
import UserInfo, { UserInfoProps } from "../common/UserInfo";
import ReportButton from "../core/ReportButton";
import ImageCarousel from "../core/ImageCarousel";
import { exercise_options } from "@/components/write/ExerciseChoice";
import { purpose_options } from "@/components/write/PurposeChoice";
import { useRef } from "react";
import postApi from "@/apis/postApi";
import { isAxiosError } from "axios";
import { useCookies } from "react-cookie";
import DeleteButton from "../core/DeleteButton";
import RouterLink from "../core/RouterLink";

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
  const category =
    exercise_options[prop.exercise - 1] +
    " / " +
    purpose_options[prop.purpose - 1];
  const postComment = async (content: string) => {
    try {
      await postApi().postPostComment(prop.id, { content: content });
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data);
      }
    } finally {
      window.location.reload();
    }
  };
  const postLike = async () => {
    try {
      await postApi().likePost(prop.id);
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data);
      }
    } finally {
      window.location.reload();
    }
  };
  const postScrap = async () => {
    try {
      if (!prop.isClipped) {
        await postApi().scrapPost(prop.id);
        alert("스크랩 되었습니다.");
      } else {
        await postApi().scrapDelete(prop.id);
        alert("스크랩이 삭제되었습니다.");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data);
      }
    } finally {
      window.location.reload();
    }
  };
  const handleSubmit = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue !== undefined) {
      postComment(inputValue);
    }
  };

  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div
          style={{
            width: "100%",
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          <img
            src="../../../assets/images/Category_right_icon.png"
            style={{ height: "10px", marginRight: "5px" }}
          ></img>
          {category}
        </div>
        <div
          style={{
            width: "100%",
            fontSize: "18px",
            fontWeight: "700",
            marginBottom: "5px",
          }}
        >
          {prop.title}
        </div>
        <div
          style={{
            width: "100%",
            fontSize: "12px",
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
          {cookies.uid == prop.writer.profileId ? (
            <DeleteButton id={prop.id} type={"post"} />
          ) : (
            <ReportButton id={prop.id} type={"post"} />
          )}
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
            margin: "20px 10px 20px 10px",
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
                  style={{ height: "25px" }}
                  onClick={postLike}
                ></img>
              ) : (
                <img
                  src="../../../assets/images/Click_Like_icon.png"
                  style={{ height: "25px" }}
                  onClick={postLike}
                ></img>
              )}
            </div>
            <div style={{ margin: "5px" }}>좋아요 {prop.likesCnt}</div>
            <img
              src="../../../assets/images/Message_icon.png"
              style={{ height: "21px", width: "23px" }}
            ></img>
            <div style={{ margin: "5px" }}>댓글 {prop.commentsCnt}</div>
          </div>
          <div style={{ cursor: "pointer", placeItems: "center" }}>
            {!prop.isClipped ? (
              <img
                src="../../../assets/images/noscrap.svg"
                style={{ height: "25px" }}
                onClick={postScrap}
              ></img>
            ) : (
              <img
                src="../../../assets/images/Click_Scrap_icon.png"
                style={{ height: "25px" }}
                onClick={postScrap}
              ></img>
            )}
          </div>
        </div>
        <CommentList comments={[...prop.comments]} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 0px 10px 0px",
            height: "auto",
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
            }}
          >
            조민우
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
            <button
              style={{
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#B7BBC8",
                width: "38px",
                height: "30px",
                fontSize: "14px",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </ScrollContent>
  );
};

export default PostDetail;
