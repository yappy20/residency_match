// Specialty data with approximate statistics
// Based on NRMP Match data and hospital distribution
// Includes all ABMS primary specialties and common subspecialties/combined programs
export const specialties = [
  // Primary Specialties (ABMS recognized)
  { id: 'internal-medicine', name: 'Internal Medicine', popularity: 0.15, hospitalCount: 450 },
  { id: 'family-medicine', name: 'Family Medicine', popularity: 0.12, hospitalCount: 480 },
  { id: 'pediatrics', name: 'Pediatrics', popularity: 0.10, hospitalCount: 220 },
  { id: 'emergency-medicine', name: 'Emergency Medicine', popularity: 0.08, hospitalCount: 200 },
  { id: 'psychiatry', name: 'Psychiatry', popularity: 0.07, hospitalCount: 200 },
  { id: 'surgery-general', name: 'General Surgery', popularity: 0.06, hospitalCount: 280 },
  { id: 'obgyn', name: 'Obstetrics & Gynecology', popularity: 0.06, hospitalCount: 260 },
  { id: 'anesthesiology', name: 'Anesthesiology', popularity: 0.06, hospitalCount: 150 },
  { id: 'radiology-diagnostic', name: 'Diagnostic Radiology', popularity: 0.05, hospitalCount: 180 },
  { id: 'orthopedic-surgery', name: 'Orthopedic Surgery', popularity: 0.05, hospitalCount: 180 },
  { id: 'neurology', name: 'Neurology', popularity: 0.04, hospitalCount: 160 },
  { id: 'dermatology', name: 'Dermatology', popularity: 0.04, hospitalCount: 140 },
  { id: 'ophthalmology', name: 'Ophthalmology', popularity: 0.03, hospitalCount: 120 },
  { id: 'otolaryngology', name: 'Otolaryngology', popularity: 0.03, hospitalCount: 120 },
  { id: 'urology', name: 'Urology', popularity: 0.02, hospitalCount: 140 },
  { id: 'neurosurgery', name: 'Neurosurgery', popularity: 0.02, hospitalCount: 110 },
  { id: 'plastic-surgery', name: 'Plastic Surgery', popularity: 0.02, hospitalCount: 100 },
  { id: 'pathology', name: 'Pathology', popularity: 0.03, hospitalCount: 150 },
  { id: 'pmr', name: 'Physical Medicine & Rehab', popularity: 0.03, hospitalCount: 90 },
  { id: 'radiation-oncology', name: 'Radiation Oncology', popularity: 0.02, hospitalCount: 90 },
  { id: 'colon-rectal-surgery', name: 'Colon and Rectal Surgery', popularity: 0.01, hospitalCount: 60 },
  { id: 'thoracic-surgery', name: 'Thoracic Surgery', popularity: 0.01, hospitalCount: 80 },
  { id: 'vascular-surgery', name: 'Vascular Surgery', popularity: 0.015, hospitalCount: 120 },
  { id: 'nuclear-medicine', name: 'Nuclear Medicine', popularity: 0.01, hospitalCount: 70 },
  { id: 'medical-genetics', name: 'Medical Genetics and Genomics', popularity: 0.005, hospitalCount: 40 },
  { id: 'preventive-medicine', name: 'Preventive Medicine', popularity: 0.01, hospitalCount: 50 },
  
  // Combined Programs
  { id: 'internal-medicine-pediatrics', name: 'Internal Medicine-Pediatrics', popularity: 0.02, hospitalCount: 100 },
  { id: 'emergency-medicine-family-medicine', name: 'Emergency Medicine-Family Medicine', popularity: 0.005, hospitalCount: 20 },
  { id: 'triple-board', name: 'Triple Board (Pediatrics/Psychiatry/Child Psychiatry)', popularity: 0.002, hospitalCount: 15 },
  
  // Internal Medicine Subspecialties
  { id: 'cardiology', name: 'Cardiology', popularity: 0.03, hospitalCount: 200 },
  { id: 'gastroenterology', name: 'Gastroenterology', popularity: 0.025, hospitalCount: 180 },
  { id: 'pulmonary-critical-care', name: 'Pulmonary and Critical Care Medicine', popularity: 0.02, hospitalCount: 160 },
  { id: 'nephrology', name: 'Nephrology', popularity: 0.015, hospitalCount: 140 },
  { id: 'hematology-oncology', name: 'Hematology and Oncology', popularity: 0.02, hospitalCount: 150 },
  { id: 'endocrinology', name: 'Endocrinology', popularity: 0.015, hospitalCount: 130 },
  { id: 'rheumatology', name: 'Rheumatology', popularity: 0.01, hospitalCount: 110 },
  { id: 'infectious-disease', name: 'Infectious Disease', popularity: 0.015, hospitalCount: 140 },
  { id: 'allergy-immunology', name: 'Allergy and Immunology', popularity: 0.01, hospitalCount: 100 },
  { id: 'geriatric-medicine', name: 'Geriatric Medicine', popularity: 0.01, hospitalCount: 90 },
  { id: 'sports-medicine-im', name: 'Sports Medicine (Internal Medicine)', popularity: 0.005, hospitalCount: 60 },
  { id: 'sleep-medicine-im', name: 'Sleep Medicine (Internal Medicine)', popularity: 0.005, hospitalCount: 70 },
  { id: 'critical-care-medicine', name: 'Critical Care Medicine', popularity: 0.015, hospitalCount: 150 },
  { id: 'interventional-cardiology', name: 'Interventional Cardiology', popularity: 0.015, hospitalCount: 120 },
  { id: 'cardiac-electrophysiology', name: 'Clinical Cardiac Electrophysiology', popularity: 0.01, hospitalCount: 100 },
  { id: 'heart-failure-transplant', name: 'Advanced Heart Failure and Transplant Cardiology', popularity: 0.005, hospitalCount: 50 },
  { id: 'transplant-hepatology', name: 'Transplant Hepatology', popularity: 0.005, hospitalCount: 40 },
  
  // Pediatrics Subspecialties
  { id: 'pediatric-cardiology', name: 'Pediatric Cardiology', popularity: 0.015, hospitalCount: 90 },
  { id: 'pediatric-critical-care', name: 'Pediatric Critical Care Medicine', popularity: 0.01, hospitalCount: 100 },
  { id: 'pediatric-emergency-medicine', name: 'Pediatric Emergency Medicine', popularity: 0.015, hospitalCount: 110 },
  { id: 'pediatric-endocrinology', name: 'Pediatric Endocrinology', popularity: 0.01, hospitalCount: 80 },
  { id: 'pediatric-gastroenterology', name: 'Pediatric Gastroenterology', popularity: 0.01, hospitalCount: 85 },
  { id: 'pediatric-hematology-oncology', name: 'Pediatric Hematology-Oncology', popularity: 0.01, hospitalCount: 90 },
  { id: 'pediatric-infectious-disease', name: 'Pediatric Infectious Diseases', popularity: 0.008, hospitalCount: 75 },
  { id: 'pediatric-nephrology', name: 'Pediatric Nephrology', popularity: 0.008, hospitalCount: 70 },
  { id: 'pediatric-pulmonology', name: 'Pediatric Pulmonology', popularity: 0.008, hospitalCount: 75 },
  { id: 'pediatric-rheumatology', name: 'Pediatric Rheumatology', popularity: 0.005, hospitalCount: 60 },
  { id: 'neonatology', name: 'Neonatology', popularity: 0.015, hospitalCount: 120 },
  { id: 'child-neurology', name: 'Child Neurology', popularity: 0.01, hospitalCount: 80 },
  { id: 'pediatric-surgery', name: 'Pediatric Surgery', popularity: 0.01, hospitalCount: 70 },
  { id: 'pediatric-anesthesiology', name: 'Pediatric Anesthesiology', popularity: 0.008, hospitalCount: 60 },
  
  // Surgery Subspecialties
  { id: 'trauma-surgery', name: 'Trauma Surgery', popularity: 0.015, hospitalCount: 130 },
  { id: 'surgical-critical-care', name: 'Surgical Critical Care', popularity: 0.01, hospitalCount: 100 },
  { id: 'surgical-oncology', name: 'Surgical Oncology', popularity: 0.01, hospitalCount: 90 },
  { id: 'cardiothoracic-surgery', name: 'Cardiothoracic Surgery', popularity: 0.015, hospitalCount: 110 },
  { id: 'vascular-surgery-independent', name: 'Vascular Surgery (Independent)', popularity: 0.01, hospitalCount: 100 },
  { id: 'surgical-transplantation', name: 'Transplant Surgery', popularity: 0.008, hospitalCount: 70 },
  
  // Obstetrics & Gynecology Subspecialties
  { id: 'maternal-fetal-medicine', name: 'Maternal-Fetal Medicine', popularity: 0.015, hospitalCount: 120 },
  { id: 'reproductive-endocrinology', name: 'Reproductive Endocrinology and Infertility', popularity: 0.01, hospitalCount: 90 },
  { id: 'gynecologic-oncology', name: 'Gynecologic Oncology', popularity: 0.01, hospitalCount: 85 },
  { id: 'female-pelvic-medicine', name: 'Female Pelvic Medicine and Reconstructive Surgery', popularity: 0.005, hospitalCount: 60 },
  
  // Psychiatry Subspecialties
  { id: 'child-adolescent-psychiatry', name: 'Child and Adolescent Psychiatry', popularity: 0.015, hospitalCount: 110 },
  { id: 'geriatric-psychiatry', name: 'Geriatric Psychiatry', popularity: 0.008, hospitalCount: 80 },
  { id: 'addiction-psychiatry', name: 'Addiction Psychiatry', popularity: 0.01, hospitalCount: 90 },
  { id: 'forensic-psychiatry', name: 'Forensic Psychiatry', popularity: 0.005, hospitalCount: 40 },
  { id: 'consultation-liaison-psychiatry', name: 'Consultation-Liaison Psychiatry', popularity: 0.008, hospitalCount: 70 },
  
  // Radiology Subspecialties
  { id: 'interventional-radiology', name: 'Interventional Radiology', popularity: 0.015, hospitalCount: 110 },
  { id: 'neuroradiology', name: 'Neuroradiology', popularity: 0.01, hospitalCount: 90 },
  { id: 'pediatric-radiology', name: 'Pediatric Radiology', popularity: 0.008, hospitalCount: 70 },
  { id: 'nuclear-radiology', name: 'Nuclear Radiology', popularity: 0.005, hospitalCount: 50 },
  
  // Pathology Subspecialties
  { id: 'blood-banking', name: 'Blood Banking/Transfusion Medicine', popularity: 0.005, hospitalCount: 60 },
  { id: 'forensic-pathology', name: 'Forensic Pathology', popularity: 0.005, hospitalCount: 50 },
  { id: 'dermatopathology', name: 'Dermatopathology', popularity: 0.008, hospitalCount: 70 },
  { id: 'neuropathology', name: 'Neuropathology', popularity: 0.005, hospitalCount: 50 },
  { id: 'pediatric-pathology', name: 'Pediatric Pathology', popularity: 0.005, hospitalCount: 55 },
  
  // Emergency Medicine Subspecialties
  { id: 'emergency-medical-services', name: 'Emergency Medical Services', popularity: 0.005, hospitalCount: 40 },
  { id: 'medical-toxicology', name: 'Medical Toxicology', popularity: 0.005, hospitalCount: 50 },
  { id: 'sports-medicine-em', name: 'Sports Medicine (Emergency Medicine)', popularity: 0.005, hospitalCount: 45 },
  { id: 'ultrasound-em', name: 'Emergency Ultrasound', popularity: 0.005, hospitalCount: 60 },
  
  // Other Specialties
  { id: 'pain-medicine', name: 'Pain Medicine', popularity: 0.015, hospitalCount: 120 },
  { id: 'hospice-palliative-medicine', name: 'Hospice and Palliative Medicine', popularity: 0.01, hospitalCount: 100 },
  { id: 'sleep-medicine', name: 'Sleep Medicine', popularity: 0.008, hospitalCount: 80 },
  { id: 'sports-medicine-pmr', name: 'Sports Medicine (PM&R)', popularity: 0.008, hospitalCount: 70 },
  { id: 'brain-injury-medicine', name: 'Brain Injury Medicine', popularity: 0.005, hospitalCount: 60 },
  { id: 'neuromuscular-medicine', name: 'Neuromuscular Medicine', popularity: 0.005, hospitalCount: 55 },
  { id: 'spine-medicine', name: 'Spinal Cord Injury Medicine', popularity: 0.005, hospitalCount: 50 },
  { id: 'pediatric-rehabilitation', name: 'Pediatric Rehabilitation Medicine', popularity: 0.005, hospitalCount: 55 },
];

