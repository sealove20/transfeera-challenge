import styled, { css, keyframes } from 'styled-components';

const progressBar = css`
  width: 100%;
  position: absolute;
  height: 5px;
  bottom: 0;
  left: 0;
`;

const progressBarAnimation = keyframes`
  0% {
      width: 100%;
  }
  100% {
      width: 0%;
  }
`;

const animationProgressBar = css`
  animation: ${progressBarAnimation};
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;

export const Toast = styled.div`
  height: 50px;
  width: 284px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.sizes.borderRadius.regular};
`;

export const ProgressBarLowerLayer = styled.div`
  ${progressBar}
  background: rgba(256,256,256,0.4);
  animation-duration: ${(props) => props.$animationDuration};
`;

export const ProgressBarUpperLayer = styled.div`
  ${progressBar}
  filter: contrast(75%);
  z-index: 1;
  background: inherit;
  animation-duration: ${(props) => props.$animationDuration};
  ${animationProgressBar}
`;

export const ToastContent = styled.div`
  margin-right: 50px;
`;

export const CloseIcon = styled.img`
  height: 15px;
  width: 14px;
  cursor: pointer;
`;

export const DangerToast = styled(Toast)`
  background-color: ${(props) => props.theme.semanticColors.dangerToast};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  font-size: ${(props) => props.theme.typography.fontSize.small};
`;

export const SuccessToast = styled(Toast)`
  background-color: blue;
`;
