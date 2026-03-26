import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = 'mongodb://jayantygnaneswar_db_user:F7VtCMRiTqLoyodx@ac-cp8csnz-shard-00-00.1jy0zij.mongodb.net:27017,ac-cp8csnz-shard-00-01.1jy0zij.mongodb.net:27017,ac-cp8csnz-shard-00-02.1jy0zij.mongodb.net:27017/iskon?ssl=true&replicaSet=atlas-c4zumb-shard-0&authSource=admin&appName=Cluster0';

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const exists = await Admin.findOne({ username: 'admin' });
    if (exists) {
      console.log('Admin user already exists. Exiting...');
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password', salt);

    await Admin.create({
      username: 'admin',
      password: hashedPassword
    });

    console.log('Admin user created successfully! Username: admin | Password: password');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding admin:', err);
    process.exit(1);
  }
}

seed();
