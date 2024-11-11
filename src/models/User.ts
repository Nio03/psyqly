// src/models/User.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  preferences: {
    mainReason: String,
    supportType: String,
    therapyModality: String,
    sessionFrequency: String,
    preferredSchedule: [String],
    therapistGenderPreference: String,
    languages: [String],
    previousTherapy: Boolean,
    comfortLevel: Number,
    preferredTherapyMethod: String,
    therapistApproachPreference: String,
    specialConsiderations: String,
    therapyExpectations: String,
    technologyComfort: String,
    importantDetails: String
  }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);