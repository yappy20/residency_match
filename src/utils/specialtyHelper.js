import { specialties } from '../data/specialties';

/**
 * Convert specialty name or ID to specialty ID
 * Handles various formats: "Internal Medicine", "internal-medicine", etc.
 */
export function getSpecialtyId(specialtyNameOrId) {
  if (!specialtyNameOrId) return null;
  
  const normalized = specialtyNameOrId.toLowerCase().trim();
  
  // Try exact ID match first
  const exactMatch = specialties.find(s => s.id === normalized);
  if (exactMatch) return exactMatch.id;
  
  // Try name match
  const nameMatch = specialties.find(s => 
    s.name.toLowerCase() === normalized ||
    s.name.toLowerCase().includes(normalized) ||
    normalized.includes(s.name.toLowerCase())
  );
  if (nameMatch) return nameMatch.id;
  
  // Try ID match with dashes replaced
  const normalizedId = normalized.replace(/\s+/g, '-');
  const idMatch = specialties.find(s => s.id === normalizedId);
  if (idMatch) return idMatch.id;
  
  return null;
}

/**
 * Check if hospital offers a specialty by name or ID
 */
export function hospitalHasSpecialty(hospital, specialtyNameOrId) {
  if (!hospital || !specialtyNameOrId) return false;
  
  const specialtyId = getSpecialtyId(specialtyNameOrId);
  if (!specialtyId) {
    // Fallback: try string matching
    const normalized = specialtyNameOrId.toLowerCase().trim();
    return hospital.specialties.some(s => 
      s === normalized || 
      s.includes(normalized) || 
      normalized.includes(s)
    );
  }
  
  return hospital.specialties.includes(specialtyId);
}