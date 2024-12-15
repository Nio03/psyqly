import InputField from '../forms/InputField';

interface BasicInfoSectionProps {
  formData: {
    email: string;
    password: string;
    name: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicInfoSection({ formData, onChange }: BasicInfoSectionProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Información básica</h2>
      
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        required
        tooltip={{
          title: "Tu dirección de correo electrónico",
          description: "Este será tu identificador principal y medio de contacto con los pacientes."
        }}
      />

      <InputField
        label="Contraseña"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        required
        tooltip={{
          title: "Seguridad de tu cuenta",
          description: "Usa una contraseña fuerte con al menos 8 caracteres, incluyendo números y símbolos."
        }}
      />

      <InputField
        label="Nombre Completo"
        name="name"
        type="text"
        value={formData.name}
        onChange={onChange}
        required
        tooltip={{
          title: "Tu nombre profesional",
          description: "Este es el nombre que verán tus pacientes. Usa tu nombre completo o el nombre con el que ejerces profesionalmente."
        }}
      />
    </div>
  );
}