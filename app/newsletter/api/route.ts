import { NextResponse } from 'next/server'

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});



export async function POST(request: Request): Promise<Response> {
  const req = await request.json()
  console.log(req.email)
  try {
    const response = await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: req.email,
      status: "pending",
    });
    console.log("response");
    return NextResponse.json(response)

  }
  catch(e) {
    console.log("e")
    return NextResponse.json(e)

  }
}


