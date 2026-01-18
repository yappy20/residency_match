# Testing Guide for Residency Match Calculator

## How to Test Accuracy

### 1. **Test with Known Specialty Combinations**

Test pairs that commonly appear together at academic medical centers:

**High Match Probability Expected:**
- Internal Medicine + Pediatrics → Should show ~88-93% (very common together)
- Surgery + OB/GYN → Should show ~87-92% (surgical specialties)
- Internal Medicine + Emergency Medicine → Should show ~90-93% (commonly together)

**Medium Match Probability Expected:**
- Internal Medicine + Dermatology → Should show ~75-85% (less common)
- Surgery + Plastic Surgery → Should show ~70-80% (specialized)

**Lower Match Probability Expected:**
- Dermatology + Ophthalmology → Should show ~60-75% (rarely together)

### 2. **Verify Hospital Counts**

When you calculate, check:
- "Hospitals with both specialties" should be ≤ min(hospitals with specialty 1, hospitals with specialty 2)
- Top 10 list should only include hospitals that actually offer both specialties

### 3. **Test Same Specialty Pairs**

- Internal Medicine + Internal Medicine → Should show all hospitals with IM programs
- Surgery + Surgery → Should reflect high probability since same programs

### 4. **Verify Hospital-Specific Calculations**

For each hospital in Top 10:
- Select a hospital from Top 10
- Verify it shows both specialties are offered
- Check if probability is reasonable (0-85% range)
- Compare: Hospital-specific % should generally be lower than overall probability (since it's for ONE specific hospital)

### 5. **Edge Cases to Test**

- **Rare combinations**: Dermatology + Neurosurgery (should show lower probability)
- **Common combinations**: Family Medicine + Internal Medicine (should show high probability)
- **Same specialty**: Any specialty with itself
- **Hospital search**: Try searching for "Mayo Clinic" - should find it
- **Hospital search**: Try searching for a hospital NOT in database - should show "not found"

### 6. **Validate Against Real Data**

Cross-reference with:
- NRMP Match Data (if available)
- Hospital websites to verify they offer both specialties
- FREIDA or other residency databases

### 7. **Consistency Checks**

- Same specialty pair should always give same result
- Top 10 should be sorted by probability (highest first)
- Hospital search should find hospitals that appear in Top 10 for that combination

### 8. **What to Look For**

**Red Flags (indicating potential inaccuracies):**
- Probability > 95% (too optimistic)
- Probability = 0% when hospitals clearly offer both (data issue)
- Top 10 shows hospitals that don't offer both specialties
- Hospital-specific probability higher than overall probability
- Same hospital appears multiple times in Top 10

**Good Signs (indicates accuracy):**
- Probabilities between 60-95% for common combinations
- More hospitals with both = higher probability
- Top hospitals (Mayo, Johns Hopkins) appear in Top 10 for competitive specialties
- Lower probabilities for rare specialty combinations
- Hospital-specific probabilities are reasonable (20-75%)

## Testing Checklist

- [ ] Test 5 common specialty combinations
- [ ] Test 2 rare specialty combinations  
- [ ] Test same specialty with itself
- [ ] Verify Top 10 hospitals all offer both specialties
- [ ] Test hospital search with 3 different hospitals
- [ ] Check that probabilities are in reasonable range (0-95%)
- [ ] Verify hospital-specific % ≤ overall %
- [ ] Test edge cases (rare combinations)

## How to Report Inaccuracies

If you find discrepancies:
1. Note the specialty combination
2. Note the calculated probability vs. expected
3. Check if hospital data is correct (does hospital actually offer both?)
4. Compare with NRMP data if available