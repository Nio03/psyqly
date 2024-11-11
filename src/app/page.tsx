// src/app/page.tsx
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Psyqly</h1>
        <p className="mb-8">Find the right psychologist for you.</p>
        <div className="space-x-4">
          <Link href="/auth/register?type=user" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up as User
          </Link>
          <Link href="/auth/register?type=psychologist" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign Up as Psychologist
          </Link>
        </div>
      </div>
    </Layout>
  );
}