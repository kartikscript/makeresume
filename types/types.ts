


// Type for SkillSchema
export interface Skill {
  _id:string;
  skillName: string;
  skillRate: number;
}

// Type for EducationDetailSchema
// export interface EducationDetail {
//   academyName?: string;
//   universityName?: string;
//   acadPassInYear?: number;
//   acadPassOutYear?: number;
//   univPassInYear?: number;
//   univPassOutYear?: number;
// }

// Type for WorkExpDetailSchema
export interface WorkExpDetail {
  _id:string
  companyName?: string;
  beginYear?: number;
  endYear?: number;
  workProfession:string;
}

// Type for ResumeSchema
export interface Resume {
  personalDetails?: {
    name?: string | null;
    email?: string | null;
    phoneNumber?: number;
    profession?: string;
    profilePhoto?: string | null;
    summary?: string;
    portfolioLink?: string;
  };
  educationDetails?: {
    academyName?: string;
    academyStream?:string;
    universityStream?:string;
    universityName?: string;
    acadPassInYear?: number;
    acadPassOutYear?: number;
    univPassInYear?: number;
    univPassOutYear?: number;
  };
  _id?:string
  link?: string;
  workExperience?: WorkExpDetail[];
  skills?: Skill[];
}

// Type for UserSchema
export interface UserProp {
  clerkId?: string;
  name?: string;
  email?: string;
  profilePhoto?: string;
  resumes?: Resume[];
  createdAt?: Date;
  updatedAt?: Date;
}
