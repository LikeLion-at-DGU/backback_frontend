import Comment, { CommentProps } from "./Comment";

export interface CommentListProps {
  like_count: number;
  comments_count: number;
  comments: CommentProps[];
}

const CommentList: React.FC<CommentListProps> = ({ ...prop }) => {
  const listItems = prop.comments.map((item, index) => (
    <Comment
      key={index.toString()}
      nickname={item.nickname}
      type={item.type}
      image={item.image}
      comment={item.comment}
    />
  ));
  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "18px" }}>
      <div
        style={{
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px 30px 20px 30px",
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
          <img
            src="../../../assets/icons/icon-48x48.png"
            style={{ height: "100%" }}
          ></img>
          <div style={{ margin: "5px" }}>좋아요 {prop.like_count}</div>
          <img
            src="../../../assets/icons/icon-48x48.png"
            style={{ height: "100%" }}
          ></img>
          <div style={{ margin: "5px" }}>댓글 {prop.comments_count}</div>
        </div>
        <button>버튼</button>
      </div>
      <div>{listItems}</div>
    </div>
  );
};

export default CommentList;
