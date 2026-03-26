import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    initiative: { type: String, enum: ['maintenance', 'prasadam', 'goseva', 'books'], required: true },
    paymentId: { type: String, required: false },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  },
  { timestamps: true }
);

export default mongoose.models.Donation || mongoose.model('Donation', DonationSchema);
