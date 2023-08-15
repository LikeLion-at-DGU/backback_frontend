import styled from "styled-components";
import CommentList, { CommentListProps } from "./CommentList";
import UserInfo, { UserInfoProps } from "../UserInfo";
import ReportButton from "../../core/ReportButton";
import ImageCarousel from "../../core/ImageCarousel";

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

export const PostDetail: React.FC<PostDetailProps> = ({ ...prop }) => {
  const category = prop.category.join(" / ");
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
            nickname={prop.nickname}
            type={prop.type}
            profileimage={prop.profileimage}
          />
          <ReportButton />
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
              <img
                src="../../../assets/images/Like_icon.png"
                style={{ height: "25px" }}
              ></img>
            </div>
            <div style={{ margin: "5px" }}>좋아요 {prop.like_count}</div>
            <img
              src="../../../assets/images/Message_icon.png"
              style={{ height: "25px" }}
            ></img>
            <div style={{ margin: "5px" }}>댓글 {prop.comments_count}</div>
          </div>
          <div style={{ cursor: "pointer", placeItems: "center" }}>
            <img
              src="../../../assets/images/noscrap.svg"
              style={{ height: "25px" }}
            ></img>
          </div>
        </div>
        <CommentList comments={[...prop.comments]} />
      </div>
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
                cursor: "pointer",
              }}
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
