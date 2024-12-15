import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db("psyqly");

    const {
      email,
      password,
      name,
      therapyType,
      language,
      schedule,
      communicationType,
      specializations,
      experience,
      approach,
      education
    } = req.body;

    // Verificar si el email ya existe
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear terapeuta
    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      name,
      role: 'therapist',
      preferences: {
        therapyType,
        language,
        schedule,
        communicationType,
      },
      questionnaire: {
        specializations,
        experience,
        approach,
        education,
        approachPreference: approach.includes('flexible') ? 'flexible' : 'estructurado'
      },
      createdAt: new Date()
    });

    res.status(201).json({ message: 'Therapist created successfully', userId: result.insertedId });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error creating therapist' });
  }
}