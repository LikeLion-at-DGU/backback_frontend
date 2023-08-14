import styled from "styled-components";
import CommentList, { CommentListProps } from "@/components/common/CommentList";
import UserInfo, { UserInfoProps } from "@/components/common/UserInfo";
import ReportButton from "@/components/core/ReportButton";
import ImageCarousel from "@/components/core/ImageCarousel";

export interface PostDetailProps extends UserInfoProps, CommentListProps {
  id: string;
  category: string[];
  title: string;
  createdAt: string;
  images: string[];
  content: string;
  like_count: number;
  comments_count: number;
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

export const Post: React.FC<PostDetailProps> = ({ ...prop }) => {
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
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          {prop.category}
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
          }}
        >
          <UserInfo
            nickname={prop.nickname}
            type={prop.type}
            profileimage={prop.profileimage}
          />
          <ReportButton>
            <img
              src="../../../assets/images/dot.svg"
              style={{ height: "100%" }}
            ></img>
          </ReportButton>
        </div>
        <div
          style={{
            width: "100%",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid black",
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
            안녕하세요! 오늘은 복부비만 체형을 가지신 분들을 위해 다이어트
            식단을 공유해볼까 해요:) 직접 겪으면서 만든 식단이라 꿀팁까지
            적어놨으니까 유용하게 사용해 주시면 좋겠어요 ! ✔️ 꿀팁 첫번째,
            블라블라블라블라블라블라블라블라블라
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
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                placeItems: "center",
              }}
            >
              <img
                src="../../../assets/images/dumbbell_down.svg"
                style={{ height: "100%" }}
              ></img>
            </div>
            <div style={{ margin: "5px" }}>좋아요 {prop.like_count}</div>
            <img
              src="../../../assets/images/comment.svg"
              style={{ height: "100%" }}
            ></img>
            <div style={{ margin: "5px" }}>댓글 {prop.comments_count}</div>
          </div>
          <div style={{ cursor: "pointer", placeItems: "center" }}>
            <img
              src="../../../assets/images/noscrap.svg"
              style={{ height: "100%" }}
            ></img>
          </div>
        </div>
        <CommentList comments={[...prop.comments]} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          borderRadius: "10px",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            height: "auto",
          }}
        >
          {prop.nickname}
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
            }}
          >
            등록
          </button>
        </div>
      </div>
    </ScrollContent>
  );
};

export default Post;
