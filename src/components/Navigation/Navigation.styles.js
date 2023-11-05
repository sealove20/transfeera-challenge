import styled from 'styled-components';

export const Navigation = styled.nav`
  height: ${(props) => props.theme.sizes.components.navigationheight};
  width: 100%;
  background-color: ${(props) => props.theme.colors.green300};
`;

export const NavigationContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0 50px;
`;

export const NavigationItem = styled.li`
  position: relative;
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 110%;
    border-bottom: 3px solid ${(props) => props.theme.colors.white};
  }
`;