// Correlation matrix: likelihood of two specialties being at the same hospital
// Based on typical academic medical center offerings
const correlationMatrix = {
  // High correlation (0.7-0.9): commonly found together
  'internal-medicine': { 'pediatrics': 0.85, 'family-medicine': 0.80, 'emergency-medicine': 0.75, 'surgery-general': 0.70 },
  'pediatrics': { 'internal-medicine': 0.85, 'family-medicine': 0.80, 'emergency-medicine': 0.75 },
  'family-medicine': { 'internal-medicine': 0.80, 'pediatrics': 0.80, 'emergency-medicine': 0.75 },
  'emergency-medicine': { 'internal-medicine': 0.75, 'pediatrics': 0.75, 'family-medicine': 0.75, 'surgery-general': 0.70 },
  'surgery-general': { 'internal-medicine': 0.70, 'obgyn': 0.75, 'emergency-medicine': 0.70, 'orthopedic-surgery': 0.65 },
  'obgyn': { 'surgery-general': 0.75, 'pediatrics': 0.70, 'emergency-medicine': 0.70 },
  'orthopedic-surgery': { 'surgery-general': 0.65, 'emergency-medicine': 0.65 },
  
  // Medium correlation (0.5-0.7): often found together but not always
  'anesthesiology': { 'surgery-general': 0.70, 'obgyn': 0.65, 'orthopedic-surgery': 0.60 },
  'psychiatry': { 'internal-medicine': 0.60, 'family-medicine': 0.60, 'neurology': 0.55 },
  'neurology': { 'internal-medicine': 0.65, 'psychiatry': 0.55, 'neurosurgery': 0.60 },
  'neurosurgery': { 'neurology': 0.60, 'surgery-general': 0.55 },
  'radiology-diagnostic': { 'internal-medicine': 0.55, 'emergency-medicine': 0.60, 'surgery-general': 0.50 },
  'pathology': { 'internal-medicine': 0.55, 'surgery-general': 0.50 },
  
  // Lower correlation (0.3-0.5): less commonly together
  'dermatology': { 'internal-medicine': 0.50, 'family-medicine': 0.45 },
  'ophthalmology': { 'internal-medicine': 0.45, 'emergency-medicine': 0.40 },
  'otolaryngology': { 'surgery-general': 0.50, 'emergency-medicine': 0.45 },
  'urology': { 'surgery-general': 0.50, 'obgyn': 0.45 },
  'plastic-surgery': { 'surgery-general': 0.55, 'orthopedic-surgery': 0.45 },
  'pmr': { 'neurology': 0.50, 'orthopedic-surgery': 0.45 },
  'radiation-oncology': { 'surgery-general': 0.50, 'internal-medicine': 0.45 },
};

// Total estimated number of hospitals with residency programs
const TOTAL_HOSPITALS = 800;

export function getCorrelation(specialty1, specialty2) {
  // Same specialty
  if (specialty1 === specialty2) return 1.0;
  
  // Check both directions
  if (correlationMatrix[specialty1]?.[specialty2]) {
    return correlationMatrix[specialty1][specialty2];
  }
  if (correlationMatrix[specialty2]?.[specialty1]) {
    return correlationMatrix[specialty2][specialty1];
  }
  
  // Default: assume some baseline correlation for any two specialties
  return 0.40;
}