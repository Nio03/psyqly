export interface FormField {
  label: string;
  name: string;
  type: string;
  value: string | number | boolean;
  required?: boolean;
  options?: {
    value: string;
    label: string;
  }[];
  tooltip?: {
    title: string;
    description: string;
  };
}