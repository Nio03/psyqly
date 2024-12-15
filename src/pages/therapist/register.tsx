import { useState } from 'react';
import { useRouter } from 'next/router';
import BasicInfoSection from '@/components/therapist/BasicInfoSection';
import SpecializationSection from '@/components/therapist/SpecializationSection';
import AvailabilitySection from '@/components/therapist/AvailabilitySection';
import ExperienceSection from '@/components/therapist/ExperienceSection';

export default function TherapistRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    therapyType: [],
    language: [],
    schedule: [],
    communicationType: [],
    specializations: '',
    experience: '',
    approach: '',
    education: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/therapist/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        router.push('/therapist/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name } = e.target;
    const values = Array.from(e.target.selectedOptions).map(option => option.value);
    setFormData(prev => ({
      ...prev,
      [name]: values
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Registro de Terapeuta</h1>
              <p className="text-lg text-gray-600">Únete a nuestra comunidad de profesionales de la salud mental</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <BasicInfoSection formData={formData} onChange={handleChange} />
              <SpecializationSection 
                formData={formData} 
                onChange={handleChange}
                onMultiSelect={handleMultiSelect}
              />
              <AvailabilitySection 
                formData={formData}
                onMultiSelect={handleMultiSelect}
              />
              <ExperienceSection formData={formData} onChange={handleChange} />

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-y-1"
                >
                  Registrarse como Terapeuta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}