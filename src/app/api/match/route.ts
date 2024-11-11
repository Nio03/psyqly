// src/app/api/match/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Psychologist from '@/models/Psychologist';

function calculateMatchScore(user: any, psychologist: any) {
  let score = 0;
  let totalWeight = 0;

  // Compare user preferences with psychologist attributes
  if (user.preferences.therapyModality === psychologist.attributes.preferredTherapyMethod) score++;
  if (user.preferences.preferredSchedule.some((s: string) => psychologist.attributes.availability.includes(s))) score++;
  if (user.preferences.languages.some((l: string) => psychologist.attributes.languages.includes(l))) score++;
  if (user.preferences.preferredTherapyMethod === psychologist.attributes.therapeuticApproach) score++;
  
  // Add more comparison logic here based on other fields

  totalWeight = 4; // Update this based on the number of comparisons made

  return score / totalWeight;
}

export async function POST(request: Request) {
  await dbConnect();

  const { userId } = await request.json();

  try {
    const user = await User.findById(userId);
    const psychologists = await Psychologist.find();

    let bestMatch = null;
    let highestScore = -1;

    for (let psychologist of psychologists) {
      const score = calculateMatchScore(user, psychologist);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = psychologist;
      }
    }

    return NextResponse.json({ match: bestMatch, score: highestScore });
  } catch (error) {
    return NextResponse.json({ message: 'Error finding match' }, { status: 500 });
  }
}