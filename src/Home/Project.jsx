import React from 'react';
import styled from 'styled-components';

export default function Project() {
  return (
    <ProjectSection>
      <ProjectH2>프로젝트</ProjectH2>

      <ProjectMenu>
        <ProjectItem>
          <ProjectH4>Theine</ProjectH4>
          <ProjectDes>
            이 프로젝트는 노드와 리액트로 회원가입, 로그인, 카카오로그인, 상품 조회/장바구니/구매 등
            다양한 쇼핑몰 서비스를 제공하기 위해 만들어졌습니다.
          </ProjectDes>
        </ProjectItem>
      </ProjectMenu>
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  margin-top: 30px;
`;

const ProjectH2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

const ProjectMenu = styled.ul``;

const ProjectItem = styled.li``;

const ProjectH4 = styled.h4``;

const ProjectDes = styled.p``;
