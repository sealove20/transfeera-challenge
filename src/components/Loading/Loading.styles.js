import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid ${(props) => props.theme.colors.gray600};
  border-top: 10px solid ${(props) => props.theme.colors.green300};
  border-radius: 50%;
  animation: ${loadingAnimation} 1.5s linear infinite;
`;
