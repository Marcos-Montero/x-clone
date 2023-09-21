import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

// nextjs option that avoids saving on cache the route, so that it is forced to run on the server
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  if (!code) {
    return
  }
  const supabase = createRouteHandlerClient({ cookies })
  await supabase.auth.exchangeCodeForSession(code)
  return NextResponse.redirect(requestUrl.origin)
}
