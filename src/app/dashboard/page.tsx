// src/app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import cookie from 'cookie'
import { Psychologist } from '@/models/Psychologist'
import MatchResult from '@/components/MatchResult'

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [match, setMatch] = useState<Psychologist | null>(null)

  useEffect(() => {
    function getCookie(name: string) {
      const cookies = cookie.parse(document.cookie || '')
      return cookies[name] || null
    }

    function checkAuth() {
      const token = getCookie('authToken') // Nombre de la cookie que contiene el token JWT
      if (token) {
        try {
          const decodedToken = JSON.parse(atob(token.split('.')[1])) // Decodificación básica de JWT
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

  useEffect(() => {
    async function fetchMatch() {
      if (isAuthenticated) {
        const response = await fetch('/api/match', {
          headers: {
            Authorization: `Bearer ${getCookie('authToken')}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setMatch(data.match)
        }
      }
    }
    fetchMatch()
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <div>Acceso denegado. Por favor, inicia sesión.</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
        {user && (
          <p className="mb-4">Bienvenido, {user.name || user.email}</p>
        )}
        <MatchResult psychologist={match} />
      </div>
    </div>
  )
}
