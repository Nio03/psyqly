import RegisterForm from '@/components/register/RegisterForm';
import InfoButton from '@/components/InfoButton';

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Registro de Usuario</h1>
        <RegisterForm />
      </div>
      <InfoButton />
    </div>
  );
}