import { cookies } from 'next/headers';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import { AuthButtonClient } from './auth-button-client';

export async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <AuthButtonClient
      session={session}
      userName={session?.user.user_metadata.full_name}
    />
  )
}
