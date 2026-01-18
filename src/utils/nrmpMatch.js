/**
 * NRMP Couples Match Algorithm
 * 
 * The NRMP treats couples as a single unit and tries to match both partners
 * at their first-ranked pair of programs. If that fails, it moves to the next
 * ranked pair, and so on, until a successful pair is found or all options are exhausted.
 */

import { hospitalHasSpecialty } from './specialtyHelper';

/**
 * Calculate match probability for a single applicant at a hospital
 * Based on board scores, experience, and hospital competitiveness
 */
function calculateIndividualMatchProbability(profile, hospital, specialty) {
    if (!profile || !hospital || !specialty) return 0;

    // Base probability factors (varies by status/medical school type)
    const status = profile.status || 'us-md';
    let probability;

    // IMG/FMG typically have lower base match rates
    if (status === 'us-md') {
        probability = 0.55; // Highest base rate
    } else if (status === 'us-do') {
        probability = 0.50; // Slightly lower than US MD
    } else if (status === 'img') {
        probability = 0.40; // IMGs face more challenges
    } else if (status === 'fmg') {
        probability = 0.35; // FMGs face the most challenges
    } else {
        probability = 0.50;
    }

    // ECFMG certification is critical for IMGs/FMGs
    if (profile.ecfmgCertified === 'Yes' && (status === 'img' || status === 'fmg')) {
        probability += 0.10; // Significant boost for ECFMG certification
    }

    // Board scores impact (Step 1 and Step 2 are most important)
    const step1 = parseFloat(profile.step1Score) || 0;
    const step2 = parseFloat(profile.step2Score) || 0;
    const avgScore = (step1 + step2) / 2;

    // Score adjustment: 240+ is competitive, 250+ is very competitive
    // For IMGs/FMGs, higher scores are even more critical
    const scoreMultiplier = (status === 'img' || status === 'fmg') ? 1.2 : 1.0;

    if (avgScore >= 250) {
        probability += 0.25 * scoreMultiplier;
    } else if (avgScore >= 240) {
        probability += 0.15 * scoreMultiplier;
    } else if (avgScore >= 230) {
        probability += 0.05 * scoreMultiplier;
    } else if (avgScore < 220) {
        probability -= 0.20; // Low scores hurt more for IMGs/FMGs
    }

    // USCE (US Clinical Experience) is very valuable, especially for IMGs/FMGs
    const usceExperience = profile.usceExperience === 'Yes';
    const usceDuration = parseFloat(profile.usceDuration) || 0;

    if (usceExperience && usceDuration >= 6) {
        probability += 0.08; // USCE significantly helps
        if (status === 'img' || status === 'fmg') {
            probability += 0.05; // Even more valuable for IMGs/FMGs
        }
    }

    // Research publications
    const publications = parseFloat(profile.researchPublications) || 0;
    if (publications >= 5) probability += 0.08;
    else if (publications >= 2) probability += 0.05;
    else if (publications >= 1) probability += 0.02;

    // Away rotations can help significantly
    if (profile.awayRotations === 'Yes') {
        probability += 0.05;
    }

    // US Letters of Recommendation
    const usLetters = parseFloat(profile.usLettersOfRec) || 0;
    if (usLetters >= 3) probability += 0.05;
    else if (usLetters >= 2) probability += 0.03;

    // Hospital tier adjustment (larger programs = more competitive)
    const programSize = hospital.specialties.length;
    let hospitalTier = 'moderate';
    if (programSize >= 18) {
        hospitalTier = 'topTier';
        probability -= 0.10; // Top tier is more competitive
    } else if (programSize >= 12) {
        hospitalTier = 'highTier';
        probability -= 0.05;
    }

    // Clamp between reasonable bounds
    return Math.max(0.1, Math.min(0.95, probability));
}

/**
 * NRMP Couples Match Algorithm
 * 
 * @param {Object} user1Profile - First user's profile
 * @param {Array} user1RankList - First user's rank list (array of hospital objects)
 * @param {Object} user2Profile - Second user's profile
 * @param {Array} user2RankList - Second user's rank list (array of hospital objects)
 * @returns {Object} Match result with matched hospitals or null if no match
 */
