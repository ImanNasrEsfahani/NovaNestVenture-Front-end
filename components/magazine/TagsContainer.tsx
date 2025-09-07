'use client'
import useFetchBlog from '@/utils/useFetchBlog';
import React from 'react';
import { useSubmit } from 'stores/dataStore';
import { useLang } from 'stores/langStore';

export default function TagsContainer() {
  const {tags} = useSubmit();

  useFetchBlog("tags");

  return (
    <div className="rounded-sm bg-whiteGold px-4 py-8">
      <span className="block border-b-2 border-[#AA84534D] pb-4 font-header text-xl tracking-[4px]">
        Tags
      </span>
      <div className={`grid-cols- mt-7 grid${tags.length} gap-2`}>
        {tags.map((tag: any, index) => (
          <button key={index} className="btn rounded-sm bg-[#D9D9D9] px-2">
            {tag.title}
          </button>
        ))}
      </div>
    </div>
  );
}
