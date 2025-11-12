import {
  StartupsFormDataType,
  WorkWithUSFormDataType,
  JoinAsaPartnerFormDataType,
  JoinOurTeamFormDataType,
  TraineeRegistrationFormDataType,
  InvestorRegistrationFormDataType,
  MentorRegistrationFormDataType,
  ContactProfileFormDataType,
  ContactFormDataType,
  SmallReservationFormDataType,
} from '@/types/global';

enum Type {
  MVP = 'MVP',
  FirstSale = 'FirstSale',
  SaleDevelopment = 'SaleDevelopment'
}

const initialStartupsFormData: StartupsFormDataType = {
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

const initialJoinAsaPartnerFormData: JoinAsaPartnerFormDataType = {
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

const initialJoinOurTeamFormData: JoinOurTeamFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  cityOfResidence: '',
  TypeOfCollaboration: '',
  FieldOfExpert: '',
  FieldOfExpertOther: '',
  birthDate: new Date(),
  educationField: '',
  educationLevel: '',
  workHistorySummary: '',
  cvFile: '' as File | ''
};

const initialInvestorRegistrationFormData: InvestorRegistrationFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  investmentCeiling: '',
  preferredAreas: '',
  howDidYouKnowUs: '',
};

const initialMentorRegistrationFormData: MentorRegistrationFormDataType = {
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

const initialTraineeRegistrationFormData: TraineeRegistrationFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  cityOfResidence: '',
  birthDate: new Date(),
  FieldOfInterest: '',
  FieldOfInterestOther: '',
  TellUsAboutYourself: ''
};

const initialWorkWithUSFormData: WorkWithUSFormDataType = {
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

const initialContactProfileFormData: ContactProfileFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  subject: '',
  message: ''
};

const initialContactFormData: ContactFormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: ''
};

const initialSmallReservationFormData: SmallReservationFormDataType = {
  name: '',
  email: '',
  number: '',
};

export {
  initialStartupsFormData,
  initialJoinAsaPartnerFormData,
  initialJoinOurTeamFormData,
  initialInvestorRegistrationFormData,
  initialMentorRegistrationFormData,
  initialTraineeRegistrationFormData,
  initialWorkWithUSFormData,
  initialContactProfileFormData,
  initialContactFormData,
  initialSmallReservationFormData
};
