// src/components/Navbar.tsx
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Psyqly
        </Link>
        <div>
          {session ? (
            <>
              <Link href="/dashboard" className="text-white mr-4">
                Dashboard
              </Link>
              <button onClick={() => signOut()} className="text-white">
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white mr-4">
                Iniciar sesión
              </Link>
              <Link href="/register" className="bg-white text-blue-600 px-4 py-2 rounded">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}