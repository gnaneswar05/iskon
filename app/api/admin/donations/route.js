import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Donation from '../../../../models/Donation';
import { verifyAdminAuth } from '../../../../lib/authHelper';

export async function GET(req) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const donations = await Donation.find({}).sort({ createdAt: -1 });
    return NextResponse.json(donations, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    /* Note: In production, POSTing a new donation typically happens from the public site, 
       so you wouldn't necessarily enforce Admin Auth here, or you'd have a separate public route.
       But for this demo, if the admin wants to manually add a record, we leave auth. */
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    const body = await req.json();
    await connectDB();

    const newDonation = await Donation.create(body);
    return NextResponse.json(newDonation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
