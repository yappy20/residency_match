/**
 * NRMP 2025 Match Data
 * 
 * This file contains match statistics extracted from:
 * - Impact-Data_2025.pdf
 * - 2025_Match_by_the_Numbers.pdf
 * - Main_Match_Results_by_State_Specialty_and_AppType_2025.pdf
 * - Main_Match_Program_Results_2021-2025.pdf
 * 
 * TODO: Extract and populate the following data from the PDFs:
 * 1. Match rates by specialty
 * 2. Match rates by applicant type (US MD, DO, IMG, FMG) per specialty
 * 3. Match rates by state
 * 4. Program-specific match statistics
 * 5. Historical trends (2021-2025)
 */

// Overall 2025 Match Statistics (from Medicine & Pediatric Specialties Match Report)
// Extracted from: 2025-Medicine-and-Pediatric-Specialties-MRS-Report.pdf
export const OVERALL_STATISTICS_2025 = {
  // Individual Match Rates
  usMd: {
    matched: 4096,
    total: 4618,
    rate: 0.886, // 88.6% (4,096/4,618)
    percentage: 88.6
  },
  usDo: {
    matched: 1351,
    total: 1728,
    rate: 0.782, // 78.2% (1,351/1,728)
    percentage: 78.2
  },
  img: {
    // U.S. IMG data from Impact-Data_2025.pdf: 3,053 matched out of 4,462 (68.4%)
    // Note: This is for U.S. citizen IMGs, not all IMGs
    matched: 3053,
    total: 4462,
    rate: 0.684, // 68.4% for U.S. IMGs
    percentage: 68.4
  },
  fmg: {
    // Non-U.S. IMG data from Impact-Data_2025.pdf: 6,512 matched out of 11,167 (58.3%)
    matched: 6512,
    total: 11167,
    rate: 0.583, // 58.3% for Non-U.S. IMGs
    percentage: 58.3
  },
  overall: {
    matched: 8526,
    total: 10840,
    rate: 0.787, // 78.7% (8,526/10,840)
    percentage: 78.7
  },
  
  // Couples Match Statistics (from Impact-Data_2025.pdf)
  // 2025 couples match: 1,259 total couples, 1,122 both matched (89.1%), 93.2% overall match rate
  couples: {
    totalCouples: 1259,
    bothMatched: 1122,
    oneMatched: 102,
    neitherMatched: 35,
    bothMatchedRate: 0.891, // 89.1% (1,122/1,259)
    overallMatchRate: 0.932, // 93.2%
    percentage: 93.2
  }
};

// Match Rates by Specialty (2025)
// TODO: Extract from Main_Match_Results_by_State_Specialty_and_AppType_2025.pdf
export const SPECIALTY_MATCH_RATES_2025 = {
  // Format: specialtyId: { usMd: rate, usDo: rate, img: rate, fmg: rate, overall: rate }
  // Example structure - replace with actual data from PDFs
  'internal-medicine': {
    usMd: 0.92,
    usDo: 0.85,
    img: 0.50,
    fmg: 0.40,
    overall: 0.82,
    positions: 0, // Total positions available
    applicants: 0 // Total applicants
  },
  // Add all specialties here...
};

// Match Rates by State (2025)
// TODO: Extract from Main_Match_Results_by_State_Specialty_and_AppType_2025.pdf
export const STATE_MATCH_RATES_2025 = {
  // Format: state: { usMd: rate, usDo: rate, img: rate, overall: rate }
  // Example structure - replace with actual data
  'CA': { usMd: 0.88, usDo: 0.75, img: 0.42, overall: 0.78 },
  'NY': { usMd: 0.87, usDo: 0.74, img: 0.45, overall: 0.79 },
  'TX': { usMd: 0.90, usDo: 0.80, img: 0.48, overall: 0.82 },
  // Add all states here...
};

// Program-Specific Match Results (2021-2025)
// TODO: Extract from Main_Match_Program_Results_2021-2025.pdf
export const PROGRAM_MATCH_DATA_2021_2025 = {
  // Format: programId: { 
  //   2021: { matched: count, total: count, rate: rate },
  //   2022: { matched: count, total: count, rate: rate },
  //   ...
  //   2025: { matched: count, total: count, rate: rate },
  //   average: { matched: count, total: count, rate: rate }
  // }
  // This would require mapping hospital/program IDs to actual program data
};

// Specialty Competitiveness Rankings (2025)
// Based on match rates and positions vs applicants
export const SPECIALTY_COMPETITIVENESS_2025 = {
  veryCompetitive: {
    // Match rate < 70%, high applicant:position ratio
    specialties: [], // TODO: Populate from PDFs
    avgMatchRate: 0.65,
    threshold: 0.70
  },
  competitive: {
    // Match rate 70-80%
    specialties: [], // TODO: Populate from PDFs
    avgMatchRate: 0.75,
    threshold: 0.80
  },
  moderate: {
    // Match rate 80-85%
    specialties: [], // TODO: Populate from PDFs
    avgMatchRate: 0.82,
    threshold: 0.85
  },
  lessCompetitive: {
    // Match rate > 85%
    specialties: [], // TODO: Populate from PDFs
    avgMatchRate: 0.90,
    threshold: 1.0
  }
};

