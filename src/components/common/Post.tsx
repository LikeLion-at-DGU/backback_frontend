import CommentList, { CommentListProps } from "./CommentList";
import UserInfo, { UserInfoProps } from "./UserInfo";

export interface PostProps extends UserInfoProps, CommentListProps {
  category: string[];
  title: string;
  createdAt: string;
  images: string[];
  content: string;
}

export const Post: React.FC<PostProps> = ({ ...prop }) => {
  return (
    <div
      style={{
        flex: "1",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>{prop.category}</div>
      <div>{prop.title}</div>
      <div>{prop.createdAt}</div>
      <UserInfo nickname={prop.nickname} type={prop.type} image={prop.image} />
      <div>캐러셀 컴포넌트</div>
      <div>{prop.content}</div>
      <CommentList
        comments={[...prop.comments]}
        like_count={prop.like_count}
        comments_count={prop.comments_count}
      />
    </div>
  );
};
