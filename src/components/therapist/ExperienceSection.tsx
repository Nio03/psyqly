import TextAreaField from '../forms/TextAreaField';

interface ExperienceSectionProps {
  formData: {
    experience: string;
    education: string;
  };
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ExperienceSection({ formData, onChange }: ExperienceSectionProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Experiencia y educación</h2>

      <TextAreaField
        label="Experiencia Profesional"
        name="experience"
        value={formData.experience}
        onChange={onChange}
        required
        placeholder="Describe tu experiencia profesional, incluyendo años de práctica, especialidades y logros..."
        tooltip={{
          title: "Tu trayectoria",
          description: "Resume tu experiencia profesional, incluyendo años de práctica y logros relevantes."
        }}
      />

      <TextAreaField
        label="Educación y Certificaciones"
        name="education"
        value={formData.education}
        onChange={onChange}
        required
        placeholder="Lista tu educación, títulos, certificaciones y formación especializada..."
        tooltip={{
          title: "Formación académica",
          description: "Lista tus títulos académicos, certificaciones y formación especializada relevante."
        }}
      />
    </div>
  );
}