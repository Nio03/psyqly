// src/app/(auth)/register/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import Layout from '@/components/Layout';
import AuthForm from '@/components/AuthForm';

export default function Register() {
  const searchParams = useSearchParams();
  const userType = searchParams.get('type') as 'user' | 'psychologist';

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Register as {userType}</h1>
        <AuthForm mode="register" userType={userType} />
      </div>
    </Layout>
  );
}