// Specialty data with approximate statistics
// Based on NRMP Match data and hospital distribution
export const specialties = [
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