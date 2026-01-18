import React from 'react';
import { performCouplesMatch } from '../utils/nrmpMatch';
import './MatchResults.css';

export function MatchResults({ user1Profile, user1RankList, user2Profile, user2RankList }) {
  if (!user1Profile || !user2Profile || !user1RankList || !user2RankList) {
    return null;
  }

  const matchResult = performCouplesMatch(user1Profile, user1RankList, user2Profile, user2RankList);

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
    </div>
  );
}