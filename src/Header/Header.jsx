import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderBase>
      <HeaderInner>
        <Logo src={`${process.env.PUBLIC_URL}/assets/symbol.png`} alt="로고" />
      </HeaderInner>
    </HeaderBase>
  );
}

const HeaderBase = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1440px;
  min-width: 280px;
  height: 60px;
  margin: 0 auto;
  z-index: 9;
`;

const HeaderInner = styled.div`
  max-width: calc(100% - 48px);
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 40px;
`;
