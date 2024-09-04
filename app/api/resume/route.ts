import { connect } from "@/lib/db";
import User from "@/lib/models";
import { UserProp } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const clerkId = url.searchParams.get('clerkId');

    if (!clerkId) {
      return NextResponse.json({ error: 'clerkId is required' }, { status: 400 });
    }

    // Find the user by clerkId
    const user = await User.findOne({ clerkId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return the resumes associated with the user
    return NextResponse.json({ resumes: user.resumes }, { status: 200 });
  } catch (error) {
    console.log('Error:', error);
    return NextResponse.json({ error: 'Error retrieving resumes' }, { status: 500 });
  }
}



export async function POST(req:NextRequest){
    try {
      const body = await req.json()
      const {resume, clerkId} = body;
      
      const user= await User.findOne({ clerkId:clerkId });
    
      if (!user) {
        console.error('User not found');
        return;
      }
  
      // Push the new resume to the resumes array
      user.resumes?.push(resume);
  
      // Save the updated user document
      await user.save();
      const addedResume = user.resumes[user.resumes.length - 1];

      console.log('Resume added successfully',user);
        console.log('reached !!!!',addedResume)
      return NextResponse.json(addedResume,{status:201})
    } catch (error) {
      console.log(error)
      return NextResponse.json('resume error caught',{status:404})
    }
}

interface ResumeObj {
  _id:string
}

export async function DELETE(req:NextRequest){
      try {
        const url = new URL(req.url);
       const resumeId = url.searchParams.get('resumeId');
       const clerkId = url.searchParams.get('clerkId');

       
    if (!resumeId || !clerkId) {
      return NextResponse.json({ error: 'resumeId and clerkId are required' }, { status: 400 });
    }

    // Find the user by clerkId
    const user = await User.findOne({ clerkId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Filter out the resume with the given resumeId
    const updatedResumes = user.resumes.filter((resume:ResumeObj) => resume._id !== resumeId);

    // Update the user's resumes array
    await User.updateOne({ clerkId }, { resumes: updatedResumes });

        return NextResponse.json('resume deleted',{status:200})
      } catch (error) {
        console.log(error)
        return NextResponse.json('resume error caught',{status:404})
      }

}