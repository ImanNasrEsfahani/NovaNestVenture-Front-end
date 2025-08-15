'use client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fAaboutUs from '../app/i18n/locales/fa/aboutUs.json'
import fAacceleration from '../app/i18n/locales/fa/acceleration.json'
import fAcardData from '../app/i18n/locales/fa/cardData.json'
import fAcontact from '../app/i18n/locales/fa/contact.json'
import fAcountryInput from '../app/i18n/locales/fa/countryInput.json'
import fAentrepreneur from '../app/i18n/locales/fa/entrepreneur.json'
import fAevents from '../app/i18n/locales/fa/events.json'
import fAfooter from '../app/i18n/locales/fa/footer.json'
import fAformComponent from '../app/i18n/locales/fa/formComponent.json'
import fAhandicraft from '../app/i18n/locales/fa/handicraft.json'
import fAinvestment from '../app/i18n/locales/fa/investment.json'
import fAinvestorForm from '../app/i18n/locales/fa/investorForm.json'
import fAlandaGene from '../app/i18n/locales/fa/landaGene.json'
import fAlayout from '../app/i18n/locales/fa/layout.json'
import fAmagazine from '../app/i18n/locales/fa/magazine.json'
import fAmainPage from '../app/i18n/locales/fa/mainPage.json'
import fAourTeam from '../app/i18n/locales/fa/ourTeam.json'
import fApartnerMemberForm from '../app/i18n/locales/fa/partnerMemberForm.json'
import fAstartup from '../app/i18n/locales/fa/startUp.json'

import eNaboutUs from '../app/i18n/locales/en/aboutUs.json'
import eNacceleration from '../app/i18n/locales/en/acceleration.json'
import eNcardData from '../app/i18n/locales/en/cardData.json'
import eNcontact from '../app/i18n/locales/en/contact.json'
import eNcountryInput from '../app/i18n/locales/en/countryInput.json'
import eNentrepreneur from '../app/i18n/locales/en/entrepreneur.json'
import eNevents from '../app/i18n/locales/en/events.json'
import eNfooter from '../app/i18n/locales/en/footer.json'
import eNformComponent from '../app/i18n/locales/en/formComponent.json'
import eNhandicraft from '../app/i18n/locales/en/handicraft.json'
import eNinvestment from '../app/i18n/locales/en/investment.json'
import eNinvestorForm from '../app/i18n/locales/en/investorForm.json'
import eNlandaGene from '../app/i18n/locales/en/landaGene.json'
import eNlayout from '../app/i18n/locales/en/layout.json'
import eNmagazine from '../app/i18n/locales/en/magazine.json'
import eNmainPage from '../app/i18n/locales/en/mainPage.json'
import eNourTeam from '../app/i18n/locales/en/ourTeam.json'
import eNpartnerMemberForm from '../app/i18n/locales/en/partnerMemberForm.json'
import eNstartup from '../app/i18n/locales/en/startUp.json'

export const defaultNS = "mainPage";

export const resources = {
  fa: {
    fAaboutUs,
    fAacceleration,
    fAcardData,
    fAcontact,
    fAcountryInput,
    fAentrepreneur,
    fAevents,
    fAfooter,
    fAformComponent,
    fAhandicraft,
    fAinvestment,
    fAinvestorForm,
    fAlandaGene,
    fAlayout,
    fAmagazine,
    fAmainPage,
    fAourTeam,
    fApartnerMemberForm,
    fAstartup
  },
  en: {
    eNaboutUs,
    eNacceleration,
    eNcardData,
    eNcontact,
    eNcountryInput,
    eNentrepreneur,
    eNevents,
    eNfooter,
    eNformComponent,
    eNhandicraft,
    eNinvestment,
    eNinvestorForm,
    eNlandaGene,
    eNlayout,
    eNmagazine,
    eNmainPage,
    eNourTeam,
    eNpartnerMemberForm,
    eNstartup
  }
} as const;

i18n.use(initReactI18next).init({
  lng: "fa",
  ns: ["aboutUs", 
    "acceleration", 
    "cardData", 
    "contact", 
    "countryInput", 
    "entrepreneur", 
    "events",
    "footer",
    "formComponent",
    "handiCraft",
    "investment",
    "investorForm",
    "landaGene",
    "layout",
    "magazine",
    "mainPage",
    "ourTeam",
    "partnerMemberForm",
    "startup"
],
  defaultNS,
  resources,
});