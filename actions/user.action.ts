"use server";

import { connect } from "@/lib/db";
import User from "@/lib/models";
import { UserProp } from "@/types/types";



export async function createUser(user:UserProp) {
  try {
    await connect();
   const checkUser=  await User.findOne({clerkId:user.clerkId})
   if(!checkUser){
    return 'user exists'
   }
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
