import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Asegurarse de que el modo oscuro esté desactivado por defecto
    document.documentElement.classList.remove('dark');
  }, []);

  return <Component {...pageProps} />;
}