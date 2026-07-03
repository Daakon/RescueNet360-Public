import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Return fallback UI that doesn't break layout
      return (
        <div className="p-8 border border-red-200 bg-red-50 text-red-800 rounded-2xl">
          <p className="font-bold text-sm">Something went wrong loading this section.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
