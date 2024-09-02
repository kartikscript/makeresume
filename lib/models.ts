import { Schema, model, models } from "mongoose";

// Sub-schema for Skills
const SkillSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  skillRate: {
    type: Number,
    required: true,
  },
});

// Sub-schema for Education Details
const EducationDetailSchema = new Schema({
  academyName: {
    type: String,
  },
  academyStream: {
    type: String,
  },
  universityStream: {
    type: String,
  },
  universityName: {
    type: String,
  },
  acadPassInYear: {
    type: Number,
  },
  acadPassOutYear: {
    type: Number,
  },
  univPassInYear: {
    type: Number,
  },
  univPassOutYear: {
    type: Number,
  },
});

// Sub-schema for Work Experience Details
const WorkExpDetailSchema = new Schema({
  _id:String,
  companyName: {
    type: String,
  },
  beginYear: {
    type: Number,
  },
  endYear: {
    type: Number,
  },
  workProfession:{
    type: String,
  }
});

// Sub-schema for Resume
const ResumeSchema = new Schema({
  personalDetails: {
    name: { type: String },
    email: { type: String },
    phoneNumber: { type: Number },
    profession: { type: String },
    profilePhoto: { type: String },
    summary: { type: String },
    portfolioLink: { type: String },
  },
  links: [{ link: String }],
  educationDetails: [EducationDetailSchema],  // Array of education details
  workExperience: [WorkExpDetailSchema],  // Array of work experience details
  skills: [SkillSchema],  // Array of skills
});

// Main User schema
const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  resumes: [ResumeSchema],  // Array of resumes
});

// Middleware to update the `updatedAt` field before each save
// UserSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

const User = models?.User || model("User", UserSchema);

export default User;



