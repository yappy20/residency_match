// Test data for validating accuracy
// These are known combinations with expected results for testing

export const testCases = [
  {
    name: "Very Common Combination",
    specialty1: "internal-medicine",
    specialty2: "pediatrics",
    expectedRange: { min: 85, max: 95 },
    reason: "IM and Peds are almost always together at academic centers"
  },
  {
    name: "Common Surgical Combination",
    specialty1: "surgery-general",
    specialty2: "obgyn",
    expectedRange: { min: 85, max: 93 },
    reason: "Surgical specialties commonly co-exist"
  },
  {
    name: "Rare Combination",
    specialty1: "dermatology",
    specialty2: "neurosurgery",
    expectedRange: { min: 55, max: 75 },
    reason: "These specialties rarely share the same hospital"
  },
  {
    name: "Same Specialty",
    specialty1: "internal-medicine",
    specialty2: "internal-medicine",
    expectedRange: { min: 50, max: 95 },
    reason: "Same specialty means same programs"
  },
  {
    name: "Emergency Medicine Combination",
    specialty1: "emergency-medicine",
    specialty2: "internal-medicine",
    expectedRange: { min: 88, max: 95 },
    reason: "ED and IM are standard in academic hospitals"
  }
];

export const hospitalValidationTests = [
  {
    hospitalName: "Mayo Clinic",
    specialties: ["internal-medicine", "surgery-general", "pediatrics"],
    shouldHave: true
  },
  {
    hospitalName: "Johns Hopkins",
    specialties: ["internal-medicine", "pediatrics"],
    shouldHave: true
  }
];

/**
 * Validate calculation result against expected range
 */
export function validateResult(actualProbability, expectedRange) {
  const prob = parseFloat(actualProbability);
  return {
    valid: prob >= expectedRange.min && prob <= expectedRange.max,
    actual: prob,
    expected: expectedRange,
    message: prob >= expectedRange.min && prob <= expectedRange.max 
      ? "✓ Within expected range"
      : `✗ Outside expected range (${expectedRange.min}-${expectedRange.max}%)`
  };
}