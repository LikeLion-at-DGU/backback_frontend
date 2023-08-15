import Post, { PostProps } from "./post/Post";
import HotColumn, { HotColumnProps } from "./HotColumn";
import Link from "../../../node_modules/next/link";

export interface PostListProps {
  posts: PostProps[];
}

export interface ColumnListProps {
  columns: HotColumnProps[];
}

const PopularPostList: React.FC<PostListProps> = ({ ...prop }) => {
  const postlistItems = prop.posts.map((item, index) => (
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
    <div style={{ width: "100%", padding: "0px 15px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "60px",
          padding: "23px 0px 0px 11px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "BoldFont",
            fontSize: "18px",
          }}
        >
          HOT 게시물
        </div>
        <Link
          href="/post"
          style={{
            fontSize: "14px",
          }}
        >
          더보기
        </Link>
      </div>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          flex: "1",
        }}
      >
        {postlistItems}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "54px",
          padding: "0px 0px 0px 11px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "BoldFont",
            fontSize: "18px",
          }}
        >
          HOT 칼럼
        </div>
        <Link
          href="/column"
          style={{
            fontSize: "14px",
          }}
        >
          더보기
        </Link>
      </div>
    </div>
  );
};

const PopularColumnList: React.FC<ColumnListProps> = ({ ...prop }) => {
  const columnlistItems = prop.columns.map((item, index) => (
    <HotColumn
      id={item.id}
      key={index}
      nickname={item.nickname}
      type={item.type}
      content={item.content}
      createdAt={item.createdAt}
      title={item.title}
      image={item.image}
      views={item.views}
      profileimage={""}
      index={index}
      isHot={true}
    />
  ));
  return (
    <div
      style={{
        width: "100%",
        padding: "0px 15px 62px 15px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "1px 0px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "146px",
            height: "100%",
            boxShadow: "0px 10px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          {columnlistItems}
        </div>
      </div>
    </div>
  );
};

export { PopularColumnList, PopularPostList };
