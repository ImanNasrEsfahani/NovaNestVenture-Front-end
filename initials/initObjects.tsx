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
  MVP = 'MVP',
  FirstSale = 'FirstSale',
  SaleDevelopment = 'SaleDevelopment'
}

const initialStartupsFormData: StartupsFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  cityOfResidence: '',

  // MVP or Early Traction or Scale-Up
  startupType: Type.MVP,

  // with Pitchdeck file
  pitchDeckFile: '',

  // General Information without pitchdeck file
  productName: '',
  siteAddress: '',

  // Problem accordion
  customerProblem: '',

  // Solution accordion
  uniqueValueProposition: '',
  technologyReadinessLevel: '',
  
  // business model accordion
  monetizationOfYourPlan: '',
  structureOfYourSales: '',
  
  // Target Market accordion
  customerCharacteristic: '',
  currentCustomers: '',
  estimatedMarketSize: '',

  // Property accordion
  startupRevenue: '',
  monthlyIncome: '',
  currentInterestRate: '',
  currentRaisedFunding: '',
  neededCapital: '',

  // other files
  businessPlanFile: '',
  financialFile: '',

  // last questions
  cooperatedWithInvestors: '',
  howDidYouKnowUs: ''
};

const initialJoinAsaPartnerFormData: JoinAsaPartnerFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  cityOfResidence: '',
  companyName: '',
  website: '',
  linkedin: '',
  briefIntroduction: '',
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
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  investmentCeiling: '',
  preferredAreas: '',
  howDidYouKnowUs: '',
};

const initialMentorRegistrationFormData: MentorRegistrationFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  cityOfResidence: '',
  birthDate: new Date(),
  website: '',
  linkedin: '',
  instagram: '',
  ExpertiesAreas: '',
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
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
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
