'use client'
import CompaniesCard from './CompaniesCard';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function CompaniesContainer() {
  const lang = useLang().lang

  const { t } = getServerTranslation(lang, 'aboutUs');

  return (
    <div className="flex justify-between flex-wrap">
      {t('companies', { returnObjects: true }).map(
        (
          { name, logo, link }: { name: string; logo: string; link: string },
          index: number
        ) => (
          <CompaniesCard key={index} name={name} logo={logo} link={link} />
        )
      )}
    </div>
  );
}
