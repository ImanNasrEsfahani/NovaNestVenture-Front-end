'use client';
import Magnifier from '../icons/common/Magnifier';

export default function SearchInput() {
  return (
    <div className="relative rounded-sm bg-whiteGold p-3">
      <span className="absolute inset-y-0 right-5 flex items-center pr-2">
        <Magnifier />
      </span>
      {/* <Input
        register={""}
        errors={""}
        nameInput=''
        type='text'
        label=''
        required='' 
        patternValue={''} 
        patternMessage='' 
        placeholder='Search...'
        className='input  w-full'
        containerClass=''
        labelClass=''      
      /> */}
      <input
        type="text"
        placeholder="Search..."
        className="input  w-full"
      />
    </div>
  );
}
