import { getServerTranslation } from 'app/i18n';
import Image from 'next/image';
import ButtonRefactor from '@/components/common/ButtonRefactor';


export default function Academy({ lang }: { lang: string }) {
  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-36">
      <div className="size-full flex flex-col justify-between">
        <div>
          <span className="font-header">{t('NovaNest')}</span>
          <h2 className="mt-2 font-header text-4xl lg:text-5xl font-bold">{t('Academy')}</h2>
        </div>

        <p className='leading-loose mt-6'>{t('NovaNestAcademyInfo')}</p>

        <div className="max-w-container-xxs mt-9">
          <ButtonRefactor
            text={t('visit')}
            type="link"
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/join-as-a-trainee`}
            bgColor="black"
          />
        </div>
      </div>

      <div className="flex justify-center size-full">
          <Image
            loading="lazy"
            className="rounded-lg object-cover"
            src={"/static/images/home/academy/nova-nest-venture-academy.jpg"}
            alt={"Academy"}
            width={1200}
            height={675}
          />
      </div>
    </div>
  )
}