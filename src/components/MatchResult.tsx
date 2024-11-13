// src/components/MatchResult.tsx
import { Psychologist } from '@/models/Psychologist'

interface MatchResultProps {
  psychologist: Psychologist | null
}

export default function MatchResult({ psychologist }: MatchResultProps) {
  if (!psychologist) {
    return <p>No match found. Please try adjusting your preferences.</p>
  }

  return (
    <div>
      <h2>Your matched psychologist:</h2>
      <p>Name: {psychologist.name}</p>
      <p>Specialties: {psychologist.specialties.join(', ')}</p>
      <p>Languages: {psychologist.languages.join(', ')}</p>
      <p>Therapy Types: {psychologist.therapyTypes.join(', ')}</p>
      <p>Availability: {psychologist.availability.join(', ')}</p>
    </div>
  )
}