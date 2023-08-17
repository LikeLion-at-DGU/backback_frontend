import ScrapPost from "./Scrap";
import { UserInfoProps } from "../common/UserInfo";

export interface FindPostProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  writer: UserInfoProps;
  title: string;
  contentShort: string;
  commentsCnt: number;
  viewCnt: number;
  likesCnt: number;
}

const FindList = (props: { posts: FindPostProps[] }) => {
  const listItems = props.posts.map((item, index) => (
    <ScrapPost
      id={item.id}
      createdAt={item.createdAt}
      updatedAt={item.updatedAt}
      writer={item.writer}
      title={item.title}
      contentShort={item.contentShort}
      commentsCnt={item.commentsCnt}
      viewCnt={item.viewCnt}
      likesCnt={item.likesCnt}
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
      {props.posts.length ? (
        listItems
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          검색 결과가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
};

export default FindList;