export function performCouplesMatch(user1Profile, user1RankList, user2Profile, user2RankList) {
    if (!user1RankList || !user2RankList || user1RankList.length === 0 || user2RankList.length === 0) {
        return {
            matched: false,
            message: 'Both users must have rank lists',
            matchIndex: -1
        };
    }

    // Create all possible pairs from the rank lists
    // For each position in user1's list, try matching with each position in user2's list
    const pairs = [];

    // Generate all possible pairs (Cartesian product)
    for (let i = 0; i < user1RankList.length; i++) {
        for (let j = 0; j < user2RankList.length; j++) {
            const hospital1 = user1RankList[i];
            const hospital2 = user2RankList[j];

            // Check if both hospitals offer the respective specialties
            const hospital1HasSpecialty1 = hospitalHasSpecialty(hospital1, user1Profile.specialty);
            const hospital2HasSpecialty2 = hospitalHasSpecialty(hospital2, user2Profile.specialty);

            if (hospital1HasSpecialty1 && hospital2HasSpecialty2) {
                // Calculate individual match probabilities
                const prob1 = calculateIndividualMatchProbability(user1Profile, hospital1, user1Profile.specialty);
                const prob2 = calculateIndividualMatchProbability(user2Profile, hospital2, user2Profile.specialty);

                // Combined probability (both must match)
                const combinedProb = prob1 * prob2;

                pairs.push({
                    hospital1: hospital1,
                    hospital2: hospital2,
                    rank1: i + 1,
                    rank2: j + 1,
                    probability1: prob1,
                    probability2: prob2,
                    combinedProbability: combinedProb,
                    pairIndex: pairs.length
                });
            }
        }
    }

    if (pairs.length === 0) {
        return {
            matched: false,
            message: 'No valid hospital pairs found (hospitals must offer respective specialties)',
            matchIndex: -1
        };
    }

    // Sort pairs by combined probability (highest first)
    // In real NRMP, it's based on rank order, but we'll use probability as a proxy
    // for "matchability" at each pair
    pairs.sort((a, b) => {
        // Primary sort: by combined probability
        if (Math.abs(a.combinedProbability - b.combinedProbability) > 0.01) {
            return b.combinedProbability - a.combinedProbability;
        }
        // Secondary sort: prefer lower rank numbers (higher preference)
        const rankSumA = a.rank1 + a.rank2;
        const rankSumB = b.rank1 + b.rank2;
        return rankSumA - rankSumB;
    });

    // Try to match at the best pair
    // In real NRMP, this would be deterministic based on program preferences
    // Here we simulate based on probability
    const bestPair = pairs[0];

    // Simulate match: if combined probability is high enough, they match
    // This is a simplified model - real NRMP depends on program rank lists too
    const matchThreshold = 0.3; // 30% combined probability threshold
    const matched = bestPair.combinedProbability >= matchThreshold;

    if (matched) {
        return {
            matched: true,
            hospital1: bestPair.hospital1,
            hospital2: bestPair.hospital2,
            rank1: bestPair.rank1,
            rank2: bestPair.rank2,
            probability1: bestPair.probability1,
            probability2: bestPair.probability2,
            combinedProbability: bestPair.combinedProbability,
            matchIndex: 0,
            message: `Matched at rank ${bestPair.rank1} and rank ${bestPair.rank2} respectively`,
            allPairs: pairs.slice(0, 10) // Top 10 pairs for display
        };
    } else {
        return {
            matched: false,
            message: `No match found. Best pair probability: ${(bestPair.combinedProbability * 100).toFixed(1)}% (below ${matchThreshold * 100}% threshold)`,
            bestPair: bestPair,
            allPairs: pairs.slice(0, 10)
        };
    }
}

/**
 * Get match statistics for all pairs
 */
export function getMatchStatistics(user1Profile, user1RankList, user2Profile, user2RankList) {
    const matchResult = performCouplesMatch(user1Profile, user1RankList, user2Profile, user2RankList);

    return {
        totalPairs: user1RankList.length * user2RankList.length,
        validPairs: matchResult.allPairs?.length || 0,
        matchResult: matchResult
    };
}