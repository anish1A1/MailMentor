// api/clerk/webhook


export const POST = async (req: Request) => {
    const {data} = await req.json()
    console.log('Clerk Webhook received', data)

    return new Response("Webhook Received", {status: 200})
}

