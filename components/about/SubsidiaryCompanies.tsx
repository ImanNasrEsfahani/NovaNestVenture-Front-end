'use client';
import CompaniesContainer from '../home/CompaniesContainer';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function SubsidiaryCompanies() {
  const lang = useLang().lang;

  const { t } = useTranslation(lang, 'aboutUs');

  return (
    <div className=" md:py-10">
      <div>{t('', { returnObjects: true }).title}</div>
      <span className="font-gilda font-bold text-2xl md:leading-10 md:text-4xl">
        {t('SubsidiaryCompanies', { returnObjects: true }).title}
      </span>
      <p className=" text-justify font-barlow text-[16px] md:text-xl mb-10 md:leading-8 md:pt-12">
        {t('SubsidiaryCompanies', { returnObjects: true }).text}
      </p>
      <CompaniesContainer />
    </div>
  );
}
