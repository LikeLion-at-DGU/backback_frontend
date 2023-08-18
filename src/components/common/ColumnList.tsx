import Column, { ColumnProps } from "./Column";
import { ScrollContent } from "../post/PostDetail";

export interface ColumnListProps {
  columns: ColumnProps[];
}

const ColumnList: React.FC<ColumnListProps> = ({ ...prop }) => {
  const listItems = prop.columns.map((item, index) => (
    <Column
      id={item.id}
      contentShort={item.contentShort}
      createdAt={item.createdAt}
      title={item.title}
      image={item.image}
      viewCnt={item.viewCnt}
      writer={item.writer}
      index={index}
      likesCnt={item.likesCnt}
      updatedAt={item.updatedAt}
      category={item.category}
      commentsCnt={item.commentsCnt}
    />
  ));
  return (
    <div style={{ width: "100%", padding: "15px" }}>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(2, 1fr)",
          overflow: "auto",
          scrollBehavior: "smooth",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {listItems}
      </div>
    </div>
  );
};

export default ColumnList;
