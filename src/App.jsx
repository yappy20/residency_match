import React, { useState, useEffect } from 'react'
import { specialties } from './data/specialties'
import { calculateMatchProbability, getTopHospitals, calculateHospitalMatchProbability } from './utils/calculateMatch'
import { searchHospitals } from './data/hospitals'
import { UserProfile } from './components/UserProfile'
import { RankListBuilder } from './components/RankListBuilder'
import { MatchResults } from './components/MatchResults'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('simple') // 'simple' or 'nrmp'

  // Simple calculator state
  const [specialty1, setSpecialty1] = useState('')
  const [specialty2, setSpecialty2] = useState('')
  const [result, setResult] = useState(null)
  const [topHospitals, setTopHospitals] = useState([])
  const [hospitalQuery, setHospitalQuery] = useState('')
  const [hospitalSearchResults, setHospitalSearchResults] = useState([])
  const [selectedHospital, setSelectedHospital] = useState(null)
  const [hospitalResult, setHospitalResult] = useState(null)
  const [showHospitalSearch, setShowHospitalSearch] = useState(false)

  // NRMP Match state
  const [user1Profile, setUser1Profile] = useState(null)
  const [user1RankList, setUser1RankList] = useState([])
  const [user2Profile, setUser2Profile] = useState(null)
  const [user2RankList, setUser2RankList] = useState([])

  const handleCalculate = () => {
    if (!specialty1 || !specialty2) {
      alert('Please select both specialties')
      return
    }
    const calculation = calculateMatchProbability(specialty1, specialty2)
    setResult(calculation)

    const top = getTopHospitals(specialty1, specialty2)
    setTopHospitals(top)

    setSelectedHospital(null)
    setHospitalResult(null)
    setHospitalQuery('')
    setHospitalSearchResults([])
    setShowHospitalSearch(false)
  }

  useEffect(() => {
    if (hospitalQuery.trim() === '') {
      setHospitalSearchResults([])
      return
    }

    const results = searchHospitals(hospitalQuery)
    setHospitalSearchResults(results.slice(0, 5))
  }, [hospitalQuery])

  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital)
    setHospitalQuery(hospital.name)
    setHospitalSearchResults([])

    if (specialty1 && specialty2) {
      const hospitalCalc = calculateHospitalMatchProbability(specialty1, specialty2, hospital.id)
      setHospitalResult(hospitalCalc)
    }
  }

  const handleHospitalSearchSubmit = (e) => {
    e.preventDefault()
    if (!hospitalQuery.trim()) return

    const results = searchHospitals(hospitalQuery)
    if (results.length > 0) {
      handleHospitalSelect(results[0])
    } else {
      alert('Hospital not found. Please try a different search term.')
    }
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Residency Match Calculator</h1>
          <p className="subtitle">
            Using data from nearly a decade of post-Match results, estimate your probability of matching
            at the same hospital with your significant other. Our algorithm accounts for crucial variables
            in your residency application.
          </p>
          <p className="subtitle-note">
            US Residency is tough to procure, especially for International and Foreign Medical Graduates.
            Calculate your probability of successfully achieving a US medical residency together.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'simple' ? 'active' : ''}`}
            onClick={() => setActiveTab('simple')}
          >
            Simple Calculator
          </button>
          <button
            className={`tab-btn ${activeTab === 'nrmp' ? 'active' : ''}`}
            onClick={() => setActiveTab('nrmp')}
          >
            NRMP Couples Match Simulator
          </button>
        </div>

        {/* Simple Calculator Tab */}
        {activeTab === 'simple' && (
          <>
            <div className="form-container">
              <div className="input-group">
                <label htmlFor="specialty1">Your Specialty</label>
                <select
                  id="specialty1"
                  value={specialty1}
                  onChange={(e) => setSpecialty1(e.target.value)}
                  className="select-input"
                >
                  <option value="">Select a specialty...</option>
                  {specialties.map(specialty => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="specialty2">Significant Other's Specialty</label>
                <select
                  id="specialty2"
                  value={specialty2}
                  onChange={(e) => setSpecialty2(e.target.value)}
                  className="select-input"
                >
                  <option value="">Select a specialty...</option>
                  {specialties.map(specialty => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
              </div>

              <button onClick={handleCalculate} className="calculate-btn">
                Calculate Match Probability
              </button>
            </div>

            {result && result.details && (
              <div className="result-container">
                <div className="probability-display">
                  <div className="probability-value">{result.probability}%</div>
                  <div className="probability-label">Estimated Match Probability</div>
                </div>

                <div className="result-message">
                  {result.message}
                </div>

                <div className="details-container">
                  <h3>Details</h3>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Hospitals with {result.details.specialty1}:</span>
                      <span className="detail-value">{result.details.hospitalsWithSpecialty1}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Hospitals with {result.details.specialty2}:</span>
                      <span className="detail-value">{result.details.hospitalsWithSpecialty2}</span>
                    </div>
                    {result.details.hospitalsWithBoth !== undefined && (
                      <div className="detail-item">
                        <span className="detail-label">Hospitals with both specialties:</span>
                        <span className="detail-value">{result.details.hospitalsWithBoth}</span>
                      </div>
                    )}
                    <div className="detail-item">
                      <span className="detail-label">Specialty correlation:</span>
                      <span className="detail-value">{result.details.correlation}%</span>
                    </div>
                  </div>
                </div>

                {topHospitals.length > 0 && (
                  <div className="top-hospitals-container">
                    <h3>Top 10 Hospitals by Match Probability</h3>
                    <div className="hospitals-list">
                      {topHospitals.map((item, index) => (
                        <div key={item.hospital.id} className="hospital-item">
                          <div className="hospital-rank">#{index + 1}</div>
                          <div className="hospital-info">
                            <div className="hospital-name">{item.hospital.name}</div>
                            <div className="hospital-location">{item.hospital.location}</div>
                          </div>
                          <div className="hospital-probability">{item.probability}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="hospital-search-container">
                  <button
                    onClick={() => setShowHospitalSearch(!showHospitalSearch)}
                    className="toggle-search-btn"
                  >
                    {showHospitalSearch ? 'Hide' : 'Search'} Specific Hospital
                  </button>

                  {showHospitalSearch && (
                    <div className="hospital-search-form">
                      <form onSubmit={handleHospitalSearchSubmit}>
                        <div className="input-group">
                          <label htmlFor="hospital-search">Search Hospital</label>
                          <input
                            id="hospital-search"
                            type="text"
                            value={hospitalQuery}
                            onChange={(e) => setHospitalQuery(e.target.value)}
                            placeholder="Type hospital name (e.g., Mayo Clinic, Johns Hopkins...)"
                            className="select-input"
                            autoComplete="off"
                          />
                          {hospitalSearchResults.length > 0 && (
                            <div className="hospital-suggestions">
                              {hospitalSearchResults.map(hospital => (
                                <div
                                  key={hospital.id}
                                  className="hospital-suggestion-item"
                                  onClick={() => handleHospitalSelect(hospital)}
                                >
                                  <div className="hospital-suggestion-name">{hospital.name}</div>
                                  <div className="hospital-suggestion-location">{hospital.location}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <button type="submit" className="search-hospital-btn">
                          Calculate for Hospital
                        </button>
                      </form>
                    </div>
                  )}

                  {hospitalResult && (
                    <div className="hospital-result-container">
                      <div className="hospital-probability-display">
                        <div className="hospital-probability-value">{hospitalResult.probability}%</div>
                        <div className="hospital-probability-label">
                          Match Probability at {hospitalResult.hospital.name}
                        </div>
                      </div>
                      <div className="hospital-result-message">
                        {hospitalResult.message}
                      </div>
                      {hospitalResult.hospital && (
                        <div className="hospital-details">
                          <div><strong>Location:</strong> {hospitalResult.hospital.location}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="disclaimer">
                  <p>
                    <strong>Disclaimer:</strong> This calculator uses data from nearly a decade of post-Match results
                    and accounts for crucial variables in residency applications including board scores, medical school type,
                    experience, and hospital competitiveness. Results are estimates and actual match probability depends on many
                    additional factors. International and Foreign Medical Graduates should be aware that US residency matching
                    is particularly competitive. For official match results, refer to the NRMP Match system.
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {/* NRMP Couples Match Simulator Tab */}
        {activeTab === 'nrmp' && (
          <div className="nrmp-match-container">
            <div className="nrmp-intro">
              <h2>NRMP Couples Match Simulator</h2>
              <p>
                This simulator uses the actual NRMP couples match algorithm, accounting for crucial variables
                in your residency application. Enter your profiles (including medical school type for IMG/FMG candidates),
                create your rank lists, and see where you would match as a couple.
              </p>
              <p className="intro-note">
                International and Foreign Medical Graduates: Our algorithm accounts for the additional challenges
                you may face. Higher board scores and strong clinical experience can help offset these challenges.
              </p>
            </div>

            <div className="users-section">
              <div className="user-section">
                <UserProfile
                  userNumber={1}
                  onProfileChange={(profile) => setUser1Profile(profile)}
                />
                {user1Profile?.status && user1Profile?.yearOfGraduation &&
                  user1Profile?.step1Score && user1Profile?.specialty && (
                    <RankListBuilder
                      userNumber={1}
                      specialty={user1Profile.specialty}
                      onRankListChange={(list) => setUser1RankList(list)}
                    />
                  )}
              </div>

              <div className="user-section">
                <UserProfile
                  userNumber={2}
                  onProfileChange={(profile) => setUser2Profile(profile)}
                />
                {user2Profile?.status && user2Profile?.yearOfGraduation &&
                  user2Profile?.step1Score && user2Profile?.specialty && (
                    <RankListBuilder
                      userNumber={2}
                      specialty={user2Profile.specialty}
                      onRankListChange={(list) => setUser2RankList(list)}
                    />
                  )}
              </div>
            </div>

            {(user1Profile?.specialty && user1RankList.length > 0 &&
              user2Profile?.specialty && user2RankList.length > 0) && (
                <MatchResults
                  user1Profile={user1Profile}
                  user1RankList={user1RankList}
                  user2Profile={user2Profile}
                  user2RankList={user2RankList}
                />
              )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App