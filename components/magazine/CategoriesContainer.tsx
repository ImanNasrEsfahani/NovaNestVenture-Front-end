'use client';
import useFetchBlog from '@/utils/useFetchBlog';
import React from 'react';
import { useSubmit } from 'stores/dataStore';

export default function CategoriesContainer() {
  
  const {categories} = useSubmit();
  useFetchBlog("categories");

  return (
    <div className="rounded-sm bg-whiteGold px-4 py-8">
      <span className="block border-b-2 border-[#AA84534D] pb-4 font-header text-xl tracking-[4px]">
        Categories
      </span>
      <ul className="mt-7 space-y-4 font-condensed text-xl text-[#6B6B6B]">
        {categories.map((category: any, index) => (
          <li key={index}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
