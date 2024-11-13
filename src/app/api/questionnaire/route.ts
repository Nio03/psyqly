// src/app/api/questionnaire/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from 'mongodb'

export async function POST(request: Request) {
  const session = await getServerSession()
  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const { mainReason, preferredTherapyType, preferredFrequency, preferredLanguage } = await request.json()
  
  const client = await clientPromise
  const db = client.db("psyqly")
  
  await db.collection("users").updateOne(
    { _id: new ObjectId(session.user.id) },
    {
      $set: {
        questionnaire: {
          mainReason,
          preferredTherapyType,
          preferredFrequency,
          preferredLanguage
        }
      }
    }
  )

  return NextResponse.json({ message: "Questionnaire submitted successfully" })
}