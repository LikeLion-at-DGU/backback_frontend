import { ScrapProps } from "@/pages/post/scraps/index";
import ScrapPost from "./Scrap";

export interface ScrapListProps {
  posts: ScrapProps[];
}
const ScrapList: React.FC<ScrapListProps> = ({ ...prop }) => {
  const listItems = prop.posts.map((item, index) => (
    <ScrapPost
      id={item.post.id}
      createdAt={item.post.createdAt}
      updatedAt={item.post.updatedAt}
      writer={item.post.writer}
      title={item.post.title}
      contentShort={item.post.contentShort}
      commentsCnt={item.post.commentsCnt}
      viewCnt={item.post.viewCnt}
      likesCnt={item.post.likesCnt}
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

export default ScrapList;
