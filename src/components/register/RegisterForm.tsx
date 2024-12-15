import { useState } from 'react';
import { useRouter } from 'next/router';
import { RegisterFormData } from '@/types/auth';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import FormSection from './FormSection';
import { therapyTypes, therapyApproaches } from '@/data/therapyInfoData';

export default function RegisterForm() {
  const router = useRouter();
  const { formData, handleChange, handleSubmit } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormSection
        title="Información Personal"
        fields={[
          {
            label: "Email",
            name: "email",
            type: "email",
            value: formData.email,
            required: true,
            tooltip: {
              title: "Tu correo electrónico",
              description: "Usaremos este email para enviarte información importante sobre tus sesiones"
            }
          },
          {
            label: "Contraseña",
            name: "password",
            type: "password",
            value: formData.password,
            required: true,
            tooltip: {
              title: "Contraseña segura",
              description: "Usa al menos 8 caracteres, incluyendo números y símbolos"
            }
          },
          {
            label: "Nombre",
            name: "name",
            type: "text",
            value: formData.name,
            required: true,
            tooltip: {
              title: "Tu nombre completo",
              description: "Como te gustaría que te llame tu terapeuta"
            }
          }
        ]}
        onChange={handleChange}
      />

      <FormSection
        title="Motivo de Consulta"
        fields={[
          {
            label: "¿Cuál es tu principal motivo para buscar terapia?",
            name: "mainReason",
            type: "textarea",
            value: formData.mainReason,
            required: true,
            tooltip: {
              title: "Motivo principal",
              description: "Describe brevemente qué te trae a terapia en este momento"
            }
          },
          {
            label: "¿Qué tipo de apoyo estás buscando?",
            name: "supportType",
            type: "textarea",
            value: formData.supportType,
            required: true,
            tooltip: {
              title: "Tipo de apoyo",
              description: "¿Qué esperas conseguir de la terapia?"
            }
          }
        ]}
        onChange={handleChange}
      />

      <FormSection
        title="Preferencias de Terapia"
        fields={[
          {
            label: "¿Qué método de terapia te interesa?",
            name: "therapyMethod",
            type: "select",
            value: formData.therapyMethod,
            options: therapyTypes.map(type => ({
              value: type.title.toLowerCase().replace(/\s+/g, '-'),
              label: type.title
            })),
            required: true,
            tooltip: {
              title: "Método terapéutico",
              description: "Selecciona el enfoque que más te interese. Puedes consultar la guía para más información"
            }
          },
          {
            label: "¿Prefieres un enfoque estructurado o flexible?",
            name: "approachPreference",
            type: "select",
            value: formData.approachPreference,
            options: therapyApproaches.map(approach => ({
              value: approach.title.toLowerCase().replace(/\s+/g, '-'),
              label: approach.title
            })),
            required: true,
            tooltip: {
              title: "Estilo de terapia",
              description: "Elige el estilo que mejor se adapte a tu forma de trabajar"
            }
          }
        ]}
        onChange={handleChange}
      />

      <FormSection
        title="Modalidad y Horarios"
        fields={[
          {
            label: "¿Qué modalidad de terapia prefieres?",
            name: "preferredModality",
            type: "select",
            value: formData.preferredModality,
            options: [
              { value: "videollamada", label: "Videollamada" },
              { value: "chat", label: "Chat" },
              { value: "telefono", label: "Llamadas telefónicas" },
              { value: "presencial", label: "Presencial" }
            ],
            required: true,
            tooltip: {
              title: "Modalidad de atención",
              description: "Elige cómo prefieres tener tus sesiones"
            }
          },
          {
            label: "¿Con qué frecuencia te gustaría tener sesiones?",
            name: "frequency",
            type: "select",
            value: formData.frequency,
            options: [
              { value: "semanal", label: "Semanalmente" },
              { value: "quincenal", label: "Quincenalmente" },
              { value: "necesario", label: "Según sea necesario" }
            ],
            required: true,
            tooltip: {
              title: "Frecuencia de sesiones",
              description: "¿Cada cuánto tiempo te gustaría tener tus sesiones?"
            }
          },
          {
            label: "¿Qué horario prefieres?",
            name: "schedule",
            type: "select",
            value: formData.schedule,
            options: [
              { value: "manana", label: "Mañanas" },
              { value: "tarde", label: "Tardes" },
              { value: "noche", label: "Noches" },
              { value: "finsemana", label: "Fines de semana" }
            ],
            required: true,
            tooltip: {
              title: "Horario preferido",
              description: "¿En qué momento del día te sería más conveniente?"
            }
          }
        ]}
        onChange={handleChange}
      />

      <FormSection
        title="Preferencias Adicionales"
        fields={[
          {
            label: "¿Tienes preferencia en cuanto al género del terapeuta?",
            name: "therapistGender",
            type: "select",
            value: formData.therapistGender,
            options: [
              { value: "masculino", label: "Masculino" },
              { value: "femenino", label: "Femenino" },
              { value: "indiferente", label: "No importa" }
            ],
            required: true,
            tooltip: {
              title: "Género del terapeuta",
              description: "Si tienes una preferencia específica, indícala aquí"
            }
          },
          {
            label: "¿Has recibido terapia previamente?",
            name: "previousTherapy",
            type: "select",
            value: formData.previousTherapy.toString(),
            options: [
              { value: "false", label: "No" },
              { value: "true", label: "Sí" }
            ],
            required: true,
            tooltip: {
              title: "Experiencia previa",
              description: "Nos ayuda a entender tu familiaridad con la terapia"
            }
          },
          {
            label: "¿Qué tan cómodo te sientes con la tecnología?",
            name: "techComfort",
            type: "select",
            value: formData.techComfort,
            options: [
              { value: "muyCómodo", label: "Muy cómodo" },
              { value: "algo", label: "Algo cómodo" },
              { value: "poco", label: "Poco cómodo" },
              { value: "prefiero-presencial", label: "Prefiero presencial" }
            ],
            required: true,
            tooltip: {
              title: "Comodidad tecnológica",
              description: "Para sesiones en línea, ¿qué tan cómodo te sientes usando tecnología?"
            }
          }
        ]}
        onChange={handleChange}
      />

      <FormSection
        title="Información Adicional"
        fields={[
          {
            label: "Consideraciones especiales",
            name: "specialConsiderations",
            type: "textarea",
            value: formData.specialConsiderations,
            tooltip: {
              title: "Consideraciones especiales",
              description: "Cualquier información adicional que consideres importante"
            }
          },
          {
            label: "¿Cuáles son tus expectativas de la terapia?",
            name: "expectations",
            type: "textarea",
            value: formData.expectations,
            tooltip: {
              title: "Expectativas",
              description: "¿Qué esperas lograr con la terapia?"
            }
          }
        ]}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-200"
      >
        Registrarse
      </button>
    </form>
  );
}