import React from "react";
import RouterLink from "../core/RouterLink";

export interface TagButtonProps {
  content: string;
  id: string;
}

const TagButton: React.FC<TagButtonProps> = ({ ...prop }) => {
  let paddingValue;
  if (prop.content.length == 2) {
    paddingValue = "9px 28px 7px 28px";
  } else {
    paddingValue = "9px 17px 7px 17px";
  }

  const buttonStyle = {
    minHeight: "41px",
    color: "#6A81AA",
    border: "1px solid #6A81AA",
    borderRadius: "20px",
    cursor: "pointer",
    width: "auto",
    padding: paddingValue,
    background: "#FFFFFF",
    WhiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <RouterLink href={`/find/${prop.content}`}>
      <button style={buttonStyle}>#{prop.content}</button>
    </RouterLink>
  );
};

export default TagButton;
