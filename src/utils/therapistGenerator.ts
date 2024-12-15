import { faker } from '@faker-js/faker/locale/es';
import { therapistDescriptions } from './therapistDescriptions';

export interface Therapist {
  id: string;
  name: string;
  specialties: string[];
  languages: string[];
  schedule: string[];
  communicationType: string[];
  experience: number;
  rating: number;
  price: number;
  description: string;
  photoUrl: string;
  matchScore: number;
}

const specialties = [
  'Terapia Cognitivo-Conductual',
  'Psicoanálisis',
  'Terapia Humanista',
  'Terapia Gestalt',
  'Terapia Sistémica',
  'Mindfulness',
  'Terapia de Pareja',
  'Terapia Familiar',
  'EMDR',
  'Terapia Breve',
  'Psicología Positiva'
];

const languages = ['Español', 'Inglés', 'Francés', 'Portugués'];
const schedules = ['Mañana', 'Tarde', 'Noche', 'Fines de semana'];
const communicationTypes = ['Videollamada', 'Chat', 'Llamada telefónica', 'Presencial'];

export function generateTherapist(): Therapist {
  const randomDescription = faker.helpers.arrayElement(therapistDescriptions);
  
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    specialties: faker.helpers.arrayElements(specialties, { min: 2, max: 4 }),
    languages: faker.helpers.arrayElements(languages, { min: 1, max: 3 }),
    schedule: faker.helpers.arrayElements(schedules, { min: 2, max: 4 }),
    communicationType: faker.helpers.arrayElements(communicationTypes, { min: 1, max: 3 }),
    experience: faker.number.int({ min: 3, max: 25 }),
    rating: faker.number.float({ min: 4.0, max: 5.0, precision: 0.1 }),
    price: faker.number.int({ min: 40, max: 90 })*1000,
    description: randomDescription.description,
    photoUrl: randomDescription.photoUrl,
    matchScore: faker.number.int({ min: 55, max: 95 })
  };
}