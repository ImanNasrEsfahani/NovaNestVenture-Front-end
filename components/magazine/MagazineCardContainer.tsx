'use client';
import React from 'react';
// import useFetchBlog from '../../utils/useFetchBlog';
import { useSubmit } from 'stores/dataStore';
export default function MagazineCardContainer(
  // { url }: { url: string }
) {
  const { cardData } = useSubmit();

  // useEffect(() => {
  //   // Inside the useEffect, fetch the data and update the state
  //   async function fetchData() {
  //     try {
  //       const data = await useFetchBlog(`blog/details/${url}/?format=json`);
  //       setCardData(data);

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, [url]); // Add 'url' to the dependency array

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span>title:</span>
          <span>{cardData?.title}</span>
        </div>
      </div>
    </div>
  );
}
