import React from "react";
import Link from "next/link";

export interface TagButtonProps {
    content: string;
    id: string;
}

const TagButton: React.FC<TagButtonProps> = ({ ... prop }) => {
    let paddingValue;
    if (prop.content.length==2){
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
                    whiteSpace: "nowrap",
                    overflow: "hidden", 
                    textOverflow: "ellipsis",
    };

    return (
        <Link href="/find/[id]" as={`/find/${prop.id}`}>
            <button
                style={buttonStyle}>
                #{prop.content}
            </button>
        </Link>
    )
};

export default TagButton;