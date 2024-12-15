import FormField from './FormField';

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  tooltip?: {
    title: string;
    description: string;
  };
}

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  required = false,
  rows = 4,
  placeholder,
  tooltip
}: TextAreaFieldProps) {
  return (
    <FormField
      label={label}
      name={name}
      required={required}
      tooltip={tooltip}
    >
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </FormField>
  );
}