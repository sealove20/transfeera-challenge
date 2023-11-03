import styled from 'styled-components';

export const Header = styled.header`
  height: ${(props) => props.theme.headerheight};
  width: 100%;
  background-color: ${(props) => props.theme.white};
`;

export const HeaderImage = styled.img`
  height: 25px;
  width: 129px;
`;

export const HeaderContent = styled.div`
  padding: 10px 50px 15px;
`;
