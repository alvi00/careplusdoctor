export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
    specialty: "Gynecology",
    hospital: "City General Hospital",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    specialty: "Obstetrics",
    hospital: "Downtown Health Center",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    specialty: "Reproductive Endocrinology",
    hospital: "Sunrise Medical Clinic",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    specialty: "Maternal-Fetal Medicine",
    hospital: "Central Women’s Hospital",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    specialty: "Midwifery",
    hospital: "Green Valley Medical Center",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    specialty: "Breast Health",
    hospital: "Hope Wellness Clinic",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    specialty: "Pelvic Pain Management",
    hospital: "Eastside Women’s Hospital",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    specialty: "Urogynecology",
    hospital: "Harmony Health Center",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    specialty: "Fertility Specialist",
    hospital: "Bright Future Fertility Center",
  },
];



export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
