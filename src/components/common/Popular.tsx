import Post, { PostProps } from "../post/Post";
import HotColumn, { HotColumnProps } from "./HotColumn";
import RouterLink from "../core/RouterLink";

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
      writer={item.writer}
      contentShort={item.contentShort}
      commentsCnt={item.commentsCnt}
      likesCnt={item.likesCnt}
      createdAt={item.createdAt}
      title={item.title}
      category={item.category}
      updatedAt={item.updatedAt}
      viewCnt={item.viewCnt}
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
        <RouterLink href="/post">더보기</RouterLink>
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
    </div>
  );
};

const PopularColumnList: React.FC<ColumnListProps> = ({ ...prop }) => {
  const columnlistItems = prop.columns.map((item, index) => (
    <HotColumn
      id={item.id}
      writer={item.writer}
      contentShort={item.contentShort}
      createdAt={item.createdAt}
      updatedAt={item.updatedAt}
      title={item.title}
      image={item.image}
      viewCnt={item.viewCnt}
      index={index}
      isHot={true}
      type={item.type}
      profileId={item.profileId}
      nickname={item.nickname}
    />
  ));
  return (
    <div style={{ width: "100%", padding: "0px 15px" }}>
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
        <RouterLink href="/column">더보기</RouterLink>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "1px 0px",
            overflow: "auto",
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
    </div>
  );
};

export { PopularColumnList, PopularPostList };
