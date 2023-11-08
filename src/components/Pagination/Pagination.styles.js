import styled from 'styled-components';

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled.img`
  width: 9px;
  height: 7px;
  cursor: pointer;
`;

export const PaginationNumberContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-evenly;
  color: ${(props) => props.theme.colors.blue700};
  cursor: pointer;
`;

export const PaginationNumber = styled.p`
  ${(props) => props.$currentPage && ``}
  font-weight: ${(props) =>
    props.$currentPage
      ? props.theme.typography.fontWeight.bold
      : props.theme.typography.fontWeight.regular};

  font-size: ${(props) =>
    props.$currentPage
      ? props.theme.typography.fontSize.big
      : props.theme.typography.fontSize.regular};
`;
