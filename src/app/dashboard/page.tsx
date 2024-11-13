// src/app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import MatchResult from '@/components/MatchResult'
import { Psychologist } from '@/models/Psychologist'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [match, setMatch] = useState<Psychologist | null>(null)

  useEffect(() => {
    async function fetchMatch() {
      if (status === 'authenticated') {
        const response = await fetch('/api/match')
        if (response.ok) {
          const data = await response.json()
          setMatch(data.match)
        }
      }
    }
    fetchMatch()
  }, [status])

  if (status === 'loading') {
    return <div>Cargando...</div>
  }

  if (status === 'unauthenticated') {
    return <div>Acceso denegado. Por favor, inicia sesión.</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
        {session?.user && (
          <p className="mb-4">Bienvenido, {session.user.name || session.user.email}</p>
        )}
        <MatchResult psychologist={match} />
      </div>
    </div>
  )
}