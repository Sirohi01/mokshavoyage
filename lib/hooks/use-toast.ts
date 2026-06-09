"use client";

import { toast } from "sonner";

export function useToast() {
  return {
    toast,
    success: toast.success,
    error: toast.error,
    info: toast.info,
    warning: toast.warning
  };
}
