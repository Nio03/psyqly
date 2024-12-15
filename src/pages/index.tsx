import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Psyqly - Encuentra tu terapeuta ideal</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8"></div>
        <div className="relative min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full space-y-8 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl"
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Psyqly</h1>
              <p className="text-gray-600">Encuentra el terapeuta ideal para ti</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => router.push('/register')}
                className="w-full flex justify-center py-3 px-4 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Registrarse
              </button>
              
              <button
                onClick={() => router.push('/therapist/register')}
                className="w-full flex justify-center py-3 px-4 rounded-xl text-gray-700 font-medium bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
              >
                Soy terapeuta
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>¿Ya tienes una cuenta? <a href="/login" className="text-indigo-600 hover:text-indigo-500">Iniciar sesión</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}