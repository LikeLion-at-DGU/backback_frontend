import Post, { PostProps } from "./Post";
import { ScrollContent } from "./PostDetail";

export interface PostListProps {
  posts: PostProps[];
}

const PostList: React.FC<PostListProps> = ({ ...prop }) => {
  const listItems = prop.posts.map((item, index) => (
    <Post
      id={item.id}
      key={index.toString()}
      nickname={item.nickname}
      type={item.type}
      profileimage={item.profileimage}
      content={item.content}
      comments_count={item.comments_count}
      like_count={item.like_count}
      createdAt={item.createdAt}
      title={item.title}
      category={item.category}
    />
  ));
  return (
    <ScrollContent>
      <div style={{ width: "100%", padding: "0px 20px 0px 20px" }}>
        <div
          style={{
            width: "100%",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderBottom: "1px solid black",
          }}
        >
          <div
            style={{
              textAlign: "left",
              flex: "1",
            }}
          >
            글쓰기
          </div>
          <div
            style={{
              textAlign: "right",
              flex: "1",
            }}
          >
            모든 카테고리
          </div>
        </div>
      </div>
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
        {listItems}
      </div>
    </ScrollContent>
  );
};

export default PostList;
