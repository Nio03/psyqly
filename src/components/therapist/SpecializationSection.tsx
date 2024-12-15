import SelectField from '../forms/SelectField';
import TextAreaField from '../forms/TextAreaField';
import { therapyTypes } from '@/data/therapyTypes';
import { approachTypes } from '@/data/approachTypes';

interface SpecializationSectionProps {
  formData: {
    therapyType: string[];
    approach: string;
    specializations: string;
  };
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => void;
  onMultiSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SpecializationSection({ 
  formData, 
  onChange, 
  onMultiSelect 
}: SpecializationSectionProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Especialización y enfoque</h2>

      <SelectField
        label="Tipos de Terapia"
        name="therapyType"
        options={therapyTypes}
        value={formData.therapyType}
        onChange={onMultiSelect}
        multiple
        required
        tooltip={{
          title: "Enfoques terapéuticos",
          description: "Selecciona los tipos de terapia que practicas. Esto ayudará a conectarte con pacientes que buscan estos enfoques específicos."
        }}
      />

      <SelectField
        label="Enfoque Terapéutico"
        name="approach"
        options={approachTypes}
        value={formData.approach}
        onChange={onChange}
        required
        tooltip={{
          title: "Tu estilo de trabajo",
          description: "La forma en que prefieres estructurar y conducir las sesiones terapéuticas."
        }}
      />

      <TextAreaField
        label="Especializaciones"
        name="specializations"
        value={formData.specializations}
        onChange={onChange}
        required
        placeholder="Ej: Terapia de pareja, manejo del estrés, trauma, adicciones..."
        tooltip={{
          title: "Áreas de especialización",
          description: "Describe tus áreas específicas de experiencia y los tipos de casos en los que tienes más experiencia."
        }}
      />
    </div>
  );
}