// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = document.cookie.includes('token=')
    setIsLoggedIn(token)
  }, [])

  const handleLogout = async () => {
    const response = await fetch('/api/logout', { method: 'POST' })
    if (response.ok) {
      setIsLoggedIn(false)
      router.push('/')
    }
  }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Psyqly
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="text-white mr-4">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-white">
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