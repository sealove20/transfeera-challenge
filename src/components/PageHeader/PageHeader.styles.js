import styled, { css } from 'styled-components';

export const PageHeader = styled.section`
  height: 122px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray700};
  display: flex;
  align-items: center;
  padding: 40px 45px;
`;

export const PageHeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PageHeaderTitle = styled.h1`
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.gray500};
  font-weight: 300;
`;

export const PageHeaderPlusIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const PageHeaderSearchIcon = styled.img`
  height: 16px;
  width: 16px;
`;

export const pageHeaderCTAButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;
