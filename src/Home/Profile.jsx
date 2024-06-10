import React from 'react';
import styled from 'styled-components';

export default function Profile() {
  return (
    <ProfileSection>
      <ProfileH1>기본정보</ProfileH1>

      <ProfileName>
        안녕하세요. <br></br>
        <H2Strong>프론트엔드 개발자, 오정진</H2Strong>입니다.
      </ProfileName>

      <ProfileP>
        3년차 프론트엔드(React, React-Native) 개발자입니다. 저는 웹 플랫폼과 모바일 플랫폼을 위한
        사용자 친화적인 UI 구현에 가치를 두고 있으며, 리액트의 컴포넌트 기반 아키텍처를 활용하여
        재사용 및 유지보수가 가능한 코드를 작성하는 데 중점을 두고 있습니다. 프로젝트 진행간에
        목표를 위해 팀원들과 소통하고 협력하는 것을 중요하게 생각하고 있습니다. 또한 새로운 기술을
        탐구하고 배우는 데 열려 있으며, 개발 환경을 개선하기 위해 최신 트렌드를 계속 업데이트하려고
        노력하고 있습니다. 항상 새로운 도전에 대비하고 있으며 긍정적이고 성장 지향적인 태도를
        유지하려합니다. 함께 일하고 성장하며 혁신적인 프로젝트에 기여하고 싶습니다.
      </ProfileP>

      <NavMenu>
        <NavItem>벨로그</NavItem>
        <NavItem>깃헙</NavItem>
        <NavItem>이메일</NavItem>
      </NavMenu>

      <StackMenu>
        <StackItem>JavaScript</StackItem>
        <StackItem>TypeScript</StackItem>
        <StackItem>React</StackItem>
        <StackItem>NextJs</StackItem>
        <StackItem>Vue</StackItem>
        <StackItem>Node.js</StackItem>
        <StackItem>Express</StackItem>
        <StackItem>Nginx</StackItem>
        <StackItem>MySQL</StackItem>
      </StackMenu>
    </ProfileSection>
  );
}

const ProfileSection = styled.section``;

const ProfileH1 = styled.h1`
  display: none;
`;

const ProfileName = styled.h2`
  font-size: 40px;
`;

const H2Strong = styled.strong`
  font-weight: 600;
`;

const ProfileP = styled.p`
  margin: 35px 0 0;
  font-size: 16px;
  line-height: 1.8;
  word-break: break-word;
`;

const NavMenu = styled.ul`
  display: flex;
`;

const NavItem = styled.li``;

const StackMenu = styled.ul`
  display: flex;
`;

const StackItem = styled.li``;
