import React from 'react';

interface TabSkeletonProps {
  currentLang?: 'my' | 'en';
}

export const TabSkeleton: React.FC<TabSkeletonProps> = ({ currentLang }) => {
  return (
    <div 
      role="status" 
      aria-label="Loading tab content"
      aria-busy="true"
      className="w-full space-y-6 animate-pulse py-4"
    >
      <span className="sr-only">
        {currentLang === 'my' ? 'အချက်အလက်များ ခေါ်ယူနေပါသည်...' : 'Loading section content...'}
      </span>

      {/* Hero / Banner Skeleton */}
      <div className="h-32 sm:h-36 bg-gradient-to-r from-purple-200/80 via-purple-100/90 to-purple-200/80 rounded-3xl p-6 flex flex-col justify-between border border-purple-200/50">
        <div className="space-y-3">
          <div className="h-6 w-1/3 bg-purple-300/80 rounded-xl" />
          <div className="h-4 w-2/3 bg-purple-200 rounded-lg" />
        </div>
        <div className="flex gap-3 pt-2">
          <div className="h-8 w-28 bg-amber-200/80 rounded-full" />
          <div className="h-8 w-36 bg-purple-300/60 rounded-full" />
        </div>
      </div>

      {/* Grid of Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="p-6 rounded-3xl bg-white border border-purple-100 shadow-sm space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 bg-purple-100 rounded-2xl" />
              <div className="h-5 w-20 bg-amber-100 rounded-full" />
            </div>
            <div className="h-5 w-3/4 bg-slate-200 rounded-lg" />
            <div className="space-y-2 pt-2">
              <div className="h-3.5 w-full bg-slate-100 rounded" />
              <div className="h-3.5 w-5/6 bg-slate-100 rounded" />
              <div className="h-3.5 w-4/6 bg-slate-100 rounded" />
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              <div className="h-4 w-1/3 bg-purple-200 rounded-lg" />
              <div className="h-8 w-24 bg-purple-900/10 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
