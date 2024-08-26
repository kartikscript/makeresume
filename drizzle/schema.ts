import { serial, text, timestamp, pgTable, uuid, integer } from "drizzle-orm/pg-core";


export const users = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerkId:text('clerk_id'),
  name: text("name"),
  email: text("email"),
  profilePhoto:text('profile_photo'),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const resumes = pgTable('resume',{
  id: uuid("id").defaultRandom().primaryKey(),
  personalDetailsId:uuid('personal_detail_id').notNull().references(()=>users.id)
})

export const userDetails = pgTable('user_detail',{
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  email: text("email"),
  phoneNumber:integer('phone_number'),
  profession:text('profession'),
  profilePhoto:text('profile_photo'),
  summary:text('summary'),
  portfolioLink:text('portfolio_link'),
  resumeId:uuid('resume_id').notNull().references(()=>resumes.id)
})
export const links = pgTable('link',{
  id: uuid("id").defaultRandom().primaryKey(),
  link:text('link'),
  resumeId:uuid('resume_id').notNull().references(()=>resumes.id)

})
export const educationDetails = pgTable('education_detail',{
  id: uuid("id").defaultRandom().primaryKey(),
  academyName:text('academy_name'),
  universityName:text('university_name'),
  acadPassInYear:integer('acad_pass_in_year'),
  acadPassOutYear:integer('acad_pass_out_year'),
  univPassInYear:integer('univ_pass_in_year'),
  univPassOutYear:integer('univ_pass_out_year'),
  resumeId:uuid('resume_id').notNull().references(()=>resumes.id)

})
export const workExpDetails = pgTable('work_exp_detail',{
  id: uuid("id").defaultRandom().primaryKey(),
  companyName:text('company_name'),
  beginYear:integer('acad_pass_in_year'),
  endYear:integer('acad_pass_out_year'),
  resumeId:uuid('resume_id').notNull().references(()=>resumes.id),
})
export const skills = pgTable('skill',{
  id: uuid("id").defaultRandom().primaryKey(),
  skillName:text('skill_name'),
  skillRate:integer('skill_rate'),
  resumeId:uuid('resume_id').notNull().references(()=>resumes.id),
})
