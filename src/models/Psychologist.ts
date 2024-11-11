// src/models/Psychologist.ts
import mongoose from 'mongoose';

const PsychologistSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  attributes: {
    therapeuticApproach: String,
    specializations: [String],
    preferredTherapyMethod: String,
    availability: [String],
    languages: [String],
    therapistPatientPhilosophy: String,
    ageGroupsExperience: [String],
    yearsOfExperience: Number,
    additionalTraining: [String],
    therapyDuration: String,
    diverseBackgrounds: Boolean,
    complementaryTools: [String],
    confidentialityPolicy: String,
    evaluationMethods: [String]
  }
});

export default mongoose.models.Psychologist || mongoose.model('Psychologist', PsychologistSchema);