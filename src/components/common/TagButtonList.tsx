import TagButton, { TagButtonProps } from "./TagButton";

export interface TagButtonListProps {
  tags: TagButtonProps[];
}

const TagButtonList: React.FC<TagButtonListProps> = ({ ...prop }) => {
  const listItems = prop.tags.map((item, index) => (
    <TagButton id={item.id} content={item.content} />
  ));
  return (
    <div
      style={{
        width: "100%",
        padding: "6px 0px 0px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          gridTemplateColumns: "repeat(3, 1fr)",
          overflow: "auto",
          scrollBehavior: "smooth",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {listItems.map((item, index) => (
          <div
            key={index}
            style={{
              margin: "0px 9px 15px 0px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagButtonList;
