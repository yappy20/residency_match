import React, { useState, useEffect } from 'react';
import { getAllHospitals, searchHospitals } from '../data/hospitals';
import { hospitalHasSpecialty } from '../utils/specialtyHelper';
import './RankListBuilder.css';

export function RankListBuilder({ userNumber, specialty, onRankListChange }) {
    const [rankList, setRankList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const hospitals = getAllHospitals();
    const availableHospitals = specialty
        ? hospitals.filter(h => hospitalHasSpecialty(h, specialty))
        : [];

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }
        const results = searchHospitals(searchQuery).filter(h =>
            !specialty || hospitalHasSpecialty(h, specialty)
        );
        setSearchResults(results.slice(0, 5));
    }, [searchQuery, specialty]);

    const handleAddHospital = (hospital) => {
        if (!rankList.find(h => h.id === hospital.id)) {
            const updated = [...rankList, hospital];
            setRankList(updated);
            onRankListChange(updated);
            setSearchQuery('');
            setSearchResults([]);
        }
    };

    const handleRemoveHospital = (index) => {
        const updated = rankList.filter((_, i) => i !== index);
        setRankList(updated);
        onRankListChange(updated);
    };

    const handleMoveUp = (index) => {
        if (index === 0) return;
        const updated = [...rankList];
        [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
        setRankList(updated);
        onRankListChange(updated);
    };

    const handleMoveDown = (index) => {
        if (index === rankList.length - 1) return;
        const updated = [...rankList];
        [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
        setRankList(updated);
        onRankListChange(updated);
    };

    const handleAddFromAvailable = (hospital) => {
        handleAddHospital(hospital);
    };

    return (
        <div className="rank-list-builder">
            <h3>User {userNumber} Rank List {specialty && `(${specialty})`}</h3>

            {specialty && (
                <>
                    <div className="search-section">
                        <button
                            onClick={() => setShowSearch(!showSearch)}
                            className="toggle-search-btn"
                        >
                            {showSearch ? 'Hide' : 'Show'} Hospital Search
                        </button>

                        {showSearch && (
                            <div className="search-input-group">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search hospitals..."
                                    className="select-input"
                                />
                                {searchResults.length > 0 && (
                                    <div className="search-results">
                                        {searchResults.map(hospital => (
                                            <div
                                                key={hospital.id}
                                                className="search-result-item"
                                                onClick={() => handleAddHospital(hospital)}
                                            >
                                                <div className="result-name">{hospital.name}</div>
                                                <div className="result-location">{hospital.location}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="available-hospitals-section">
                        <h4>Available Hospitals ({availableHospitals.length})</h4>
                        <div className="available-hospitals-list">
                            {availableHospitals.slice(0, 10).map(hospital => (
                                <div
                                    key={hospital.id}
                                    className={`available-hospital-item ${rankList.find(h => h.id === hospital.id) ? 'added' : ''}`}
                                    onClick={() => !rankList.find(h => h.id === hospital.id) && handleAddFromAvailable(hospital)}
                                >
                                    <div className="hospital-name">{hospital.name}</div>
                                    <div className="hospital-location">{hospital.location}</div>
                                    {rankList.find(h => h.id === hospital.id) && (
                                        <span className="added-badge">✓ Added</span>
                                    )}
                                </div>
                            ))}
                            {availableHospitals.length > 10 && (
                                <div className="more-hospitals">
                                    + {availableHospitals.length - 10} more hospitals available
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="rank-list-section">
                        <h4>Your Rank List ({rankList.length} hospitals)</h4>
                        {rankList.length === 0 ? (
                            <div className="empty-rank-list">
                                No hospitals in rank list yet. Add hospitals from above.
                            </div>
                        ) : (
                            <div className="rank-list">
                                {rankList.map((hospital, index) => (
                                    <div key={hospital.id} className="rank-list-item">
                                        <div className="rank-number">#{index + 1}</div>
                                        <div className="rank-hospital-info">
                                            <div className="rank-hospital-name">{hospital.name}</div>
                                            <div className="rank-hospital-location">{hospital.location}</div>
                                        </div>
                                        <div className="rank-actions">
                                            <button
                                                onClick={() => handleMoveUp(index)}
                                                disabled={index === 0}
                                                className="move-btn"
                                                title="Move up"
                                            >
                                                ↑
                                            </button>
                                            <button
                                                onClick={() => handleMoveDown(index)}
                                                disabled={index === rankList.length - 1}
                                                className="move-btn"
                                                title="Move down"
                                            >
                                                ↓
                                            </button>
                                            <button
                                                onClick={() => handleRemoveHospital(index)}
                                                className="remove-btn"
                                                title="Remove"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}