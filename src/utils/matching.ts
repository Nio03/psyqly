import { IUser } from '../models/User';

interface WeightedCriteria {
  category: string;
  weight: number;
}

const MATCHING_WEIGHTS: WeightedCriteria[] = [
  { category: 'therapyMethod', weight: 0.20 },
  { category: 'preferredModality', weight: 0.15 },
  { category: 'schedule', weight: 0.10 },
  { category: 'frequency', weight: 0.10 },
  { category: 'languages', weight: 0.10 },
  { category: 'therapistGender', weight: 0.05 },
  { category: 'approachPreference', weight: 0.15 },
  { category: 'techComfort', weight: 0.15 }
];

export function calculateMatchScore(user: IUser, therapist: IUser): number {
  let totalScore = 0;
  const questionnaire = user.questionnaire;
  const therapistPrefs = therapist.preferences;

  // Method matching
  if (questionnaire.therapyMethod === therapistPrefs.therapyType[0] || 
      questionnaire.therapyMethod === 'noSeguro') {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'therapyMethod').weight * 100;
  }

  // Modality matching
  if (therapistPrefs.communicationType.includes(questionnaire.preferredModality)) {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'preferredModality').weight * 100;
  }

  // Schedule matching
  if (therapistPrefs.schedule.includes(questionnaire.schedule)) {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'schedule').weight * 100;
  }

  // Frequency preference (assuming therapist has this in their preferences)
  const frequencyMatch = therapistPrefs.schedule.some(s => 
    (questionnaire.frequency === 'semanal' && s.includes('weekly')) ||
    (questionnaire.frequency === 'quincenal' && s.includes('biweekly')) ||
    (questionnaire.frequency === 'necesario' && s.includes('flexible'))
  );
  if (frequencyMatch) {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'frequency').weight * 100;
  }

  // Language matching
  const languageMatch = questionnaire.languages.some(lang => 
    therapistPrefs.language.includes(lang)
  );
  if (languageMatch) {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'languages').weight * 100;
  }

  // Gender preference
  if (questionnaire.therapistGender === 'indiferente' || 
      therapist.questionnaire?.therapistGender === questionnaire.therapistGender) {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'therapistGender').weight * 100;
  }

  // Approach preference (structured vs flexible)
  const approachMatch = 
    (questionnaire.approachPreference === therapist.questionnaire?.approachPreference) ||
    (questionnaire.approachPreference === 'flexible' && 
     therapist.questionnaire?.approachPreference === 'estructurado');
  if (approachMatch) {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'approachPreference').weight * 100;
  }

  // Tech comfort level matching for online therapy
  const techComfortMatch = 
    (questionnaire.preferredModality === 'presencial') ||
    ((['videollamada', 'chat', 'telefono'].includes(questionnaire.preferredModality)) && 
     questionnaire.techComfort !== 'prefiero-presencial');
  if (techComfortMatch) {
    totalScore += MATCHING_WEIGHTS.find(w => w.category === 'techComfort').weight * 100;
  }

  // Additional matching factors (can be weighted less but provide bonus points)
  let bonusPoints = 0;

  // Special considerations matching
  if (therapist.questionnaire?.specialConsiderations?.toLowerCase().includes(
      questionnaire.specialConsiderations?.toLowerCase()
  )) {
    bonusPoints += 5;
  }

  // Previous therapy experience consideration
  if (questionnaire.previousTherapy && 
      therapist.questionnaire?.approachPreference === 'flexible') {
    bonusPoints += 3;
  }

  // Comfort level consideration
  if (questionnaire.comfortLevel <= 2 && 
      therapist.questionnaire?.approachPreference === 'flexible') {
    bonusPoints += 3;
  }

  // Add bonus points (max 10 points to total score)
  totalScore += Math.min(bonusPoints, 10);

  // Ensure the score doesn't exceed 100
  return Math.min(totalScore, 100);
}

// Helper function to check if arrays share any elements
function hasCommonElement(arr1: string[], arr2: string[]): boolean {
  return arr1.some(item => arr2.includes(item));
}