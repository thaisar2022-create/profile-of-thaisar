import { Component, ErrorInfo, ReactNode } from 'react';

interface TabErrorBoundaryProps {
  children: ReactNode;
  currentLang?: 'my' | 'en';
}

interface TabErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class TabErrorBoundary extends Component<TabErrorBoundaryProps, TabErrorBoundaryState> {
  constructor(props: TabErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): TabErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Tab loading error caught by boundary:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      const isMy = this.props.currentLang === 'my';
      return (
        <div 
          role="alert" 
          aria-live="assertive"
          className="my-8 p-8 bg-white border-2 border-purple-200 rounded-3xl text-center shadow-lg space-y-4 max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-inner">
            ⚠️
          </div>
          <h3 className="text-xl font-extrabold text-purple-950">
            {isMy ? 'အချက်အလက် ခေါ်ယူရာတွင် အခက်အခဲရှိနေပါသည်။' : 'Failed to load page section'}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {isMy 
              ? 'အင်တာနက် လိုင်းစနစ် ပြတ်တောက်မှု သို့မဟုတ် ကွန်ရက် အပြောင်းအလဲကြောင့် ဤ အပိုင်းကို တင်ယူ၍မရပါ။ ပြန်လည် ကြိုးစားကြည့်ပါ။'
              : 'There was a network issue while loading this component. Please check your internet connection and try again.'}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={this.handleRetry}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 text-amber-300 font-extrabold rounded-2xl text-sm shadow-md transition-all cursor-pointer border border-amber-400/30"
            >
              {isMy ? 'ပြန်လည် စမ်းသပ်မည် (Retry)' : 'Try Again'}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-950 font-bold rounded-2xl text-sm transition-all cursor-pointer"
            >
              {isMy ? 'စာမျက်နှာ ပြန်လည်တင်မည် (Reload)' : 'Reload Page'}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

