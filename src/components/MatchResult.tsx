// src/components/MatchResult.tsx
import { Psychologist } from '@/models/Psychologist'

interface MatchResultProps {
  psychologist: Psychologist | null
}

export default function MatchResult({ psychologist }: MatchResultProps) {
  if (!psychologist) {
    return <p className="text-center text-gray-600">No se encontró un match. Por favor, intenta ajustar tus preferencias.</p>
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tu psicólogo recomendado:</h2>
      <p className="mb-2"><strong>Nombre:</strong> {psychologist.name}</p>
      <p className="mb-2"><strong>Especialidades:</strong> {psychologist.specialties.join(', ')}</p>
      <p className="mb-2"><strong>Idiomas:</strong> {psychologist.languages.join(', ')}</p>
      <p className="mb-2"><strong>Tipos de terapia:</strong> {psychologist.therapyTypes.join(', ')}</p>
      <p className="mb-2"><strong>Disponibilidad:</strong> {psychologist.availability.join(', ')}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Programar una cita
      </button>
    </div>
  )
}