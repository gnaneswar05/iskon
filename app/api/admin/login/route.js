import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../../../lib/mongodb';
import Admin from '../../../../models/Admin';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_fallback_key_replace_me';

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    await connectDB();

    // Check if the admin exists
    const adminUser = await Admin.findOne({ username });
    if (!adminUser) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Sign JWT token
    const token = jwt.sign(
      { id: adminUser._id, username: adminUser.username },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return NextResponse.json({ message: 'Login successful', token }, { status: 200 });

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
