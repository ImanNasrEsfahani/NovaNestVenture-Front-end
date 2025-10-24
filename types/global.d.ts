export enum Type {
  MVP = 'MVP',
  FirstSale = 'FirstSale',
  SaleDevelopment = 'SaleDevelopment'
}

interface MagazineData {
  title: string;
  description: string | TrustedHTML;
  thumbnail: string;
  slug: string;
  date: string;
  file: string;
}

interface Person {
  image: string;
  position: string;
  name: string;
  linkedIn: string;
  text: string;
  slug: string;
  first_name: string;
  last_name: string;
  websites: any[];
  job_title: string;
  instagram: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  thumbnail: string;
  location: string;
  skills: string[];
  interests: string[];
  education: string;
  about: string[];
};

// Define an interface for contact form in each profile page
interface ContactProfileFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

// Define an interface for contact form data
interface ContactFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

// Define an interface for SmallReservationForm form data
interface SmallReservationFormDataType {
  name: string;
  email: string;
  number: string;
}

// Define an interface for investor registration form data
interface InvestorRegistrationFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  investmentCeiling: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}

// Define an interface for mentor registration form data
interface MentorRegistrationFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate?: Date;
  countryOfResidence: string;
  cityOfResidence: string;
  website: string;
  linkedin: string;
  instagram: string;
  ExpertiesAreas: string;
  howDidYouKnowUs: string;
}

interface WorkWithUSFormDataType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  position: string;
  contract: string;
  FieldStudy: string;
  Subfield: string;
  email: string;
  cvFile?: File | '' | undefined;
  CreditsPassedNumber: string;
  uni: string;
  langLevel: string;
}

// Define an interface for partner membership form data
interface JoinAsaPartnerFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  cityOfResidence: string;
  companyName: string;
  website: string;
  linkedin: string;
  briefIntroduction: string;
  howDidYouKnowUs: string;
}

// Define an interface for job application form data
interface JoinOurTeamFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  cityOfResidence: string;
  TypeOfCollaboration: string;
  FieldOfExpert: string;
  FieldOfExpertOther: string;
  birthDate?: Date;
  educationField?: string;
  educationLevel?: string;
  workHistorySummary?: string;
  cvFile?: File | '' | undefined;
}

// Define an interface for job application form data
interface TraineeRegistrationFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  cityOfResidence: string;
  birthDate: Date;
  FieldOfInterest: string;
  FieldOfInterestOther: string;
  TellUsAboutYourself: string;
  cvFile?: File | '' | undefined;
}

// Define an interface for startups form data
interface StartupsFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  cityOfResidence: string;

  // MVP or Early Traction or Scale-Up
  startupType: Type;

  // with Pitchdeck file
  pitchDeckFile?: File | '';

  // General Information without pitchdeck file
  productName: string;
  siteAddress: string;

  // Problem accordion
  customerProblem: string;

  // Solution accordion
  uniqueValueProposition: string;
  technologyReadinessLevel: string;
  
  // business model accordion
  monetizationOfYourPlan: string;
  structureOfYourSales: string;
  
  // Target Market accordion
  customerCharacteristic: string;
  currentCustomers: string;
  estimatedMarketSize: string;

  // Property accordion
  startupRevenue: string;
  monthlyIncome: string;
  currentInterestRate: string;
  currentRaisedFunding: string;
  neededCapital: string;

  // other files
  businessPlanFile?: File | '';
  financialFile?: File | '';

  // last questions
  cooperatedWithInvestors: string;
  howDidYouKnowUs: string;
}

interface DecodedToken {
  exp: number;
  iat: number;
  role: string;
  user_id: number;
  first_name: string;
  last_name: string;
  image: string;
  jwt: string;
}

interface imageList {
  src: string;
  alt: string;
}

interface CompanySectionsInterface {
  smallTitle: string;
  title: string;
  text: string;
  reverse: boolean;
  show: boolean;
  index: number;
  link: string;
  addedClass: string;
  images: imageList[];
  buttonText: string;
}

interface SportsInterface {
  title: string;
  image: string;
  type: string;
  date: string;
}

interface LogosInterface {
  number: number;
  alt: string;
}

interface ImagesInterface {
  src: string;
}

interface LinksInterface {
  linkedin: string;
  whatsapp: string;
  email: string;
  website: string;
  instagram: string;
}

export {
  Person,
  MagazineData,
  ContactProfileFormDataType,
  ContactFormDataType,
  SmallReservationFormDataType,
  CompanySectionsInterface,
  ImagesInterface,
  SportsInterface,
  LogosInterface,
  StartupsFormDataType,
  JoinAsaPartnerFormDataType,
  InvestorRegistrationFormDataType,
  MentorRegistrationFormDataType,
  JoinOurTeamFormDataType,
  TraineeRegistrationFormDataType,
  DecodedToken,
  WorkWithUSFormDataType,
};