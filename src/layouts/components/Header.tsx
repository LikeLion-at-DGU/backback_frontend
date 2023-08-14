import UserInfo from "@/components/common/UserInfo";
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
  &:hover {
    border-bottom: 1.5px solid blue;
    font-weight: 700;
  }
  ${(props) =>
    props.active &&
    css`
      border-bottom: 1.5px solid blue;
      font-weight: 700;
    `}
`;

const Header: React.FC = () => {
  const [post, setPost] = React.useState<boolean>(false);
  const [pro, setPro] = React.useState<boolean>(false);
  const [popular, setPopular] = React.useState<boolean>(false);
  const [completed, setCompleted] = React.useState<boolean>(false);
  const [gym, setGym] = React.useState<boolean>(false);
  useEffect(() => {
    const url = window.location.href;
    if (url.includes("post")) {
      setPost(true);
    } else if (url.includes("pro")) {
      setPro(true);
    } else if (url.includes("popular")) {
      setPopular(true);
    } else if (url.includes("completed")) {
      setCompleted(true);
    } else if (url.includes("gym")) {
      setGym(true);
    }
  }, [post, pro, popular, completed, gym]);
  return (
    <>
      <header
        style={{
          height: "50px",
          width: "100%",
          maxWidth: "480px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1", textAlign: "center" }}></div>
        <div style={{ flex: "7", textAlign: "center" }}>
          <img
            src="../../../assets/images/Logo.png"
            style={{ height: "30px" }}
          ></img>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <img
            src="../../../assets/images/find_icon.png"
            style={{ height: "30px" }}
          ></img>
        </div>
      </header>
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid black",
        }}
      >
        <div style={{ flex: "1" }}></div>
        <Community active={post}>커뮤니티</Community>
        <Community active={pro}>전문가</Community>
        <Community active={popular}>인기</Community>
        <Community active={completed}>오운완</Community>
        <Community active={gym}>헬스장</Community>
        <div style={{ flex: "1" }}></div>
      </div>
    </>
  );
};

export default Header;
