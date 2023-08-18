import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import backgroundImage from "../../public/assets/images/PageWrapper.png";

interface LayoutProps {
  children: ReactNode;
}

const PageWrapper = styled.div`
  background-color: #f5f5f5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Container>
        <Header />
        {children}
        <BottomBar />
      </Container>
    </PageWrapper>
  );
};

export default Layout;
