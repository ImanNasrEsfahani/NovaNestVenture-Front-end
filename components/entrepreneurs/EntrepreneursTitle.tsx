import { useLang } from 'stores/langStore';
import { useTranslation } from 'app/i18n/client';

export default function EntrepreneursTitle() {
  const lang = useLang((s) => s.lang)
  const { t } = useTranslation(lang, "formComponent")

  return (
    <>
    <div className='text-center'>
      <p className='font-weight: 400 mb-20 pt-8 font-condensed text-lg tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl'>
        {t('EntrepreneurTitle')}
      </p>
    </div>
    <div>
      <p className='mb-4 text-sm lg:text-2xl'>{t('PersonalInformation')}</p>
    </div>
    <div>
    <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
    </div>
    </>
  )
}
