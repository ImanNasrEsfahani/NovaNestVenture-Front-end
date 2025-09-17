import CompaniesContainer from '../home/CompaniesContainer';
import { getServerTranslation } from 'app/i18n';

export default function SubsidiaryCompanies({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'aboutUs');

  return (
    <div className=" md:py-10">
      <div>{t('', { returnObjects: true }).title}</div>
      <span className="font-header font-bold text-2xl md:leading-10 md:text-4xl">
        {t('SubsidiaryCompanies', { returnObjects: true }).title}
      </span>
      <p className=" text-justify font-barlow text-lg lg:text-xl mb-10 md:pt-12">
        {t('SubsidiaryCompanies', { returnObjects: true }).text}
      </p>
      <CompaniesContainer lang={lang || 'en'} />
    </div>
  );
}
