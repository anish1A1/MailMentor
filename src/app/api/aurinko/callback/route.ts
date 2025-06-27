// api/aurinko/callback

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async (req: Request)=> {
    const {userId} = await auth()
     const url = new URL(req.url || '');
  const code = url.searchParams.get('code');
    console.log('user_id is', userId)

     console.log('OAuth code:', code);
    return NextResponse.json({message: "Hello bruh!"})
}