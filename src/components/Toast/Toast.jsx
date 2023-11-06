import {
  ProgressBarLowerLayer,
  ProgressBarUpperLayer,
  Toast as SToast,
  DangerToast as SDangerToast,
  SuccessToast as SSuccessToast,
  ToastContent,
  CloseIcon,
} from './Toast.styles';
import grayCloseIcon from '../../assets/gray-close-icon.svg';

const ToastProgressBar = ({ duration = 5000 }) => {
  const durationOnSeconds = `${duration / 1000}s`;
  return (
    <>
      <ProgressBarLowerLayer $animationDuration={durationOnSeconds} />
      <ProgressBarUpperLayer $animationDuration={durationOnSeconds} />
    </>
  );
};

const ToastContentWrapper = ({
  duration = 5000,
  remove = () => {},
  children,
}) => {
  return (
    <>
      <ToastContent>{children}</ToastContent>
      <CloseIcon src={grayCloseIcon} onClick={remove} />
      <ToastProgressBar duration={duration} />
    </>
  );
};

export const DangerToast = (props) => (
  <SDangerToast>
    <ToastContentWrapper {...props} />
  </SDangerToast>
);

export const SuccessToast = (props) => (
  <SSuccessToast>
    <ToastContentWrapper {...props} />
  </SSuccessToast>
);
