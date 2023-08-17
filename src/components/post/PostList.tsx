import Post, { PostProps } from "./Post";

export interface PostListProps {
  posts: PostProps[];
}
const PostList: React.FC<PostListProps> = ({ ...prop }) => {
  const listItems = prop.posts.map((item, index) => (
    <Post
      id={item.id}
      key={index.toString()}
      writer={item.writer}
      contentShort={item.contentShort}
      commentsCnt={item.commentsCnt}
      likesCnt={item.likesCnt}
      createdAt={item.createdAt}
      title={item.title}
      category={item.category}
      viewCnt={item.viewCnt}
      updatedAt={item.updatedAt}
    />
  ));

  return (
    <div
      style={{
        width: "100%",
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 15px 0px 15px",
        flex: "1",
        overflow: "auto",
        scrollBehavior: "smooth",
      }}
    >
      {listItems}
    </div>
  );
};

export default PostList;
