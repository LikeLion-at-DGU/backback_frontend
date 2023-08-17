import RouterLink from "@/components/core/RouterLink";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";
interface CommunityProps {
  active: boolean;
}
const Community = styled.div<CommunityProps>`
  height: 100%;
  flex: 2;
  display: grid;
  textalign: center;
  cursor: pointer;
  place-items: center;
  font-size: 16px;
  font-family: ${(props) => (props.active ? "BoldFont" : "MainFont")};
  &:hover {
    transform: translateY(2px);
    border-bottom: 3px solid #6a81aa;
  }
  ${(props) =>
    props.active &&
    css`
    transform: translateY(2px);
    border-bottom: 3px solid #6a81aa;
    font-family: "BoldFont";
    `}
`;

const NavBar: React.FC = () => {
  const [post, setPost] = React.useState<boolean>(false);
  const [column, setColumn] = React.useState<boolean>(false);
  const [popular, setPopular] = React.useState<boolean>(false);
  const [completion, setCompleted] = React.useState<boolean>(false);
  const [gym, setGym] = React.useState<boolean>(false);
  useEffect(() => {
    const url = window.location.href;
    if (url.includes("post")) {
      setPost(true);
    } else if (url.includes("column")) {
      setColumn(true);
    } else if (url.includes("popular")) {
      setPopular(true);
    } else if (url.includes("completion")) {
      setCompleted(true);
    } else if (url.includes("gym")) {
      setGym(true);
    }
  }, [post, column, popular, completion, gym]);
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #B7BBC8",
      }}
    >
      <div style={{ flex: "1", fontFamily: "MainFont" }}></div>
      <Community active={post}>
        <RouterLink href={"/post"}>커뮤니티</RouterLink>
      </Community>
      <Community active={column}>
        <RouterLink href={"/column"}>전문가</RouterLink>
      </Community>
      <Community active={popular}>
        <RouterLink href={"/popular"}>인기</RouterLink>
      </Community>
      <Community active={completion}>
        <RouterLink href={"/completion"}>오운완</RouterLink>
      </Community>
      <Community active={gym}>
        <RouterLink href={"/gym"}>헬스장</RouterLink>
      </Community>
      <div style={{ flex: "1" }}></div>
    </div>
  );
};

export default NavBar;
