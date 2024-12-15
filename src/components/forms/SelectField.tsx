import FormField from './FormField';

interface Option {
  value: string;
  label: string;
  description: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: Option[];
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  multiple?: boolean;
  required?: boolean;
  tooltip?: {
    title: string;
    description: string;
  };
}

export default function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  multiple = false,
  required = false,
  tooltip
}: SelectFieldProps) {
  return (
    <FormField
      label={label}
      name={name}
      required={required}
      tooltip={tooltip}
    >
      <div className="space-y-4">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          multiple={multiple}
          required={required}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {!multiple && <option value="">Selecciona una opción</option>}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="mt-2 space-y-3 bg-gray-50 p-4 rounded-lg">
          {options.map(option => (
            <div key={option.value} className="text-sm">
              <span className="font-medium text-gray-900">{option.label}:</span>
              <p className="text-gray-600 mt-1">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </FormField>
  );
}