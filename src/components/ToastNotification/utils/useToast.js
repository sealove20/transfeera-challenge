import { useContext } from 'react'
import { ToastContext } from './context'

export function useToast () {
  const context = useContext(ToastContext)
  return { add: context.add, remove: context.remove, toasts: context.toasts }
}
