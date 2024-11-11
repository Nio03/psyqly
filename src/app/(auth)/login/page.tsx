// src/app/(auth)/login/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import Layout from '@/components/Layout';
import AuthForm from '@/components/AuthForm';

export default function Login() {
  const searchParams = useSearchParams();
  const userType = searchParams.get('type') as 'user' | 'psychologist';

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login as {userType}</h1>
        <AuthForm mode="login" userType={userType} />
      </div>
    </Layout>
  );
}