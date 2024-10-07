import { useToast as useToastOriginal } from "@/components/ui/toast"
import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"

export const useToast = useToastOriginal

export type { Toast, ToastActionElement, ToastProps }