// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Psyqly',
  description: 'Encuentra tu psicólogo ideal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    function getCookie(name: string) {
      const cookies = cookie.parse(document.cookie || '')
      return cookies[name] || null
    }

    function checkAuth() {
      const token = getCookie('authToken') // Nombre de la cookie que contiene el token JWT
      if (token) {
        try {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET!)
          setUser(decodedToken)
          setIsAuthenticated(true)
        } catch (error) {
          console.error('Token no válido o expirado')
          setIsAuthenticated(false)
        }
      } else {
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar user={user} isAuthenticated={isAuthenticated} />
        {children}
      </body>
    </html>
  )
}
