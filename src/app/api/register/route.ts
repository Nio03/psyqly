// src/app/api/register/route.ts
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  const { name, email, password, userType } = await request.json()
  const client = await clientPromise
  const db = client.db("psyqly")
  
  const hashedPassword = await bcrypt.hash(password, 10)
  
  const collection = userType === 'user' ? db.collection("users") : db.collection("psychologists")
  
  await collection.insertOne({
    name,
    email,
    password: hashedPassword,
  })

  return NextResponse.json({ message: "User registered successfully" })
}