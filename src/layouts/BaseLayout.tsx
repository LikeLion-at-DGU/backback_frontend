import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
