import { getServerTranslation } from 'app/i18n';
import Image from 'next/image';
import ButtonRefactor from '@/components/common/ButtonRefactor';


export default function Academy({ lang }: { lang: string }) {
  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-36">
      <div className="size-full flex flex-col justify-between">
        <div>
          <span className="mb-4 font-header">{t('NovaNestVenture')}</span>
          <h2 className="font-header text-4xl lg:text-5xl font-bold">{t('Academy')}</h2>
        </div>

        <p className='leading-loose'>{t('NovaNestAcademyInfo')}</p>

        <div className="max-w-container-xxs">
          <ButtonRefactor
            text={t('visit')}
            type="link"
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/academy`}
            bgColor="black"
          />
        </div>
      </div>

      <div className="size-full">
          <Image
            loading="lazy"
            className="rounded-lg object-cover"
            src={"/static/images/home/academy/nova-nest-venture-academy.png"}
            alt={"Academy"}
            width={1200}
            height={675}
          />
      </div>
    </div>
  )
}