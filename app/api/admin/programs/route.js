import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Program from '../../../../models/Program';
import { verifyAdminAuth } from '../../../../lib/authHelper';

export async function GET(req) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const programs = await Program.find({}).sort({ createdAt: -1 });
    return NextResponse.json(programs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    const body = await req.json();
    await connectDB();

    const newProgram = await Program.create(body);
    return NextResponse.json(newProgram, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
