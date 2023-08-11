import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ height: '50px', width: '100%', maxWidth: '500px', backgroundColor: 'skyblue', padding: '10px', display: 'flex', alignItems: 'center' }}>
      <h1>헤더</h1>
    </header>
  );
};

export default Header;
