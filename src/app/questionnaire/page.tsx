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
      alert('Error al enviar el cuestionario')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Cuestionario
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="main-reason" className="block text-sm font-medium text-gray-700">
                Motivo principal
              </label>
              <select
                id="main-reason"
                name="main-reason"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={mainReason}
                onChange={(e) => setMainReason(e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="anxiety">Ansiedad</option>
                <option value="depression">Depresión</option>
                <option value="stress">Estrés</option>
                <option value="relationships">Problemas de relación</option>
              </select>
            </div>

            <div>
              <label htmlFor="therapy-type" className="block text-sm font-medium text-gray-700">
                Tipo de terapia preferida
              </label>
              <select
                id="therapy-type"
                name="therapy-type"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={preferredTherapyType}
                onChange={(e) => setPreferredTherapyType(e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="cbt">Terapia Cognitivo-Conductual</option>
                <option value="psychodynamic">Terapia Psicodinámica</option>
                <option value="humanistic">Terapia Humanista</option>
              </select>
            </div>

            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                Frecuencia preferida
              </label>
              <select
                id="frequency"
                name="frequency"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={preferredFrequency}
                onChange={(e) => setPreferredFrequency(e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="weekly">Semanal</option>
                <option value="biweekly">Quincenal</option>
                <option value="monthly">Mensual</option>
              </select>
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                Idioma preferido
              </label>
              <select
                id="language"
                name="language"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="spanish">Español</option>
                <option value="english">Inglés</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar cuestionario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}