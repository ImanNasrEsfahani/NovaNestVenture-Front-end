'use client';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';

// Define the ButtonProps type
// go to prop causes a redirext
// go to prop causes a redirext
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text?: string;
  size?: string;
  type?: 'button' | 'reset' | 'submit';
  bgColor?: 'Primary' | 'Yellow';
  goto?: string;
  disabled?: boolean;
  addedClass?: string;
};

export default function Button({
  text,
  size,
  type = 'button',
  bgColor,
  goto,
}: ButtonProps) {
  // Determine the button size and apply appropriate styles
  const isVisitSize = size === 'visit';

  const router = useRouter();

  const { send } = useSubmit()
  
  const lang = useLang().lang

  console.log(lang)

  return (
    <button
      onClick={() => {
        goto ? router.push(goto || '/') : ""
      }}
      className={`btn2 ${isVisitSize
          ? 'mt-[19px] h-[32px] w-[195px] pb-4 pl-[72px] pr-[71px] pt-[15px] md:h-[60px]'
          : 'mt-[19px] h-11 w-full pb-4 pl-[72px] pr-[71px] pt-[15px] md:flex md:w-[185px]'
        } ${bgColor === 'Primary' ? 'bg-black' : 'bg-[#FDD30A]'
        } btn btn-wide relative inset-0 mt-3 flex items-center justify-center overflow-hidden border border-white px-10 py-5 text-center font-condensed text-base font-normal uppercase leading-none tracking-wider text-white hover:text-white `}
      type={type}
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="text-md absolute inset-0 flex items-center justify-center text-center font-barlow font-medium leading-none text-white">
        {text ? text : `${isVisitSize ? "" : `${send ? `${lang === "en" ? 'Submitting ....' : 'در حال ثبت'}` : `${lang === "en" ? 'Submit' : 'ثبت'}`}`}`}
      </span>
      {/* TODO: use i18n in this component */}
      {isVisitSize && !text && (
        <span className="absolute inset-0 flex items-center justify-center pb-2 text-center font-condensed text-lg font-medium leading-none text-white">
          {"Join Us"}
        </span>
      )}
    </button>
  );
}