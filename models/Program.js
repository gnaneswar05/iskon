import mongoose from 'mongoose';

const ProgramSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: [String], required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    icon: { type: String, required: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Program || mongoose.model('Program', ProgramSchema);
