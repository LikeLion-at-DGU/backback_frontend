import Comment, { CommentProps } from "./Comment";

export interface CommentListProps {
  comments: CommentProps[];
}

const CommentList: React.FC<CommentListProps> = ({ ...prop }) => {
  const listItems = prop.comments.map((item, index) => (
    <Comment
      key={index.toString()}
      content={item.content}
      writer={item.writer}
      createdAt={item.createdAt}
      id={item.id}
    />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "16px",
        width: "100%",
      }}
    >
      {listItems}
    </div>
  );
};

export default CommentList;
