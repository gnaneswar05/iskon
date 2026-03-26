import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Donation from '../../../../../models/Donation';
import { verifyAdminAuth } from '../../../../../lib/authHelper';

export async function GET(req, { params }) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const donation = await Donation.findById(params.id);
    if (!donation) return NextResponse.json({ error: 'Donation not found' }, { status: 404 });

    return NextResponse.json(donation, { status: 200 });
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

    const updatedDonation = await Donation.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    if (!updatedDonation) return NextResponse.json({ error: 'Donation not found' }, { status: 404 });

    return NextResponse.json(updatedDonation, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const deletedDonation = await Donation.findByIdAndDelete(params.id);
    if (!deletedDonation) return NextResponse.json({ error: 'Donation not found' }, { status: 404 });

    return NextResponse.json({ message: 'Donation deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
