import Completion, { CompletionProps } from "./Completion";
import { ScrollContent } from "../../post/PostDetail";
import RouterLink from "@/components/core/RouterLink";
import { UserInfoProps } from "../UserInfo";

export interface CompletionListProps {
  completions: CompletionProps[];
}

const CompletionList: React.FC<CompletionListProps> = ({ ...prop }) => {
  const listItems = prop.completions.map((item, index) => (
    <div style={{ width: "33.3%" }}>
      <Completion
        id={item.id}
        key={index.toString()}
        image={item.image}
        writer={item.writer}
        profileId={item.profileId}
        nickname={item.nickname}
        type={item.type}
        level={item.level}
        isPrivate={item.isPrivate}
      />
    </div>
  ));
  return (
    <ScrollContent style={{ display: "relative" }}>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "15px 15px 0px 15px",
          }}
        >
          {listItems}
        </div>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            height: "35px",
            width: "110px",
            backgroundColor: "white",
            padding: "7px 20px 6px 20px",
            borderRadius: "20px",
            bottom: "70px",
            left: "calc(50% - 57.5px)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            border: "0.5px solid #ccc",
          }}
        >
          <RouterLink href="/completion/write">
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "13px", fontFamily: "MainFont" }}>
                기록하기
              </span>
              <img
                src="../../../assets/icons/sweat.png"
                style={{ width: "14px", height: "14px", margin: "3px" }}
              />
            </div>
          </RouterLink>
        </div>
      </div>
    </ScrollContent>
  );
};

export default CompletionList;
