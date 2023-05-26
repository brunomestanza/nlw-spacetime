import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      // We dont have a delete cookie method, but we can set the cookie without any infos, and max-age to zero, to make in invalid
      'Set-Cookie': 'token=; Path=/; max-age=0;',
    },
  })
}
