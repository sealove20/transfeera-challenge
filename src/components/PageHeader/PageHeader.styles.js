import styled, { css } from 'styled-components';

export const PageHeader = styled.section`
  height: 122px;
  width: 100%;
  background-color: ${(props) => props.theme.gray700};
`;

export const PageHeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 44px;
`;

export const PageHeaderTitle = styled.h1`
  font-size: 1.75rem;
  color: ${(props) => props.theme.gray500};
  font-weight: 300;
`;

export const PageHeaderPlusIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const PageHeaderCTAButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
