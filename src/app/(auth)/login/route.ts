// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Psychologist from '@/models/Psychologist';

export async function POST(request: Request) {
  await dbConnect();

  const { email, password, userType } = await request.json();

  try {
    let user;
    if (userType === 'user') {
      user = await User.findOne({ email });
    } else {
      user = await Psychologist.findOne({ email });
    }

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ message: 'Error logging in' }, { status: 500 });
  }
}