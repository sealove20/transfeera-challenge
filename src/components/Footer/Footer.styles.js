import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 42px;
`;

export const FooterImage = styled.img`
  height: ${(props) => props.theme.sizes.components.footerHeight};
  width: 98px;
`;
