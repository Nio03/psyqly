import { useRouter } from 'next/router';

export default function BackToRegisterButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/register')}
      className="fixed bottom-4 left-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
      aria-label="Volver al registro"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        Volver al Registro
      </span>
    </button>
  );
}