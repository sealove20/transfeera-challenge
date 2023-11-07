import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  height: auto;
  min-width: 635px;
  padding: 47px 38px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.borderRadius.regular};
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) => props.$customCss}
`;

export const Backdrop = styled.div`
  content: '';
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.black};
  opacity: 0.3;
  z-index: 5;

  ${(props) => props.$customBackgropCss}
`;

export const CloseIcon = styled.img`
  height: 15px;
  width: 14px;
  position: absolute;
  right: 23px;
  top: 25px;
  cursor: pointer;
`;

export const Header = styled.div``;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
`;
