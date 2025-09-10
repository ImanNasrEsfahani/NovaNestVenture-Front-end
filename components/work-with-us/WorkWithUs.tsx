import { getServerTranslation } from 'app/i18n';
import WorkWithUsClient from 'components/work-with-us/WorkWithUsClient';

export default async function WorkWithUs({ lang }: { lang: string }) {
  const { t } = await getServerTranslation(lang, 'formComponent');
  const { t: tCommon } = getServerTranslation(lang, 'formComponent');

  // Prepare all translations that the client component needs
  const translations = {
    // Work with US specific translations
    workWithUS: t('workWithUS', { returnObjects: true }),
    
    // Universities and language levels
    universities: t("universities", { returnObjects: true }),
    langLevel: t("langLevel", { returnObjects: true }),
    
    // Form field translations
    firstName: t('firstName'),
    firstNameRequired: t('firstNameRequired'),
    firstNamePlaceholder: t('firstNamePlaceholder'),
    lastName: t('lastName'),
    lastNameRequired: t('lastNameRequired'),
    lastNamePlaceholder: t('lastNamePlaceholder'),
    phoneNumber: t('phoneNumber'),
    phoneNumberRequired: t('phoneNumberRequired'),
    phoneNumberPlaceholder: t('phoneNumberPlaceholder'),
    phoneNumberErrorMessage: t('phoneNumberErrorMessage'),
    sendButton: t('sendButton'),
    successMessage: tCommon('successMessage'),
    failedMessage: tCommon('failedMessage')
  };

  return <WorkWithUsClient translations={translations} lang={lang} />;
}