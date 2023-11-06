import React, { useEffect, useRef } from 'react';
import { DangerToast, SuccessToast } from '../Toast/Toast';
import { ToastsWrapper as SToastsWrapper } from './ToastNotification.styles';

const typeRelation = {
  danger: DangerToast,
  success: SuccessToast,
};

const Toast = ({ type, children, duration, remove }) => {
  const ToastComponent = typeRelation[type] || DangerToast;
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const id = setTimeout(() => removeRef.current(), duration);
    return () => clearTimeout(id);
  }, [duration]);

  return (
    <ToastComponent duration={duration} remove={remove}>
      {children}
    </ToastComponent>
  );
};

export const ToastsWrapper = ({ toasts, remove, customStyles }) => {
  return (
    <SToastsWrapper $customStyles={customStyles}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          remove={() => remove(toast.id)}
          duration={toast.duration}
          type={toast.type}
        >
          {toast.content}
        </Toast>
      ))}
    </SToastsWrapper>
  );
};
