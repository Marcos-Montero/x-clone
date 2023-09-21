'use client'
import { useRef } from 'react';

import Image from 'next/image';

import { addPost } from '@/actions/add-post';
import { User } from '@/types/db';

export default function ComposePost({
  user_name,
  avatar_url,
}: Pick<User, 'user_name' | 'avatar_url'>) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div className="w-[500px] flex gap-4">
      <form
        ref={formRef}
        action={async (formData) => {
          await addPost(formData)
          formRef.current?.reset()
        }}
        className="m-8 w-full flex flex-col gap-4"
      >
        <Image
          src={avatar_url}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col flex-nowrap items-end gap-4">
          <textarea
            name="content"
            rows={4}
            className="w-full outline p-2 outline-white/25 w-full text-lg bg-black place-holder-gray-500"
            placeholder="What's up?"
          ></textarea>
          <button className="py-2 px-5 rounded-xl bg-sky-500 text-white-600 w-[150px] ">
            Post
          </button>
        </div>
      </form>
    </div>
  )
}
