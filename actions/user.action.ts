"use server";

import { connect } from "@/lib/db";
import User from "@/lib/models";
import { UserProp } from "@/types/types";



export async function createUser(user:UserProp) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
