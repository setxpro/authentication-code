import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

export default async function ConnectionMongoose() {
   await mongoose.connect(`${process.env.MONGO_URL}/admin`)
   .then(() => console.log('Connected to Mongoose ⚡'))
   .catch(() => console.log('Error connecting to Mongoose ❌'))
}

ConnectionMongoose();