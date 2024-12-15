import { ReactNode } from 'react';
import InfoTooltip from './InfoTooltip';

interface FormFieldProps {
  label: string;
  name: string;
  children: ReactNode;
  tooltip?: {
    title: string;
    description: string;
  };
  required?: boolean;
}

export default function FormField({ label, name, children, tooltip, required = false }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {tooltip && <InfoTooltip title={tooltip.title} description={tooltip.description} />}
      </div>
      {children}
    </div>
  );
}