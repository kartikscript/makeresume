import User from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    try {
      const body = await req.json()
      const {resume, clerkId} = body;
     const newResume = await User.updateOne(
          { clerkId: clerkId },          // Filter: Find the user by clerkId
          { $push: { resumes: resume } },  // Update: Push new resume to the 'resumes' array
          { new: true }    
        )
        console.log(newResume)
      return NextResponse.json('')
    } catch (error) {
      return NextResponse.json('resume error caught')
    }
}