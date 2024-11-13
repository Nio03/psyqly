// src/app/api/questionnaire/route.ts
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import clientPromise from "@/lib/mongodb"
import { ObjectId } from 'mongodb'

export async function POST(request: Request) {
  // Parsear cookies del request
  const cookies = cookie.parse(request.headers.get('cookie') || '')
  const token = cookies.authToken // Nombre de la cookie que contiene el token JWT

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    
    if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
      throw new Error("Invalid token")
    }

    // Extraer los datos del cuerpo de la solicitud
    const { mainReason, preferredTherapyType, preferredFrequency, preferredLanguage } = await request.json()

    const client = await clientPromise
    const db = client.db("psyqly")

    // Actualizar el cuestionario del usuario
    await db.collection("users").updateOne(
      { _id: new ObjectId(decoded.id) }, // Usar el ID del token decodificado
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
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
  }
}
