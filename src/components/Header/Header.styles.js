import styled from 'styled-components';

export const Header = styled.header`
  height: ${(props) => props.theme.sizes.components.headerheight};
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.sizes.screen.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderImage = styled.img`
  height: 25px;
  width: 129px;
`;

export const HeaderContent = styled.div`
  padding: 10px 50px 15px;
`;
