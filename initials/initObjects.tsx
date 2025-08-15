import {
  HandicraftForm as HandicraftFormDataType,
  StartupsFormData,
  WorkWithUSFormData
} from '../types/global';
import { PartnerMembershipFormData } from '../types/global';
import { JobFormData } from '../types/global';
import { InvestorRegistrationFormData } from '../types/global';
import { Entrepreuneur } from '../types/global';
import { ContactUSFormData } from '../types/global';
import { FormData } from '@/types/global';
import { LandaGeneFormData } from '../types/global';

enum Type {
  IDEA = 'IDEA',
  MVP = 'MVP',
  TRIAL = 'TRIAL',
  FisrtSale = 'FisrtSale', // Typo: Should be "FirstSale"
  SaleDevelopment = 'SaleDevelopment'
}

const initialStartupsFormData: StartupsFormData = {
  firstName: '',
  lastName: '',
  birthDate: new Date(),
  email: '',
  countryOfResidence: '',
  provinceOfResidence: '',
  type: Type.IDEA,
  ideaExplanation: '',
  getToKnowUs: '',
  pitchDeckFile: '' as File | '',
  businessPlanFile: '' as File | '',
  productName: '',
  siteAddress: '',
  customerProblem: '',
  solution: '',
  productLevel: '',
  scalable: '',
  monetizationOfYourPlan: '',
  structureOfYourSales: '',
  financialModelFile: '' as File | '',
  cooperatedWithInvestors: '',
  financialFile: '' as File | '',
  customerCharacteristic: '',
  currentCustomers: '',
  estimatedMarketSize: '',
  totalTamSamSom: '',
  startupRevenue: '',
  monthlyIncome: '',
  currentInterestRate: '',
  currentRaisedFunding: '',
  neededCapital: '',
};

const initialPartnerMembershipFormData: PartnerMembershipFormData = {
  firstName: '',
  lastName: '',
  birthDate: new Date(),
  email: '',
  companyName: '',
  howDidYouKnowUs: '',
  provinceOfResidence: '',
  investmentCeiling: ''
};

const initialJobFormData: JobFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  cvFile: '' as File | ''
};

const initialApplicationFormData: LandaGeneFormData = {
  full_name: '',
  phone_number: '',
  email: '',
  company_name: ''
};

const initialInvestorRegistrationFormData: InvestorRegistrationFormData = {
  firstName: '',
  lastName: '',
  birthDate: new Date(),
  email: '',
  countryOfResidence: '',
  provinceOfResidence: '',
  companyName: '',
  preferredAreas: '',
  howDidYouKnowUs: '',
  investmentCeiling: ''
};

const initialWorkWithUSFormData: WorkWithUSFormData = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  position: '',
  contract: '',
  FieldStudy: '',
  email: '',
  cvFile: '' as File | '',
  Subfield: '',
  CreditsPassedNumber: '',
  uni: '',
  langLevel: ''
};

const initialFormData: Entrepreuneur = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  birthDate: undefined,
  countryOfResidence: '',
  provinceOfResidence: '',
  investmentCeiling: '',
  preferredAreas: '',
  howDidYouKnowUs: ''
};

const ContactFormData: ContactUSFormData = {
  name: '',
  email: '',
  number: '',
  subject: '',
  message: ''
};

const HandicraftFormData: HandicraftFormDataType = {
  first_name: '',
  last_name: '',
  email: '',
  organization: ''
};

const RegisterationFormData: FormData = {
  email: '',
  password: ''
};

export {
  initialStartupsFormData,
  initialPartnerMembershipFormData,
  initialJobFormData,
  initialInvestorRegistrationFormData,
  initialFormData,
  ContactFormData,
  RegisterationFormData,
  initialApplicationFormData,
  HandicraftFormData,
  initialWorkWithUSFormData
};
