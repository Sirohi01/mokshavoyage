"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="rounded-lg border border-[#EDE6DD] bg-white p-6 text-center">
          <AlertTriangle className="mx-auto h-7 w-7 text-[#EF4444]" />
          <h2 className="mt-3 text-base font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm text-[#5C6570]">Please refresh the page or try again shortly.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
