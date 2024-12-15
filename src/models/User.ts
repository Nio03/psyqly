import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  role: 'user' | 'therapist';
  name: string;
  preferences: {
    therapyType: string[];
    language: string[];
    schedule: string[];
    communicationType: string[];
  };
  questionnaire: {
    mainReason: string;
    supportType: string;
    preferredModality: string;
    frequency: string;
    schedule: string;
    therapistGender: string;
    languages: string[];
    previousTherapy: boolean;
    comfortLevel: number;
    therapyMethod: string;
    approachPreference: string;
    specialConsiderations: string;
    expectations: string;
    techComfort: string;
    importantDetails: string;
  };
  matchScore?: number;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'therapist'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  preferences: {
    therapyType: [String],
    language: [String],
    schedule: [String],
    communicationType: [String],
  },
  questionnaire: {
    mainReason: String,
    supportType: String,
    preferredModality: String,
    frequency: String,
    schedule: String,
    therapistGender: String,
    languages: [String],
    previousTherapy: Boolean,
    comfortLevel: Number,
    therapyMethod: String,
    approachPreference: String,
    specialConsiderations: String,
    expectations: String,
    techComfort: String,
    importantDetails: String,
  }
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);