import { getServerTranslation } from 'app/i18n';


export default function pnp({ params: { lang } }: { params: { lang: string } }) {

  const { t } = getServerTranslation(lang, 'pnp');
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <>

    </>
  )
}