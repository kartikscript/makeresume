
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { db } from '@/drizzle'
import { users } from '@/drizzle/schema'

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  try {
    
    const body = await req.json()
    const { id, email_addresses, first_name, image_url } = body?.data
    
      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        name: first_name,
        profilePhoto: image_url,
      };
  
      const newUser = await db.insert(users).values(user).returning({clerkId:users.clerkId});
  
      return NextResponse.json({ message: "OK", user: newUser });
  } catch (error) {
    console.error('Error updating database:', error)
    return new NextResponse('Error updating user in database', { status: 500 })
  }
  }