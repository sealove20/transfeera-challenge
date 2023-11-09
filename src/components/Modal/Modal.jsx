import { useEffect } from 'react';
import {
  Backdrop,
  CloseIcon,
  Header,
  HeaderTitle,
  Modal as SModal,
} from './Modal.styles';
import closeIcon from '../../assets/close-icon.svg';

export const Modal = ({
  isVisible = false,
  onCloseClick,
  $customCss,
  $customBackgropCss,
  children,
  title,
}) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isVisible ? 'hidden' : 'auto';
  }, [isVisible]);

  if (!isVisible) return null;
  return (
    <>
      <Backdrop
        onClick={onCloseClick}
        $customBackgropCss={$customBackgropCss}
      />
      <SModal data-testid="modal" $customCss={$customCss}>
        <CloseIcon
          data-testid="close-modal"
          src={closeIcon}
          onClick={onCloseClick}
        />
        <Header>
          <HeaderTitle>{title}</HeaderTitle>
        </Header>
        {children}
      </SModal>
    </>
  );
};
