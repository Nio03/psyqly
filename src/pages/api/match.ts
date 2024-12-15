import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import { calculateMatchScore } from '../../utils/matching';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db("psyqly");
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Obtener usuario
    const user = await db.collection('users').findOne({ 
      _id: new ObjectId(userId)
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Encontrar terapeutas
    const therapists = await db.collection('users').find({ 
      role: 'therapist',
      'preferences.language': { $in: user.questionnaire.languages },
      'preferences.communicationType': user.questionnaire.preferredModality
    }).toArray();

    // Calcular puntuaciones
    const matches = therapists.map((therapist) => {
      const score = calculateMatchScore(user, therapist);
      return {
        therapist: {
          id: therapist._id,
          name: therapist.name,
          email: therapist.email,
          specialties: therapist.preferences.therapyType,
          languages: therapist.preferences.language,
          schedule: therapist.preferences.schedule,
        },
        score,
      };
    });

    // Ordenar por puntuación y obtener mejores coincidencias
    matches.sort((a, b) => b.score - a.score);
    const topMatches = matches.slice(0, 5);

    return res.status(200).json({ 
      matches: topMatches,
      totalMatches: matches.length
    });
  } catch (error) {
    console.error('Matching error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}