import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Psyqly</h1>
          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 text-blue-600 hover:text-blue-800">
              Iniciar Sesión
            </Link>
            <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Registrarse
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Encuentra tu Match Perfecto en Salud Mental</h2>
          <p className="text-xl text-gray-600 mb-8">Psyqly te conecta con el psicólogo adecuado basándose en tus necesidades y preferencias únicas.</p>
          <Link href="/register" className="px-6 py-3 bg-blue-600 text-white rounded text-lg hover:bg-blue-700">
            Comienza Ahora
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Emparejamiento Personalizado</h3>
            <p className="text-gray-600">Nuestro algoritmo encuentra el mejor psicólogo para ti basándose en tus necesidades y preferencias específicas.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Especialistas Diversos</h3>
            <p className="text-gray-600">Accede a una amplia gama de profesionales de salud mental especializados en diversas áreas.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Sesiones Flexibles</h3>
            <p className="text-gray-600">Elige entre sesiones en línea y presenciales para adaptarse a tu comodidad y horario.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Cómo Funciona</h2>
          <ol className="list-decimal list-inside text-left max-w-2xl mx-auto">
            <li className="mb-2">Regístrate y completa nuestro cuestionario integral.</li>
            <li className="mb-2">Nuestro algoritmo te empareja con psicólogos compatibles.</li>
            <li className="mb-2">Revisa tus matches y elige tu psicólogo preferido.</li>
            <li className="mb-2">Programa tu primera sesión y comienza tu viaje hacia una mejor salud mental.</li>
          </ol>
        </section>
      </main>

      <footer className="bg-blue-600 text-white mt-12 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Psyqly. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}