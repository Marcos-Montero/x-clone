import { PostWithUser } from '@/types/db';

import Card from './card';

export const Wall = ({ posts }: { posts: PostWithUser[] }) => (
  <div className="flex flex-col gap-2 p-4 border-l border-r border-white/50 ">
    {posts?.map(({ id, content, users }) => (
      <Card key={id} content={content} author={users} />
    ))}
  </div>
)
