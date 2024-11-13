// src/app/api/login/route.ts
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import clientPromise from "@/lib/mongodb"
import { createToken, setTokenCookie } from '@/lib/auth'

export async function POST(request: Request) {
  const { email, password } = await request.json()
  const client = await clientPromise
  const db = client.db("psyqly")
  
  const user = await db.collection("users").findOne({ email })
  
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const token = createToken({ id: user._id, email: user.email, name: user.name })
  
  const response = NextResponse.json({ message: "Login successful" })
  setTokenCookie(response, token)

  return response
}