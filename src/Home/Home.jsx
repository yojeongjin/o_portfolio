import React from 'react';
import styled from 'styled-components';
// components
import Profile from './Profile';
import Career from './Career';
import Project from './Project';

export default function Home() {
  return (
    <HomeBase>
      <Profile />
      <Career />
      <Project />
    </HomeBase>
  );
}

const HomeBase = styled.main`
  margin-top: 50px;
  min-height: calc(var(--vh, 1vh) * 100 - 50px);
  padding: 16px 24px;
`;
