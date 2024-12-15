import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import TherapyTypeCard from '@/components/therapy-info/TherapyTypeCard';
import { therapyTypes, therapyApproaches } from '@/data/therapyInfoData';
import BackToRegisterButton from '@/components/therapy-info/BackToRegisterButton';

export default function TherapyInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guía de Enfoques Terapéuticos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los diferentes tipos de terapia y enfoques disponibles para encontrar el que mejor se adapte a tus necesidades
          </p>
        </motion.div>

        {/* Importancia de la Elección */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué es importante?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              La elección del tipo de terapia y enfoque adecuado es fundamental para el éxito de tu proceso terapéutico. 
              Un buen match entre tus necesidades y el estilo terapéutico puede:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Acelerar tu proceso de recuperación y crecimiento</li>
              <li>Aumentar tu compromiso y motivación con la terapia</li>
              <li>Mejorar la comunicación con tu terapeuta</li>
              <li>Incrementar las probabilidades de alcanzar tus objetivos</li>
            </ul>
          </div>
        </motion.section>

        {/* Enfoques Terapéuticos */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Enfoques Terapéuticos
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {therapyApproaches.map((approach, index) => (
              <TherapyTypeCard
                key={index}
                title={approach.title}
                description={approach.description}
                benefits={approach.benefits}
                idealFor={approach.idealFor}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
            ))}
          </div>
        </section>

        {/* Tipos de Terapia */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Tipos de Terapia
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {therapyTypes.map((type, index) => (
              <TherapyTypeCard
                key={index}
                title={type.title}
                description={type.description}
                benefits={type.benefits}
                idealFor={type.idealFor}
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
            ))}
          </div>
        </section>

        {/* Recomendaciones Finales */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Cómo elegir?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Al momento de elegir, considera:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Tus objetivos principales para la terapia</li>
              <li>Tu personalidad y estilo de aprendizaje</li>
              <li>Tus experiencias previas en terapia (si las hay)</li>
              <li>El tiempo que puedes dedicar al proceso</li>
            </ul>
            <p className="mt-4">
              Recuerda que no hay una elección "incorrecta" - cada enfoque tiene sus beneficios, 
              y puedes cambiar si sientes que necesitas algo diferente.
            </p>
          </div>
        </motion.section>
      </div>

      <BackToRegisterButton />
    </div>
  );
}