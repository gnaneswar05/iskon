import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import { verifyAdminAuth } from '../../../../lib/authHelper';

export async function GET(req) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const events = await Event.find({}).sort({ date: -1 });
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error('Fetch Events Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    const body = await req.json();
    await connectDB();

    const newEvent = await Event.create(body);
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error('Create Event Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
