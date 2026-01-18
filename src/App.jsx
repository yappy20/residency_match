import React, { useState, useEffect } from 'react'
import { specialties } from './data/specialties'
import { calculateMatchProbability, getTopHospitals, calculateHospitalMatchProbability } from './utils/calculateMatch'
import { searchHospitals, getAllHospitals } from './data/hospitals'
import { calculateIndividualMatchProbability } from './utils/nrmpMatch'
import { UserProfile } from './components/UserProfile'
import { RankListBuilder } from './components/RankListBuilder'
import { RankListUploader } from './components/RankListUploader'
import { MatchResults } from './components/MatchResults'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('simple') // 'simple', 'nrmp', or 'individual'

  // Couple match calculator state
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

  // Individual Match state
  const [individualProfile, setIndividualProfile] = useState(null)
  const [individualResults, setIndividualResults] = useState(null)
  const [individualRankList, setIndividualRankList] = useState([])

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

  const handleFileUpload = (e, userNumber) => {
    const file = e.target.files[0]
    if (!file) return

    // Show instructions for now - file processing will be added
    alert(`File "${file.name}" selected. Please copy text from this file and paste it in the rank list text box below.`)

    // Reset the input
    e.target.value = ''
  }

  function calculateIndividualMatchResults(profile) {
    if (!profile?.specialty) return

    const specialty = specialties.find(s => s.id === profile.specialty)
    if (!specialty) return

    // Get all hospitals that offer this specialty
    const allHospitals = getAllHospitals()
    const hospitalsWithSpecialty = allHospitals.filter(h =>
      h.specialties.includes(profile.specialty)
    )

    // Calculate match probability for each hospital
    const hospitalProbabilities = hospitalsWithSpecialty.map(hospital => ({
      hospital,
      probability: (calculateIndividualMatchProbability(profile, hospital, profile.specialty) * 100).toFixed(1)
    }))

    // Sort by probability (highest first)
    hospitalProbabilities.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability))

    // Calculate overall average probability
    const avgProbability = hospitalProbabilities.length > 0
      ? (hospitalProbabilities.reduce((sum, item) => sum + parseFloat(item.probability), 0) / hospitalProbabilities.length).toFixed(1)
      : 0

    setIndividualResults({
      overallProbability: avgProbability,
      topHospitals: hospitalProbabilities.slice(0, 20), // Top 20 hospitals
      specialtyName: specialty.name,
      profile,
      rankListProbabilities: individualRankList && individualRankList.length > 0
        ? calculateRankListProbabilitiesForHospitals(profile, individualRankList, specialty.id)
        : null
    })
  }

  function calculateRankListProbabilitiesForHospitals(profile, rankList, specialtyId) {
    if (!profile || !rankList || rankList.length === 0) return null

    return rankList.map(hospital => ({
      hospital,
      probability: (calculateIndividualMatchProbability(profile, hospital, specialtyId || profile.specialty) * 100).toFixed(1)
    }))
  }

  function calculateRankListProbabilities(profile, rankList) {
    if (!profile?.specialty || !rankList || rankList.length === 0) return

    const specialty = specialties.find(s => s.id === profile.specialty || s.name === profile.specialty)
    if (!specialty) {
      // Try to find by name match
      const specialtyByName = specialties.find(s =>
        s.name.toLowerCase().includes(profile.specialty.toLowerCase()) ||
        profile.specialty.toLowerCase().includes(s.name.toLowerCase())
      )
      if (!specialtyByName) return
    }

    const specialtyId = specialty?.id || profile.specialty

    // Calculate match probability for each hospital in rank list
    const rankListProbabilities = rankList.map(hospital => ({
      hospital,
      probability: (calculateIndividualMatchProbability(profile, hospital, specialtyId) * 100).toFixed(1)
    }))

    // Update results with rank list probabilities
    setIndividualResults(prev => ({
      ...prev,
      rankListProbabilities
    }))
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
        {/* Mobile Dropdown */}
        <div className="tab-dropdown-mobile">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="tab-select"
          >
            <option value="simple">Couple Match Calculator</option>
            <option value="nrmp">NRMP Couples Match Simulator</option>
            <option value="individual">Individual Match Calculator</option>
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'simple' ? 'active' : ''}`}
            onClick={() => setActiveTab('simple')}
          >
            Couple Match Calculator
          </button>
          <button
            className={`tab-btn ${activeTab === 'nrmp' ? 'active' : ''}`}
            onClick={() => setActiveTab('nrmp')}
          >
            NRMP Couples Match Simulator
          </button>
          <button
            className={`tab-btn ${activeTab === 'individual' ? 'active' : ''}`}
            onClick={() => setActiveTab('individual')}
          >
            Individual Match Calculator
          </button>
        </div>

        {/* Couple Match Calculator Tab */}
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
                  onUploadClick={() => document.getElementById('file-input-user-1')?.click()}
                />
                <input
                  id="file-input-user-1"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.gif,.bmp,.webp,application/pdf,image/*"
                  onChange={(e) => handleFileUpload(e, 1)}
                  className="file-input-hidden"
                  style={{ display: 'none' }}
                />
                {user1Profile?.status && user1Profile?.yearOfGraduation &&
                  user1Profile?.step1Score && user1Profile?.specialty && (
                    <>
                      <RankListUploader
                        userLabel="User 1"
                        onRankListParsed={(hospitals) => {
                          if (hospitals && hospitals.length > 0) {
                            setUser1RankList(hospitals);
                          }
                        }}
                        hideUploadButton={true}
                      />
                      <RankListBuilder
                        userNumber={1}
                        specialty={user1Profile.specialty}
                        onRankListChange={(list) => setUser1RankList(list)}
                      />
                    </>
                  )}
              </div>

              <div className="user-section">
                <UserProfile
                  userNumber={2}
                  onProfileChange={(profile) => setUser2Profile(profile)}
                  onUploadClick={() => document.getElementById('file-input-user-2')?.click()}
                />
                <input
                  id="file-input-user-2"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.gif,.bmp,.webp,application/pdf,image/*"
                  onChange={(e) => handleFileUpload(e, 2)}
                  className="file-input-hidden"
                  style={{ display: 'none' }}
                />
                {user2Profile?.status && user2Profile?.yearOfGraduation &&
                  user2Profile?.step1Score && user2Profile?.specialty && (
                    <>
                      <RankListUploader
                        userLabel="User 2"
                        onRankListParsed={(hospitals) => {
                          if (hospitals && hospitals.length > 0) {
                            setUser2RankList(hospitals);
                          }
                        }}
                        hideUploadButton={true}
                      />
                      <RankListBuilder
                        userNumber={2}
                        specialty={user2Profile.specialty}
                        onRankListChange={(list) => setUser2RankList(list)}
                      />
                    </>
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

        {/* Individual Match Calculator Tab */}
        {activeTab === 'individual' && (
          <div className="nrmp-match-container">
            <div className="nrmp-intro">
              <h2>Individual Match Calculator</h2>
              <p>
                Calculate your individual match probability based on your profile, board scores, experience,
                and medical school type. See your match probability at different hospitals for your selected specialty.
              </p>
              <p className="intro-note">
                Based on 2025 NRMP data: MD graduates 89% match rate, DO graduates 78% match rate.
                Individual match probabilities are adjusted based on your profile factors.
              </p>
            </div>

            <div className="user-section">
              <UserProfile
                userNumber={1}
                onProfileChange={(profile) => {
                  setIndividualProfile(profile)
                  if (profile?.specialty && profile?.status && profile?.yearOfGraduation && profile?.step1Score) {
                    calculateIndividualMatchResults(profile)
                  } else {
                    setIndividualResults(null)
                  }
                }}
                onUploadClick={() => document.getElementById('file-input-individual')?.click()}
              />
              <input
                id="file-input-individual"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.gif,.bmp,.webp,application/pdf,image/*"
                onChange={(e) => handleFileUpload(e, 'individual')}
                className="file-input-hidden"
                style={{ display: 'none' }}
              />

              {individualProfile?.specialty && (
                <RankListUploader
                  userLabel="Your"
                  onRankListParsed={(hospitals) => {
                    setIndividualRankList(hospitals)
                    if (hospitals && hospitals.length > 0 && individualProfile) {
                      calculateRankListProbabilities(individualProfile, hospitals)
                    }
                  }}
                  hideUploadButton={true}
                />
              )}
            </div>

            {individualResults && (
              <div className="result-container">
                <div className="probability-display">
                  <div className="probability-value">{individualResults.overallProbability}%</div>
                  <div className="probability-label">Overall Match Probability</div>
                </div>

                <div className="result-message">
                  Based on your profile as a {individualResults.profile.status === 'us-md' ? 'US MD' :
                    individualResults.profile.status === 'us-do' ? 'US DO' :
                      individualResults.profile.status === 'img' ? 'IMG' : 'FMG'} graduate applying to {individualResults.specialtyName}.
                </div>

                {individualRankList && individualRankList.length > 0 && individualResults?.rankListProbabilities && (
                  <div className="top-hospitals-container">
                    <h3>Match Probabilities for Your Rank List</h3>
                    <div className="hospitals-list">
                      {individualResults.rankListProbabilities.map((item, index) => (
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

                {individualResults.topHospitals && individualResults.topHospitals.length > 0 && !individualRankList?.length && (
                  <div className="top-hospitals-container">
                    <h3>Top Hospitals by Match Probability</h3>
                    <div className="hospitals-list">
                      {individualResults.topHospitals.map((item, index) => (
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

                <div className="disclaimer">
                  <p>
                    <strong>Disclaimer:</strong> This calculator uses 2025 NRMP match data and accounts for crucial variables
                    in residency applications including board scores, medical school type, experience, and hospital competitiveness.
                    Results are estimates and actual match probability depends on many additional factors including program rank lists,
                    interview performance, and program-specific preferences.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App