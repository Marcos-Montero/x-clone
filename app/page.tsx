import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ComposePost from '@/components/compose-post';
import { Wall } from '@/components/wall';
import { PostWithUser } from '@/types/db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('login')
  }

  const { data: posts } = (await supabase
    .from('posts')
    .select('*, users(name, user_name, avatar_url)')) as {
    data: PostWithUser[]
  }
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <ComposePost
        user_name={session.user.user_metadata.user_name}
        avatar_url={session.user.user_metadata.avatar_url}
      />
      <Wall posts={posts} />
    </main>
  )
}
