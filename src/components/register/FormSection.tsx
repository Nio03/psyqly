import { FormField } from '@/types/forms';
import InfoTooltip from '../forms/InfoTooltip';

interface FormSectionProps {
  title: string;
  fields: FormField[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export default function FormSection({ title, fields, onChange }: FormSectionProps) {
  return (
    <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {field.tooltip && (
              <InfoTooltip
                title={field.tooltip.title}
                description={field.tooltip.description}
              />
            )}
          </div>
          
          {field.type === 'select' ? (
            <select
              name={field.name}
              value={field.value}
              onChange={onChange}
              required={field.required}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Selecciona una opción</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={field.value}
              onChange={onChange}
              required={field.required}
              rows={3}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={onChange}
              required={field.required}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          )}
        </div>
      ))}
    </div>
  );
}