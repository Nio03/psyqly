import FormField from './FormField';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  tooltip?: {
    title: string;
    description: string;
  };
}

export default function InputField({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
  tooltip
}: InputFieldProps) {
  return (
    <FormField
      label={label}
      name={name}
      required={required}
      tooltip={tooltip}
    >
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </FormField>
  );
}