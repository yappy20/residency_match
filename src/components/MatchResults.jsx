import React from 'react';
import { performCouplesMatch, calculateIndividualMatchProbability } from '../utils/nrmpMatch';
import { getAllHospitals } from '../data/hospitals';
import { hospitalHasSpecialty } from '../utils/specialtyHelper';
import './MatchResults.css';

export function MatchResults({ user1Profile, user1RankList, user2Profile, user2RankList }) {
  if (!user1Profile || !user2Profile || !user1RankList || !user2RankList) {
    return null;
  }

  const matchResult = performCouplesMatch(user1Profile, user1RankList, user2Profile, user2RankList);
  
  // Calculate preferred hospital probability if both users have preferred hospitals
  let preferredHospitalResult = null;
  if (user1Profile?.preferredHospital && user2Profile?.preferredHospital) {
    const allHospitals = getAllHospitals();
    const user1PreferredHospital = allHospitals.find(h => 
      h.name.toLowerCase() === user1Profile.preferredHospital.toLowerCase()
    );
    const user2PreferredHospital = allHospitals.find(h => 
      h.name.toLowerCase() === user2Profile.preferredHospital.toLowerCase()
    );
    
    // Check if both preferred hospitals are the same or different
    if (user1PreferredHospital && user2PreferredHospital) {
      const user1HasSpecialty = hospitalHasSpecialty(user1PreferredHospital, user1Profile.specialty);
      const user2HasSpecialty = hospitalHasSpecialty(user2PreferredHospital, user2Profile.specialty);
      
      if (user1HasSpecialty && user2HasSpecialty) {
        // Calculate individual probabilities
        const prob1 = calculateIndividualMatchProbability(user1Profile, user1PreferredHospital, user1Profile.specialty);
        const prob2 = calculateIndividualMatchProbability(user2Profile, user2PreferredHospital, user2Profile.specialty);
        
        // Combined probability (both must match)
        const combinedProb = prob1 * prob2;
        
        preferredHospitalResult = {
          user1Hospital: user1PreferredHospital,
          user2Hospital: user2PreferredHospital,
          sameHospital: user1PreferredHospital.id === user2PreferredHospital.id,
          probability1: prob1,
          probability2: prob2,
          combinedProbability: combinedProb
        };
      } else {
        preferredHospitalResult = {
          message: 'One or both preferred hospitals do not offer the selected specialties'
        };
      }
    }
  } else if (user1Profile?.preferredHospital || user2Profile?.preferredHospital) {
    // Only one user has preferred hospital - calculate individual probability
    const allHospitals = getAllHospitals();
    const profileWithHospital = user1Profile?.preferredHospital ? user1Profile : user2Profile;
    const preferredHospital = allHospitals.find(h => 
      h.name.toLowerCase() === profileWithHospital.preferredHospital.toLowerCase()
    );
    
    if (preferredHospital) {
      const hasSpecialty = hospitalHasSpecialty(preferredHospital, profileWithHospital.specialty);
      if (hasSpecialty) {
        const probability = calculateIndividualMatchProbability(profileWithHospital, preferredHospital, profileWithHospital.specialty);
        preferredHospitalResult = {
          singleUser: true,
          hospital: preferredHospital,
          probability,
          userNumber: user1Profile?.preferredHospital ? 1 : 2
        };
      } else {
        preferredHospitalResult = {
          message: `Preferred hospital does not offer ${profileWithHospital.specialty}`
        };
      }
    }
  }

  return (
    <div className="match-results">
      <h2>NRMP Couples Match Results</h2>
      
      <div className={`match-status ${matchResult.matched ? 'matched' : 'not-matched'}`}>
        {matchResult.matched ? (
          <div className="matched-display">
            <div className="match-icon">✓</div>
            <div className="match-title">MATCHED!</div>
            <div className="match-message">{matchResult.message}</div>
          </div>
        ) : (
          <div className="not-matched-display">
            <div className="match-icon">✗</div>
            <div className="match-title">NO MATCH</div>
            <div className="match-message">{matchResult.message}</div>
          </div>
        )}
      </div>

      {matchResult.matched && (
        <div className="match-details">
          <div className="match-detail-card">
            <h3>User 1 Match</h3>
            <div className="hospital-match">
              <div className="hospital-name-large">{matchResult.hospital1.name}</div>
              <div className="hospital-location-large">{matchResult.hospital1.location}</div>
              <div className="match-stats">
                <div className="stat-item">
                  <span className="stat-label">Rank in Your List:</span>
                  <span className="stat-value">#{matchResult.rank1}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Match Probability:</span>
                  <span className="stat-value">{(matchResult.probability1 * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="match-detail-card">
            <h3>User 2 Match</h3>
            <div className="hospital-match">
              <div className="hospital-name-large">{matchResult.hospital2.name}</div>
              <div className="hospital-location-large">{matchResult.hospital2.location}</div>
              <div className="match-stats">
                <div className="stat-item">
                  <span className="stat-label">Rank in Your List:</span>
                  <span className="stat-value">#{matchResult.rank2}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Match Probability:</span>
                  <span className="stat-value">{(matchResult.probability2 * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="combined-probability">
            <div className="prob-label">Combined Match Probability</div>
            <div className="prob-value">{(matchResult.combinedProbability * 100).toFixed(1)}%</div>
          </div>
        </div>
      )}

      {matchResult.allPairs && matchResult.allPairs.length > 0 && (
        <div className="top-pairs-section">
          <h3>Top Ranked Pairs</h3>
          <div className="pairs-list">
            {matchResult.allPairs.map((pair, index) => (
              <div key={index} className={`pair-item ${index === 0 && matchResult.matched ? 'matched-pair' : ''}`}>
                <div className="pair-rank">#{index + 1}</div>
                <div className="pair-hospitals">
                  <div className="pair-hospital">
                    <div className="pair-hospital-name">{pair.hospital1.name}</div>
                    <div className="pair-hospital-location">{pair.hospital1.location}</div>
                    <div className="pair-rank-info">Rank {pair.rank1}</div>
                  </div>
                  <div className="pair-connector">+</div>
                  <div className="pair-hospital">
                    <div className="pair-hospital-name">{pair.hospital2.name}</div>
                    <div className="pair-hospital-location">{pair.hospital2.location}</div>
                    <div className="pair-rank-info">Rank {pair.rank2}</div>
                  </div>
                </div>
                <div className="pair-probability">
                  {(pair.combinedProbability * 100).toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {matchResult.bestPair && !matchResult.matched && (
        <div className="best-pair-section">
          <h3>Best Available Pair</h3>
          <div className="best-pair-details">
            <div className="best-pair-hospital">
              <div className="hospital-name-large">{matchResult.bestPair.hospital1.name}</div>
              <div className="hospital-location-large">{matchResult.bestPair.hospital1.location}</div>
            </div>
            <div className="best-pair-connector">+</div>
            <div className="best-pair-hospital">
              <div className="hospital-name-large">{matchResult.bestPair.hospital2.name}</div>
              <div className="hospital-location-large">{matchResult.bestPair.hospital2.location}</div>
            </div>
          </div>
          <div className="best-pair-probability">
            Probability: {(matchResult.bestPair.combinedProbability * 100).toFixed(1)}%
          </div>
        </div>
      )}

      {preferredHospitalResult && !preferredHospitalResult.message && (
        <div className="preferred-hospital-section">
          <h3>Match Probability at Preferred Hospital(s)</h3>
          {preferredHospitalResult.sameHospital ? (
            <div className="preferred-hospital-same">
              <div className="preferred-hospital-name">{preferredHospitalResult.user1Hospital.name}</div>
              <div className="preferred-hospital-location">{preferredHospitalResult.user1Hospital.location}</div>
              <div className="preferred-hospital-note">Both users prefer the same hospital</div>
              <div className="preferred-hospital-probabilities">
                <div className="prob-item">
                  <span className="prob-label">User 1 Probability:</span>
                  <span className="prob-value">{(preferredHospitalResult.probability1 * 100).toFixed(1)}%</span>
                </div>
                <div className="prob-item">
                  <span className="prob-label">User 2 Probability:</span>
                  <span className="prob-value">{(preferredHospitalResult.probability2 * 100).toFixed(1)}%</span>
                </div>
                <div className="prob-item combined">
                  <span className="prob-label">Combined Probability:</span>
                  <span className="prob-value">{(preferredHospitalResult.combinedProbability * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          ) : preferredHospitalResult.singleUser ? (
            <div className="preferred-hospital-single">
              <div className="preferred-hospital-name">{preferredHospitalResult.hospital.name}</div>
              <div className="preferred-hospital-location">{preferredHospitalResult.hospital.location}</div>
              <div className="preferred-hospital-note">User {preferredHospitalResult.userNumber} preferred hospital</div>
              <div className="preferred-hospital-probability">
                <span className="prob-label">Match Probability:</span>
                <span className="prob-value">{(preferredHospitalResult.probability * 100).toFixed(1)}%</span>
              </div>
            </div>
          ) : (
            <div className="preferred-hospital-different">
              <div className="preferred-hospital-pair">
                <div className="preferred-hospital-item">
                  <div className="hospital-name-medium">User 1: {preferredHospitalResult.user1Hospital.name}</div>
                  <div className="hospital-location-medium">{preferredHospitalResult.user1Hospital.location}</div>
                  <div className="hospital-prob">{(preferredHospitalResult.probability1 * 100).toFixed(1)}%</div>
                </div>
                <div className="preferred-hospital-item">
                  <div className="hospital-name-medium">User 2: {preferredHospitalResult.user2Hospital.name}</div>
                  <div className="hospital-location-medium">{preferredHospitalResult.user2Hospital.location}</div>
                  <div className="hospital-prob">{(preferredHospitalResult.probability2 * 100).toFixed(1)}%</div>
                </div>
              </div>
              <div className="preferred-hospital-combined">
                <span className="prob-label">Combined Probability:</span>
                <span className="prob-value">{(preferredHospitalResult.combinedProbability * 100).toFixed(1)}%</span>
              </div>
            </div>
          )}
        </div>
      )}

      {preferredHospitalResult?.message && (
        <div className="preferred-hospital-message">
          <h3>Preferred Hospital Note</h3>
          <p>{preferredHospitalResult.message}</p>
        </div>
      )}
    </div>
  );
}