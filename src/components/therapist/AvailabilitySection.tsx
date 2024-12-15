import SelectField from '../forms/SelectField';
import { languageOptions } from '@/data/languageOptions';
import { scheduleOptions } from '@/data/scheduleOptions';
import { communicationOptions } from '@/data/communicationOptions';

interface AvailabilitySectionProps {
  formData: {
    language: string[];
    schedule: string[];
    communicationType: string[];
  };
  onMultiSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AvailabilitySection({ 
  formData, 
  onMultiSelect 
}: AvailabilitySectionProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Disponibilidad y modalidades</h2>

      <SelectField
        label="Idiomas"
        name="language"
        options={languageOptions}
        value={formData.language}
        onChange={onMultiSelect}
        multiple
        required
        tooltip={{
          title: "Idiomas de atención",
          description: "Selecciona los idiomas en los que puedes ofrecer terapia de manera fluida."
        }}
      />

      <SelectField
        label="Horarios Disponibles"
        name="schedule"
        options={scheduleOptions}
        value={formData.schedule}
        onChange={onMultiSelect}
        multiple
        required
        tooltip={{
          title: "Franjas horarias",
          description: "Selecciona los horarios en los que puedes atender pacientes."
        }}
      />

      <SelectField
        label="Modalidades de Atención"
        name="communicationType"
        options={communicationOptions}
        value={formData.communicationType}
        onChange={onMultiSelect}
        multiple
        required
        tooltip={{
          title: "Tipos de consulta",
          description: "Selecciona las formas en que prefieres realizar las sesiones terapéuticas."
        }}
      />
    </div>
  );
}