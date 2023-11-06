import React, { useState, useCallback, useMemo } from 'react';
import { ToastContext } from './utils/context';
import { ToastsWrapper } from './ToastsWrapper';

function generateToastId() {
  return +new Date() + Math.round(Math.random() * 10000);
}

export function ToastProvider({ children, customStyles }) {
  const [toasts, setToasts] = useState([]);

  const add = useCallback(
    (content, type = 'danger', duration = 5000) =>
      setToasts((prevToasts) =>
        prevToasts.concat({ id: generateToastId(), content, type, duration }),
      ),
    [],
  );
  const remove = useCallback(
    (id) => setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id)),
    [],
  );

  const methods = useMemo(() => ({ add, remove }), [add, remove]);

  return (
    <ToastContext.Provider value={methods}>
      {children}
      <ToastsWrapper
        remove={remove}
        toasts={toasts}
        customStyles={customStyles}
      />
    </ToastContext.Provider>
  );
}
