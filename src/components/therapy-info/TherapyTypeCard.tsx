import { motion } from 'framer-motion';

interface TherapyTypeCardProps {
  title: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  icon: React.ReactNode;
}

export default function TherapyTypeCard({
  title,
  description,
  benefits,
  idealFor,
  icon
}: TherapyTypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Beneficios:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Ideal para personas que:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {idealFor.map((ideal, index) => (
                  <li key={index}>{ideal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}