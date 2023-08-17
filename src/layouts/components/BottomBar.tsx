import { useRouter } from "next/router";
import React from "react";
import RouterLink from "../../components/core/RouterLink";
import styled from "styled-components";
import { useCookies } from "react-cookie";

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
  const [cookies] = useCookies(["uid"]);
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        maxWidth: "480px",
        padding: "10px",
        borderTop: "2px solid #B7BBC8",
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
            src="../../../assets/images/Back_icon.png"
            style={{ height: "20px", width: "20px" }}
          ></img>
        </span>
      </div>
      <RouterLink href="/">
        <img
          src="../../../assets/images/Home_icon.png"
          style={{ height: "20px", width: "23px" }}
        ></img>
      </RouterLink>
      <RouterLink href="/post/scraps">
        <img
          src="../../../assets/images/Scrap_icon.png"
          style={{ height: "20px", width: "17px" }}
        ></img>
      </RouterLink>
      <RouterLink href={cookies.uid ? "/mypage" : "/login"}>
        <img
          src="../../../assets/images/Mypage_icon.png"
          style={{ height: "20px" }}
        ></img>
      </RouterLink>
    </div>
  );
};

export default Header;
