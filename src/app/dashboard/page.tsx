// src/app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import MatchResult from '@/components/MatchResult'
import { Psychologist } from '@/models/Psychologist'

export default function Dashboard() {
  const [match, setMatch] = useState<Psychologist | null>(null)

  useEffect(() => {
    async function fetchMatch() {
      const response = await fetch('/api/match')
      if (response.ok) {
        const data = await response.json()
        setMatch(data.match)
      }
    }
    fetchMatch()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <MatchResult psychologist={match} />
    </div>
  )
}