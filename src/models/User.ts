// src/models/User.ts
import { ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  name: string
  email: string
  password: string
  questionnaire?: {
    mainReason: string
    preferredTherapyType: string
    preferredFrequency: string
    preferredLanguage: string
  }
}

// src/models/Psychologist.ts
import { ObjectId } from 'mongodb'

export interface Psychologist {
  _id?: ObjectId
  name: string
  email: string
  password: string
  specialties: string[]
  languages: string[]
  therapyTypes: string[]
  availability: string[]
}