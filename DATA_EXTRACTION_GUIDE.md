# NRMP 2025 Data Extraction Guide

This guide explains how to extract data from the provided PDF files and populate the `src/data/nrmpData2025.js` file.

## PDF Files Provided

1. **Impact-Data_2025.pdf** - Impact data for 2025 match
2. **2025_Match_by_the_Numbers.pdf** - Overall match statistics
3. **Main_Match_Results_by_State_Specialty_and_AppType_2025.pdf** - Detailed breakdown by state, specialty, and applicant type
4. **Main_Match_Program_Results_2021-2025.pdf** - Program-specific results over 5 years

## Data to Extract

### 1. Overall Statistics (from 2025_Match_by_the_Numbers.pdf)

Update `OVERALL_STATISTICS_2025` in `src/data/nrmpData2025.js`:

- **US MD**: Matched count, Total count, Match rate
- **US DO**: Matched count, Total count, Match rate  
- **IMG**: Matched count, Total count, Match rate (if available)
- **FMG**: Matched count, Total count, Match rate (if available)
- **Overall**: Matched count, Total count, Match rate
- **Couples Match**: Total couples, Both matched, One matched, Neither matched, Rates

### 2. Specialty-Specific Match Rates (from Main_Match_Results_by_State_Specialty_and_AppType_2025.pdf)

For each specialty in `src/data/specialties.js`, extract:

```javascript
'specialty-id': {
  usMd: 0.92,      // US MD match rate for this specialty
  usDo: 0.85,      // US DO match rate for this specialty
  img: 0.50,       // IMG match rate for this specialty
  fmg: 0.40,       // FMG match rate for this specialty
  overall: 0.82,   // Overall match rate
  positions: 1000, // Total positions available
  applicants: 1200 // Total applicants
}
```

**Key Specialties to Prioritize:**
- Internal Medicine
- Family Medicine
- Pediatrics
- Emergency Medicine
- General Surgery
- Psychiatry
- Anesthesiology
- Orthopedic Surgery
- Dermatology
- Plastic Surgery
- Neurosurgery
- And all others listed in `specialties.js`

### 3. State-Specific Match Rates (from Main_Match_Results_by_State_Specialty_and_AppType_2025.pdf)

For each state, extract:

```javascript
'CA': {
  usMd: 0.88,    // US MD match rate in California
  usDo: 0.75,    // US DO match rate in California
  img: 0.42,     // IMG match rate in California
  overall: 0.78  // Overall match rate
}
```

**Priority States:**
- CA (California)
- NY (New York)
- TX (Texas)
- FL (Florida)
- PA (Pennsylvania)
- IL (Illinois)
- MA (Massachusetts)
- And other major states

### 4. Program-Specific Data (from Main_Match_Program_Results_2021-2025.pdf)

This data can be used to:
- Identify hospital-specific match rates
- Track trends over time (2021-2025)
- Adjust hospital tier classifications

**Note:** This requires mapping program names to hospital IDs in `src/data/hospitals.js`.

### 5. Historical Trends (from Main_Match_Program_Results_2021-2025.pdf)

Extract match rates for:
- US MD: 2021, 2022, 2023, 2024, 2025
- US DO: 2021, 2022, 2023, 2024, 2025
- Couples: 2021, 2022, 2023, 2024, 2025

## How to Extract Data

### Option 1: Manual Extraction
1. Open each PDF
2. Find the relevant tables
3. Copy data into `nrmpData2025.js` following the structure

### Option 2: Automated Extraction (Recommended)
1. Use a PDF extraction tool or Python script with PyPDF2/pdfplumber
2. Parse tables from PDFs
3. Convert to JavaScript object format
4. Paste into `nrmpData2025.js`

### Option 3: Use Online Tools
1. Convert PDF tables to CSV using online converters
2. Import CSV into spreadsheet
3. Format as JavaScript objects
4. Copy into `nrmpData2025.js`

## Data Format Examples

### Specialty Data Example
```javascript
'internal-medicine': {
  usMd: 0.92,
  usDo: 0.85,
  img: 0.50,
  fmg: 0.40,
  overall: 0.82,
  positions: 8500,
  applicants: 10300
}
```

### State Data Example
```javascript
'NY': {
  usMd: 0.87,
  usDo: 0.74,
  img: 0.45,
  fmg: 0.38,
  overall: 0.79
}
```

## Validation

After populating the data:

1. **Check for missing specialties**: All specialties in `specialties.js` should have entries in `SPECIALTY_MATCH_RATES_2025`
2. **Verify rates are between 0 and 1**: All match rates should be decimal values (e.g., 0.89 for 89%)
3. **Test the application**: Run the app and verify calculations use the new data
4. **Check console for errors**: Look for any undefined data references

## Current Status

✅ Data structure created
✅ Calculation functions updated to use new data
✅ Fallback to overall rates when specialty data unavailable
⏳ Waiting for PDF data extraction

## Next Steps

1. Extract data from PDFs using one of the methods above
2. Populate `SPECIALTY_MATCH_RATES_2025` with specialty-specific rates
3. Populate `STATE_MATCH_RATES_2025` with state-specific rates (optional but recommended)
4. Populate `HISTORICAL_TRENDS` with 2021-2025 data (optional)
5. Test the application to ensure calculations are accurate

## Notes

- The application will continue to work with fallback rates if specialty data isn't populated yet
- Specialty-specific rates will automatically be used once populated
- State-specific rates are optional but will improve accuracy for location-based calculations
- Historical trends are optional but useful for showing trends over time