// Historical Trends (2021-2025)
export const HISTORICAL_TRENDS = {
  usMd: {
    2021: 0.0, // TODO: Extract
    2022: 0.0, // TODO: Extract
    2023: 0.0, // TODO: Extract
    2024: 0.0, // TODO: Extract
    2025: 0.886
  },
  usDo: {
    2021: 0.0, // TODO: Extract from historical reports
    2022: 0.0, // TODO: Extract from historical reports
    2023: 0.0, // TODO: Extract from historical reports
    2024: 0.0, // TODO: Extract from historical reports
    2025: 0.782 // Confirmed from 2025-Medicine-and-Pediatric-Specialties-MRS-Report.pdf
  },
  couples: {
    2021: 0.0, // TODO: Extract from historical reports
    2022: 0.0, // TODO: Extract from historical reports
    2023: 0.0, // TODO: Extract from historical reports
    2024: 0.0, // TODO: Extract from historical reports
    2025: 0.932 // Confirmed from Impact-Data_2025.pdf
  },
  // U.S. IMG trends from Impact-Data_2025.pdf
  usImg: {
    2021: 0.0, // TODO: Extract
    2022: 0.0, // TODO: Extract
    2023: 0.0, // TODO: Extract
    2024: 0.0, // TODO: Extract
    2025: 0.684 // 68.4% (3,053/4,462) from Impact-Data_2025.pdf
  },
  // Non-U.S. IMG trends from Impact-Data_2025.pdf
  nonUsImg: {
    2021: 0.0, // TODO: Extract
    2022: 0.0, // TODO: Extract
    2023: 0.0, // TODO: Extract
    2024: 0.0, // TODO: Extract
    2025: 0.583 // 58.3% (6,512/11,167) from Impact-Data_2025.pdf
  }
};

/**
 * Get match rate for a specific specialty and applicant type
 * @param {string} specialtyId - Specialty ID
 * @param {string} applicantType - 'us-md', 'us-do', 'img', 'fmg'
 * @returns {number} Match rate (0-1)
 */
export function getSpecialtyMatchRate(specialtyId, applicantType) {
  const specialtyData = SPECIALTY_MATCH_RATES_2025[specialtyId];
  if (!specialtyData) {
    // Fallback to overall rates
    return OVERALL_STATISTICS_2025[applicantType]?.rate || OVERALL_STATISTICS_2025.overall.rate;
  }
  
  const typeMap = {
    'us-md': 'usMd',
    'us-do': 'usDo',
    'img': 'img',
    'fmg': 'fmg'
  };
  
  const mappedType = typeMap[applicantType] || 'overall';
  return specialtyData[mappedType] || specialtyData.overall || OVERALL_STATISTICS_2025.overall.rate;
}

/**
 * Get match rate for a specific state and applicant type
 * @param {string} state - State abbreviation (e.g., 'CA', 'NY')
 * @param {string} applicantType - 'us-md', 'us-do', 'img', 'fmg'
 * @returns {number} Match rate (0-1)
 */
export function getStateMatchRate(state, applicantType) {
  const stateData = STATE_MATCH_RATES_2025[state];
  if (!stateData) {
    // Fallback to overall rates
    return OVERALL_STATISTICS_2025[applicantType]?.rate || OVERALL_STATISTICS_2025.overall.rate;
  }
  
  const typeMap = {
    'us-md': 'usMd',
    'us-do': 'usDo',
    'img': 'img',
    'fmg': 'fmg'
  };
  
  const mappedType = typeMap[applicantType] || 'overall';
  return stateData[mappedType] || stateData.overall || OVERALL_STATISTICS_2025.overall.rate;
}

/**
 * Get competitiveness level for a specialty based on 2025 data
 * @param {string} specialtyId - Specialty ID
 * @returns {string} Competitiveness level
 */
export function getSpecialtyCompetitiveness2025(specialtyId) {
  const specialtyData = SPECIALTY_MATCH_RATES_2025[specialtyId];
  if (!specialtyData) {
    return 'moderate'; // Default
  }
  
  const overallRate = specialtyData.overall;
  if (overallRate < SPECIALTY_COMPETITIVENESS_2025.veryCompetitive.threshold) {
    return 'veryCompetitive';
  } else if (overallRate < SPECIALTY_COMPETITIVENESS_2025.competitive.threshold) {
    return 'competitive';
  } else if (overallRate < SPECIALTY_COMPETITIVENESS_2025.moderate.threshold) {
    return 'moderate';
  } else {
    return 'lessCompetitive';
  }
}
