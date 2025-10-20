export enum Type {
  MVP = 'MVP',
  FirstSale = 'FirstSale',
  SaleDevelopment = 'SaleDevelopment'
}

// Define an interface for business partnership form data
interface BusinessPartnerShipFormData {
  fullName: string;
  email: string;
  streetAddress: string;
  companyName: string;
  phoneNumber: string;
  countryOfResidence: string; // Typo: Should be "countryOfResidence"
  streetAddressLine2: string;
  investmentCeiling: string;
  birthTime: Date; // Typo: Should be "birthDate"
  provinceOfResidence: string;
  zipCode: number;
  yourPositionInTeam: string;
  preferredInvestment: string;
  wayKnowUs: string; // Typo: Should be "wayToKnowUs"
}

// Define an interface for contact form data
interface ContactUSFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

// Define an interface for StartupApplicantFormData form data
interface StartupApplicantFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
}

// Define an interface for AccelerationApplicantFormData form data
interface AccelerationApplicantFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
}

// Define an interface for AcademyApplicantFormDataType form data
interface AcademyApplicantFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
}

// Define an interface for PNPApplicantFormData form data
interface PNPApplicantFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
}

// Define an interface for contact form data
interface HandicraftForm {
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
}

// Define an interface for investor registration form data
interface InvestorRegistrationFormData {
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
interface MentorRegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  cityOfResidence: string;
  birthDate: Date;
  website: string;
  linkedin: string;
  instagram: string;
  ExpertiesAreas: string;
  howDidYouKnowUs: string;
}

interface WorkWithUSFormData {
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
interface JoinAsaPartnerFormData {
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
interface JoinOurTeamFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  cityOfResidence: string;
  TypeOfCollaboration: string;
  FieldOfExpert: string;
  birthDate?: string;
  educationField?: string;
  educationLevel?: string;
  workHistorySummary?: string;
  cvFile?: File | '' | undefined;
}

interface LandaGeneFormData {
  full_name: string;
  phone_number: string;
  email: string;
  company_name: string;
}

// Define an interface for startups form data
interface StartupsFormData {
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

interface Entrepreuneur {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date | undefined;
  countryOfResidence: string;
  provinceOfResidence: string;
  companyName: string;
  investmentCeiling: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
  // phone: string;
  // website: string;
  // fieldOfProfessional: string;
}

interface LoginFormData {
  email: string;
  password: string;
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

interface TableData {
  first_name: string;
  last_name: string;
  start_time: string;
  end_time: string;
  status: string;
  employerName: string;
  employeeName: string;
  typeOfLeave: string;
  date: string;
  time: string;
}

interface MagazineData {
  title: string;
  description: string | TrustedHTML;
  thumbnail: string;
  slug: string;
  date: string;
  file: string;
}

interface FormData {
  email: string;
  password: string;
}

interface imageList {
  src: string;
  alt: string;
}

interface personArrayInterface {
  image: string;
  position: string;
  name: string;
  linkedIn: string;
  category: string;
}

interface CompaniesArrayInterface {
  name: string;
  logo: string;
  link: string;
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

interface WorkFieldsInterface {
  titleEN: string;
  titleFA: string;
  image: string;
}

interface ServicesInterface {
  title: string;
  image: string;
}

interface SportsInterface {
  title: string;
  image: string;
  type: string;
  date: string;
}

interface StartUpsInterface {
  image: string;
  titleEN: string;
  titleFA: string;
  descriptionEN: string;
  descriptionFA: string;
  link: string;
}

interface LogosInterface {
  number: number;
  alt: string;
}

interface HomeCardsLeftInterface {
  titles: string;
  text: string;
  addedClass?: string;
  link: string;
  buttonText: string;
}

interface ImagesInterface {
  src: string;
}

interface CoursesInterface {
  title: string;
  image: string;
  date: string;
  active: boolean;
}

interface LinksInterface {
  linkedin: string;
  whatsapp: string;
  email: string;
  website: string;
  instagram: string;
}

interface AboutUsDataInterface {
  image: string;
  name: string;
  position: string;
  links: LinksInterface;
}

interface AboutUsCardProps {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
  description: string;
  link: string;
}

interface PreparationListInterface {
  value: string;
  label: string;
}

interface CountriesDataInterface {
  value: string;
  text: string;
}

interface translationCard {
  title: 'Investment';
  text: string;
  reverse: boolean;
  show: boolean;
  index: number;
  link: string;
  addedClass: string;
}

interface ProfileData {
  first_name: string;
  last_name: string;
  websites: string[];
  job_title: string;
  instagram: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  thumbnail: string;
}

export {
  ContactUSFormData,
  StartupApplicantFormDataType,
  AccelerationApplicantFormDataType,
  AcademyApplicantFormDataType,
  PNPApplicantFormDataType,
  FormData,
  personArrayInterface,
  CompaniesArrayInterface,
  CompanySectionsInterface,
  CountriesDataInterface,
  ServicesInterface,
  AboutUsCardProps,
  ImagesInterface,
  WorkFieldsInterface,
  LandaGeneFormData,
  SportsInterface,
  AboutUsDataInterface,
  StartUpsInterface,
  CoursesInterface,
  LogosInterface,
  PreparationListInterface,
  HomeCardsLeftInterface,
  BusinessPartnerShipFormData,
  StartupsFormData,
  JoinAsaPartnerFormData,
  InvestorRegistrationFormData,
  MentorRegistrationFormData,
  JoinOurTeamFormData,
  Entrepreuneur,
  LoginFormData,
  DecodedToken,
  TableData,
  MagazineData,
  translationCard,
  HandicraftForm,
  ProfileData,
  WorkWithUSFormData,
};