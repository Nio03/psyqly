// src/app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import QuestionForm from '@/components/QuestionForm';
import MatchResult from '@/components/MatchResult';

const userQuestions = [
  { key: 'mainReason', question: "¿Cuál es tu principal motivo para buscar terapia?" },
  { key: 'supportType', question: "¿Qué tipo de apoyo estás buscando?" },
  { key: 'therapyModality', question: "¿Qué modalidad de terapia prefieres?" },
  // ... add the rest of the user questions here
];

const psychologistQuestions = [
  { key: 'therapeuticApproach', question: "¿Cuál es tu enfoque terapéutico principal?" },
  { key: 'specializations', question: "¿Tienes experiencia trabajando con ciertos tipos de problemas específicos?" },
  { key: 'preferredTherapyMethod', question: "¿Cuál es tu método preferido de terapia?" },
  // ... add the rest of the psychologist questions here
];

export default function Dashboard() {
  const [userType, setUserType] = useState<'user' | 'psychologist' | null>(null);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    // Fetch user data and set userType and profileCompleted
    // This is a placeholder and should be replaced with actual API call
    const fetchUserData = async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserType('user');
      setProfileCompleted(false);
    };

    fetchUserData();
  }, []);

  const handleProfileSubmit = async (answers: Record<string, string>) => {
    // Submit profile data
    // This is a placeholder and should be replaced with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProfileCompleted(true);

    if (userType === 'user') {
      // Fetch match for user
      // This is a placeholder and should be replaced with actual API call
      const matchResult = {
        name: 'Dr. Smith',
        email: 'dr.smith@example.com',
      };
      setMatch({ match: matchResult, score: 0.85 });
    }
  };

  if (!userType) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {!profileCompleted ? (
        <QuestionForm 
          questions={userType === 'user' ? userQuestions : psychologistQuestions}
          userType={userType}
          onSubmit={handleProfileSubmit}
        />
      ) : userType === 'user' && match ? (
        <MatchResult match={match.match} score={match.score} />
      ) : (
        <div>Profile completed. {userType === 'psychologist' ? 'Wait for matches.' : ''}</div>
      )}
    </Layout>
  );
}