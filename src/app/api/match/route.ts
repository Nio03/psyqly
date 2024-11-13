// src/app/api/match/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { findMatch } from '@/lib/matchmaking'
import { User } from '@/models/User'
import { Psychologist } from '@/models/Psychologist'

export async function GET(request: Request) {
  const client = await clientPromise
  const db = client.db("psyqly")
  
  const userId = request.headers.get('user-id')
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 })
  }

  const user = await db.collection<User>("users").findOne({ _id: userId })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const psychologists = await db.collection<Psychologist>("psychologists").find().toArray()
  
  const match = findMatch(user, psychologists)

  return NextResponse.json({ match })
}