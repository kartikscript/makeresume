import User from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req:NextRequest){

  try {
    const body = await req.json()
    const {user} = body
    console.log(user)
    const checkUser=  await User.findOne({clerkId:user.clerkId})
    if(!checkUser){
     return NextResponse.json('user already exists',{status:200})
    }
     const newUser = await User.create(user);
     return NextResponse.json(newUser,{status:200})
   } catch (error) {
     console.log(error);
   }
}