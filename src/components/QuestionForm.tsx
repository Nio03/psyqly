// src/components/QuestionForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  key: string;
  question: string;
}

interface QuestionFormProps {
  questions: Question[];
  userType: 'user' | 'psychologist';
}

const QuestionForm: React.FC<QuestionFormProps> = ({ questions, userType }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userType, answers }),
    });

    if (response.ok) {
      router.push('/dashboard');
    } else {
      // Handle error
      console.error('Profile update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {questions.map(({ key, question }) => (
        <div key={key}>
          <label htmlFor={key} className="block text-sm font-medium text-gray-700">
            {question}
          </label>
          <input
            id={key}
            name={key}
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={answers[key] || ''}
            onChange={(e) => setAnswers({ ...answers, [key]: e.target.value })}
          />
        </div>
      ))}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;