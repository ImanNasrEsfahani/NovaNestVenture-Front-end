import {
  HandicraftForm as HandicraftFormDataType,
  StartupsFormData,
  AccelerationApplicantFormDataType,
  WorkWithUSFormData,
  JoinAsaPartnerFormData,
  JoinOurTeamFormData,
  InvestorRegistrationFormData,
  MentorRegistrationFormData,
  Entrepreuneur,
  ContactUSFormData,
  StartupApplicantFormDataType,
  AcademyApplicantFormDataType,
  PNPApplicantFormDataType,
  FormData,
  LandaGeneFormData
} from '@/types/global';

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

const initialJoinAsaPartnerFormData: JoinAsaPartnerFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  companyName: '',
  website: '',
  linkedin: '',
  breifIntroduction: '',
  howDidYouKnowUs: '',
};

const initialJoinOurTeamFormData: JoinOurTeamFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  cityOfResidence: '',
  TypeOfCollaboration: '',
  FieldOfExpert: '',
  birthDate: '',
  educationField: '',
  educationLevel: '',
  workHistorySummary: '',
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

const initialMentorRegistrationFormData: MentorRegistrationFormData = {
  firstName: '',
  lastName: '',
  birthDate: new Date(),
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  preferredAreas: '',
  howDidYouKnowUs: '',
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

const StartupApplicantFormData: StartupApplicantFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  number: '',
};

const AccelerationApplicantFormData: AccelerationApplicantFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  number: '',
};

const AcademyApplicantFormData: AcademyApplicantFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  number: '',
};

const PNPApplicantFormData: PNPApplicantFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  number: '',
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
  initialJoinAsaPartnerFormData,
  initialJoinOurTeamFormData,
  initialInvestorRegistrationFormData,
  initialMentorRegistrationFormData,
  initialFormData,
  ContactFormData,
  StartupApplicantFormData,
  AccelerationApplicantFormData,
  AcademyApplicantFormData,
  PNPApplicantFormData,
  RegisterationFormData,
  initialApplicationFormData,
  HandicraftFormData,
  initialWorkWithUSFormData
};
