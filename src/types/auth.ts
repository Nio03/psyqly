export interface RegisterFormData {
  email: string;
  password: string;
  name: string;
  mainReason: string;
  supportType: string;
  preferredModality: string;
  frequency: string;
  schedule: string;
  therapistGender: string;
  languages: string[];
  previousTherapy: boolean;
  comfortLevel: number;
  therapyMethod: string;
  approachPreference: string;
  specialConsiderations: string;
  expectations: string;
  techComfort: string;
  importantDetails: string;
}