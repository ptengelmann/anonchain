import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (_error) {
    // Handle the error using type guarding
    if (_error instanceof Error) {
      console.error(`Error: ${_error.message}`);
    } else {
      console.error('Unknown error occurred', _error);
    }
    process.exit(1);
  }
};

export default connectDB;
