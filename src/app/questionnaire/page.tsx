// src/app/questionnaire/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Questionnaire() {
  const [mainReason, setMainReason] = useState('')
  const [preferredTherapyType, setPreferredTherapyType] = useState('')
  const [preferredFrequency, setPreferredFrequency] = useState('')
  const [preferredLanguage, setPreferredLanguage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/questionnaire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mainReason, preferredTherapyType, preferredFrequency, preferredLanguage }),
    })
    if (response.ok) {
      router.push('/dashboard')
    } else {
      alert('Failed to submit questionnaire')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={mainReason} onChange={(e) => setMainReason(e.target.value)}>
        <option value="">Select main reason</option>
        <option value="anxiety">Anxiety</option>
        <option value="depression">Depression</option>
        <option value="stress">Stress</option>
      </select>
      <select value={preferredTherapyType} onChange={(e) => setPreferredTherapyType(e.target.value)}>
        <option value="">Select preferred therapy type</option>
        <option value="cbt">Cognitive Behavioral Therapy</option>
        <option value="psychodynamic">Psychodynamic</option>
        <option value="humanistic">Humanistic</option>
      </select>
      <select value={preferredFrequency} onChange={(e) => setPreferredFrequency(e.target.value)}>
        <option value="">Select preferred frequency</option>
        <option value="weekly">Weekly</option>
        <option value="biweekly">Bi-weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <select value={preferredLanguage} onChange={(e) => setPreferredLanguage(e.target.value)}>
        <option value="">Select preferred language</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}