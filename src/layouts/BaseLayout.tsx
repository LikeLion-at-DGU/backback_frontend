import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import CommentList from "@/components/common/CommentList";

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  position=flex;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <CommentList
        comments={[
          {
            nickname: "닉네임1",
            type: "../../../assets/icons/icon-48x48.png",
            image: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임2",
            type: "../../../assets/icons/icon-48x48.png",
            image: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임1",
            type: "../../../assets/icons/icon-48x48.png",
            image: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임2",
            type: "../../../assets/icons/icon-48x48.png",
            image: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임1",
            type: "../../../assets/icons/icon-48x48.png",
            image: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임2",
            type: "../../../assets/icons/icon-48x48.png",
            image: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
        ]}
        like_count={1}
        comments_count={6}
      />
      {children}
      <BottomBar />
    </Container>
  );
};

export default Layout;
