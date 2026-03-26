import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Program from '../../../../../models/Program';
import { verifyAdminAuth } from '../../../../../lib/authHelper';

export async function GET(req, { params }) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const program = await Program.findById(params.id);
    if (!program) return NextResponse.json({ error: 'Program not found' }, { status: 404 });

    return NextResponse.json(program, { status: 200 });
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

    const updatedProgram = await Program.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    if (!updatedProgram) return NextResponse.json({ error: 'Program not found' }, { status: 404 });

    return NextResponse.json(updatedProgram, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const auth = await verifyAdminAuth(req);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: 401 });

    await connectDB();
    const deletedProgram = await Program.findByIdAndDelete(params.id);
    if (!deletedProgram) return NextResponse.json({ error: 'Program not found' }, { status: 404 });

    return NextResponse.json({ message: 'Program deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
