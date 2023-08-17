import React from "react";
import ReportButton from "../core/ReportButton";

export interface ReviewProps {
  id: string;
  content: string;
  index?: number;
}

const Comment: React.FC<ReviewProps> = ({ ...prop }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "65px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        fontSize: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px 10px 0px",
        }}
      >
        <div
          style={{
            whiteSpace: "nowrap",
            fontSize: "16px",
            height: "100%",
            padding: "0px 15px 0px 15px",
          }}
        >
          익명 {prop.index}
        </div>
        <ReportButton id={prop.id} type={"review"} />
      </div>

      <div
        style={{
          flex: "1",
          width: "100%",
          padding: "0px 15px 10px 15px",
          wordWrap: "break-word",
          borderBottom: "1px solid #B7BBC8",
        }}
      >
        {prop.content}
      </div>
    </div>
  );
};

export default Comment;
