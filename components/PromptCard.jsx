'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const promptCard = ({ post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState("");

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'> 
          <Image 
            src={post.creator.image}
            alt="user_image"
            height={40}
            width={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'> { post.creator.email } </p>
          </div>
        </div>
{/* Create a new div for the copy button and showing the content of prompt */}
      <div className='copy_btn' onClick={() => {}}>
        {/* in the Image, we want to show a button that can copy the prompt. BUT */}
        {/* it depends on whether the post has been copied already? so we need state */}
        <Image 
          src={copied === post.prompt
          ? 'public/assets/icons/tick.svg'
          : 'public/assets/icons/copy.svg'
        }
        width={12}
        height={12}
        />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{ post.prompt }</p>
      <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>{ post.tag }</p>
    </div>
  )
}

export default promptCard