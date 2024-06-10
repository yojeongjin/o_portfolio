import React from 'react';
import styled from 'styled-components';

export default function Career() {
  return (
    <CareerSection>
      <CareerH2>경력</CareerH2>

      <CareerH4>MDS모빌리티 (구 한컴모빌리티)</CareerH4>
      <CareerPeriod>2023.06. - 재직중 (1년 1개월)</CareerPeriod>

      <CareerMenu>
        <CareerItem>
          IT 온라인 강의 플랫폼인 인프런과 채용 서비스 랠릿의 프론트엔드 개발을 담당
        </CareerItem>
        <CareerItem>
          IT 온라인 강의 플랫폼인 인프런과 채용 서비스 랠릿의 프론트엔드 개발을 담당
        </CareerItem>
        <CareerItem>
          IT 온라인 강의 플랫폼인 인프런과 채용 서비스 랠릿의 프론트엔드 개발을 담당
        </CareerItem>
        <CareerItem>
          IT 온라인 강의 플랫폼인 인프런과 채용 서비스 랠릿의 프론트엔드 개발을 담당
        </CareerItem>
        <CareerItem>
          IT 온라인 강의 플랫폼인 인프런과 채용 서비스 랠릿의 프론트엔드 개발을 담당
        </CareerItem>{' '}
        <CareerItem>
          IT 온라인 강의 플랫폼인 인프런과 채용 서비스 랠릿의 프론트엔드 개발을 담당
        </CareerItem>
      </CareerMenu>
    </CareerSection>
  );
}

const CareerSection = styled.section`
  margin-top: 30px;
`;

const CareerH2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

const CareerH4 = styled.h4`
  font-weight: 500;
`;

const CareerPeriod = styled.p``;

const CareerMenu = styled.ul``;

const CareerItem = styled.li`
  list-style: unset;
`;
