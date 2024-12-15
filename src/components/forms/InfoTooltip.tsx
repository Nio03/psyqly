import { useState } from 'react';

interface InfoTooltipProps {
  title: string;
  description: string;
}

export default function InfoTooltip({ title, description }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="text-gray-400 hover:text-gray-500 focus:outline-none"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        aria-label="Más información"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isVisible && (
        <div className="absolute z-50 w-72 px-2 mt-2 -translate-x-1/2 left-1/2">
          <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 p-4">
            <div className="font-medium text-gray-900 text-sm mb-1">{title}</div>
            <div className="text-sm text-gray-500">{description}</div>
          </div>
        </div>
      )}
    </div>
  );
}