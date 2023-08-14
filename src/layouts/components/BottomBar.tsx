import { useRouter } from "next/router";
import React from "react";
import RouterLink from "../../components/core/RouterLink";
import styled from "styled-components";

const Menu = styled.div`
  height: 100%;
  flex: 2;
  display: grid;
  textalign: center;
  cursor: pointer;
  place-items: center;
  &:hover {
    border-bottom: 1.5px solid blue;
  }
`;

const Header: React.FC = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        maxWidth: "480px",
        padding: "10px",
        borderTop: "1px solid black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "grid",
        }}
      >
        <span
          onClick={handleGoBack}
          style={{ cursor: "pointer", placeItems: "center", display: "grid" }}
        >
          <img
            src="../../../assets/images/back.svg"
            style={{ height: "20px" }}
          ></img>
        </span>
      </div>
      <RouterLink href="/">
        <img
          src="../../../assets/images/home.svg"
          style={{ height: "20px" }}
        ></img>
      </RouterLink>
      <RouterLink href="/testing">
        <img
          src="../../../assets/images/scraplist.svg"
          style={{ height: "20px" }}
        ></img>
      </RouterLink>
      <RouterLink href="/testing2">
        <img
          src="../../../assets/images/mypage.svg"
          style={{ height: "20px" }}
        ></img>
      </RouterLink>
    </div>
  );
};

export default Header;
