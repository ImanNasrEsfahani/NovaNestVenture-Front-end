'use client';
import './investment.css'
import { useLang } from 'stores/langStore';
import ButtonRefactor from '@/components/common/ButtonRefactor';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function FeaturesCards({
  title,
  description,
  link
}: {
  title: string;
  description: string;
  link: string;
}) {

  // const router = useRouter();

  // const handleOnClick = () => {
  //   router.push(link);
  // }
  const lang = useLang().lang

  return (
    <div  className="flex flex-col justify-between p-3 md:w-[580px] font-header shadow-xl rounded-lg">
      <div className='flex flex-col'>
        <span className=" text-lg mx-auto p-2 font-bold ">{title}</span>
        <p className="text-[12px] md:text-[13px] ">{description}</p>
      </div>
      <div className='mx-auto w-4/5 font-barlow text-md md:text-2xl mt-6'>
        <ButtonRefactor text={lang === "en" ? "Register" : "ثبت نام"} type="link" href={`${base}${link}`} />
      </div>
      {/* <ButtonRefactor text={lang === 'en' ? 'Register' : 'ثبت نام'} /> */}
    </div>
  );
}
