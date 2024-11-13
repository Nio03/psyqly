// src/lib/matchmaking.ts
import { User } from '@/models/User'
import { Psychologist } from '@/models/Psychologist'

export function findMatch(user: User, psychologists: Psychologist[]): Psychologist | null {
  if (!user.questionnaire) return null

  return psychologists.reduce((bestMatch, psychologist) => {
    let score = 0
    if (psychologist.specialties.includes(user.questionnaire!.mainReason)) score += 2
    if (psychologist.therapyTypes.includes(user.questionnaire!.preferredTherapyType)) score += 1
    if (psychologist.languages.includes(user.questionnaire!.preferredLanguage)) score += 1
    if (psychologist.availability.includes(user.questionnaire!.preferredFrequency)) score += 1

    return score > (bestMatch?.score || 0) ? { psychologist, score } : bestMatch
  }, null as { psychologist: Psychologist, score: number } | null)?.psychologist || null
}