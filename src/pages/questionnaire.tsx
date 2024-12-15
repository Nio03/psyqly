import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Questionnaire() {
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    therapyType: [],
    language: [],
    schedule: [],
    communicationType: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preferences }),
      });
      
      if (response.ok) {
        router.push('/matches');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Cuestionario Psyqly</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de terapia preferida
            </label>
            <select
              multiple
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions).map(option => option.value);
                setPreferences(prev => ({ ...prev, therapyType: selected }));
              }}
            >
              <option value="cognitive">Cognitivo-conductual</option>
              <option value="psychoanalysis">Psicoanálisis</option>
              <option value="humanistic">Humanista</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Idiomas
            </label>
            <select
              multiple
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions).map(option => option.value);
                setPreferences(prev => ({ ...prev, language: selected }));
              }}
            >
              <option value="spanish">Español</option>
              <option value="english">Inglés</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Horarios disponibles
            </label>
            <select
              multiple
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions).map(option => option.value);
                setPreferences(prev => ({ ...prev, schedule: selected }));
              }}
            >
              <option value="morning">Mañana</option>
              <option value="afternoon">Tarde</option>
              <option value="evening">Noche</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de comunicación
            </label>
            <select
              multiple
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions).map(option => option.value);
                setPreferences(prev => ({ ...prev, communicationType: selected }));
              }}
            >
              <option value="video">Videollamada</option>
              <option value="chat">Chat</option>
              <option value="voice">Llamada de voz</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Encontrar terapeuta
          </button>
        </form>
      </div>
    </div>
  );
}