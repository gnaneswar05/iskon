import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Event from '../../../../../models/Event';
import { verifyAdminAuth } from '../../../../../lib/authHelper';

export async function GET(req, { params }) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const event = await Event.findById(params.id);
    if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 });

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    const body = await req.json();
    await connectDB();

    const updatedEvent = await Event.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    if (!updatedEvent) return NextResponse.json({ error: 'Event not found' }, { status: 404 });

    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const deletedEvent = await Event.findByIdAndDelete(params.id);
    if (!deletedEvent) return NextResponse.json({ error: 'Event not found' }, { status: 404 });

    return NextResponse.json({ message: 'Event deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
