import { useState } from 'react';
import { useRouter } from 'next/router';
import { RegisterFormData } from '@/types/auth';

const initialFormData: RegisterFormData = {
  email: '',
  password: '',
  name: '',
  mainReason: '',
  supportType: '',
  preferredModality: '',
  frequency: '',
  schedule: '',
  therapistGender: '',
  languages: [],
  previousTherapy: false,
  comfortLevel: 3,
  therapyMethod: '',
  approachPreference: '',
  specialConsiderations: '',
  expectations: '',
  techComfort: '',
  importantDetails: ''
};

export function useRegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        router.push('/matches');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
}