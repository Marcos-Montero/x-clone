'use client'

import Image from 'next/image';

import { User } from '@/types/db';
import {
  IconHeart,
  IconMessageCircle,
  IconRepeat,
} from '@tabler/icons-react';

export default function Card({
  key,
  content,
  author,
}: {
  key: string
  content: string
  author: User
}) {
  return (
    <div
      key={key}
      className=" bg-white/10 min-w-[400px] p-4 border-2 border-white/50 b-slate-300 hover:bg-white/10 rounded-md"
    >
      <div className="flex gap-2 p-2 items-center">
        <Image
          width={60}
          height={60}
          src={author.avatar_url}
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-lg">{author.name}</h4>
          <p className="text-sm text-white/50">@{author.user_name}</p>
        </div>
      </div>
      <p className="text-xl p-4">{content}</p>
      <div className="flex flex-row-reverse gap-4">
        <IconMessageCircle onClick={() => {}} className="cursor-pointer" />
        <IconHeart onClick={() => {}} className="cursor-pointer" />
        <IconRepeat onClick={() => {}} className="cursor-pointer" />
      </div>
    </div>
  )
}
