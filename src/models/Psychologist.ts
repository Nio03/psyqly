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
  education: string
  experience: number // años de experiencia
  bio: string
  profilePicture?: string
  rating?: number
  reviews?: {
    userId: ObjectId
    comment: string
    rating: number
    date: Date
  }[]
  sessionPrice: number
  sessionDuration: number // en minutos
  onlineAvailable: boolean
  inPersonAvailable: boolean
  location?: {
    city: string
    country: string
    address?: string
  }
  verificationStatus: 'pending' | 'verified' | 'rejected'
}

export interface PsychologistWithoutPassword extends Omit<Psychologist, 'password'> {}