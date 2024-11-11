// src/app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Psychologist from '@/models/Psychologist';

export async function POST(request: Request) {
  await dbConnect();

  const { email, password, name, userType } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    let user;
    if (userType === 'user') {
      user = await User.create({ email, password: hashedPassword, name });
    } else {
      user = await Psychologist.create({ email, password: hashedPassword, name });
    }

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}