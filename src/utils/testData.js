// Test data for validating accuracy based on 2025 NRMP data
// These are known combinations with expected results for testing

// Couple Match Calculator Tests (Specialty Combinations)
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

// Individual Match Calculator Tests (based on 2025 NRMP data)
// 2025 NRMP data: MD 89%, DO 78%, Overall 78.7%
// Note: Actual values may vary slightly due to hospital tier adjustments
export const individualMatchTestCases = [
    {
        name: "US MD Baseline (2025 NRMP Data)",
        status: "us-md",
        step1Score: 240,
        step2Score: 240,
        expectedRange: { min: 82, max: 95 },
        reason: "2025 NRMP: 89% of MD graduates matched (4,096/4,618). Range accounts for hospital tier adjustments."
    },
    {
        name: "US DO Baseline (2025 NRMP Data)",
        status: "us-do",
        step1Score: 240,
        step2Score: 240,
        expectedRange: { min: 73, max: 88 },
        reason: "2025 NRMP: 78% of DO graduates matched (1,351/1,728). Range accounts for hospital tier adjustments."
    },
    {
        name: "US MD with High Scores",
        status: "us-md",
        step1Score: 260,
        step2Score: 260,
        expectedRange: { min: 88, max: 95 },
        reason: "High scores boost MD baseline above 89%"
    },
    {
        name: "US DO with High Scores",
        status: "us-do",
        step1Score: 260,
        step2Score: 260,
        expectedRange: { min: 78, max: 92 },
        reason: "High scores boost DO baseline above 78%"
    }
];

// NRMP Couples Match Tests (based on 2025 Advance Data Tables)
// 2025 couples match: 93.2% match rate, 89.1% both matched
// Note: Combined probability is calculated as prob1 * prob2 (both must match)
export const couplesMatchTestCases = [
    {
        name: "MD/MD Couples (2025 NRMP Data)",
        user1Status: "us-md",
        user2Status: "us-md",
        expectedRange: { min: 65, max: 90 },
        reason: "2025 couples match: 93.2% match rate. MD (89%) * MD (89%) = ~79% combined, adjusted for hospital tiers."
    },
    {
        name: "MD/DO Couples (2025 NRMP Data)",
        user1Status: "us-md",
        user2Status: "us-do",
        expectedRange: { min: 60, max: 85 },
        reason: "MD (89%) * DO (78%) = ~69% combined, adjusted for hospital tiers and score factors."
    },
    {
        name: "DO/DO Couples (2025 NRMP Data)",
        user1Status: "us-do",
        user2Status: "us-do",
        expectedRange: { min: 55, max: 80 },
        reason: "DO (78%) * DO (78%) = ~61% combined, adjusted for hospital tiers and score factors."
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