import React, { useState, useEffect } from 'react';
import { specialties } from '../data/specialties';
import { medicalSchools } from '../data/medicalSchools';
import { usceInstitutions } from '../data/usceInstitutions';
import { getAllHospitals } from '../data/hospitals';
import './UserProfile.css';

export function UserProfile({ userNumber, onProfileChange, onUploadClick }) {
    const [profile, setProfile] = useState({
        status: '',
        yearOfGraduation: '',
        specialty: '',
        medicalSchool: '',
        degreeType: 'MD',
        step1Score: '',
        step2Score: '',
        step3Completed: 'No',
        ecfmgCertified: 'No',
        usceExperience: 'No',
        usceDuration: '',
        usceInstitution: '',
        researchPublications: '',
        awayRotations: 'No',
        participatedInMatch: 'No',
        usLettersOfRec: '',
        awards: '',
        preferredHospital: ''
    });

    const [medicalSchoolSuggestions, setMedicalSchoolSuggestions] = useState([]);
    const [showMedicalSchoolSuggestions, setShowMedicalSchoolSuggestions] = useState(false);
    const [selectedMedicalSchoolIndex, setSelectedMedicalSchoolIndex] = useState(-1);
    
    const [usceSuggestions, setUsceSuggestions] = useState([]);
    const [showUsceSuggestions, setShowUsceSuggestions] = useState(false);
    const [selectedUsceIndex, setSelectedUsceIndex] = useState(-1);
    
    const [specialtySuggestions, setSpecialtySuggestions] = useState([]);
    const [showSpecialtySuggestions, setShowSpecialtySuggestions] = useState(false);
    const [selectedSpecialtyIndex, setSelectedSpecialtyIndex] = useState(-1);
    
    const [hospitalSuggestions, setHospitalSuggestions] = useState([]);
    const [showHospitalSuggestions, setShowHospitalSuggestions] = useState(false);
    const [selectedHospitalIndex, setSelectedHospitalIndex] = useState(-1);
    
    const [isInternationalApplicant, setIsInternationalApplicant] = useState(false);
    
    const allHospitals = getAllHospitals();

    // Initialize toggle state based on current status
    useEffect(() => {
        if (profile.status === 'img' || profile.status === 'fmg') {
            setIsInternationalApplicant(true);
        } else if (profile.status === 'us-md' || profile.status === 'us-do') {
            setIsInternationalApplicant(false);
        }
    }, [profile.status]);

    const handleChange = (field, value) => {
        const updated = { ...profile, [field]: value };
        setProfile(updated);
        onProfileChange(updated);

        // Sync toggle with status changes
        if (field === 'status') {
            if (value === 'img' || value === 'fmg') {
                setIsInternationalApplicant(true);
            } else if (value === 'us-md' || value === 'us-do') {
                setIsInternationalApplicant(false);
            }
        }

        // Handle medical school autocomplete
        if (field === 'medicalSchool') {
            const input = value.toLowerCase().trim();
            if (input.length > 0) {
                const filtered = medicalSchools.filter(school =>
                    school.toLowerCase().includes(input)
                ).slice(0, 10); // Limit to 10 suggestions
                setMedicalSchoolSuggestions(filtered);
                setShowMedicalSchoolSuggestions(filtered.length > 0);
                setSelectedMedicalSchoolIndex(-1);
            } else {
                setMedicalSchoolSuggestions([]);
                setShowMedicalSchoolSuggestions(false);
                setSelectedMedicalSchoolIndex(-1);
            }
        }
        
        // Handle USCE institution autocomplete
        if (field === 'usceInstitution') {
            const input = value.toLowerCase().trim();
            if (input.length > 0) {
                const filtered = usceInstitutions.filter(institution =>
                    institution.toLowerCase().includes(input)
                ).slice(0, 10); // Limit to 10 suggestions
                setUsceSuggestions(filtered);
                setShowUsceSuggestions(filtered.length > 0);
                setSelectedUsceIndex(-1);
            } else {
                setUsceSuggestions([]);
                setShowUsceSuggestions(false);
                setSelectedUsceIndex(-1);
            }
        }
        
        // Handle specialty autocomplete
        if (field === 'specialty') {
            const input = value.toLowerCase().trim();
            if (input.length > 0) {
                const filtered = specialties.filter(s =>
                    s.name.toLowerCase().includes(input)
                ).slice(0, 10); // Limit to 10 suggestions
                setSpecialtySuggestions(filtered.map(s => s.name));
                setShowSpecialtySuggestions(filtered.length > 0);
                setSelectedSpecialtyIndex(-1);
            } else {
                setSpecialtySuggestions([]);
                setShowSpecialtySuggestions(false);
                setSelectedSpecialtyIndex(-1);
            }
        }
        
        // Handle preferred hospital autocomplete
        if (field === 'preferredHospital') {
            const input = value.toLowerCase().trim();
            if (input.length > 0) {
                const filtered = allHospitals.filter(hospital =>
                    hospital.name.toLowerCase().includes(input) ||
                    hospital.location.toLowerCase().includes(input)
                ).slice(0, 10); // Limit to 10 suggestions
                setHospitalSuggestions(filtered);
                setShowHospitalSuggestions(filtered.length > 0);
                setSelectedHospitalIndex(-1);
            } else {
                setHospitalSuggestions([]);
                setShowHospitalSuggestions(false);
                setSelectedHospitalIndex(-1);
            }
        }
    };

    const handleMedicalSchoolSelect = (school) => {
        handleChange('medicalSchool', school);
        setShowMedicalSchoolSuggestions(false);
        setSelectedMedicalSchoolIndex(-1);
    };

    const handleMedicalSchoolKeyDown = (e) => {
        if (!showMedicalSchoolSuggestions || medicalSchoolSuggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedMedicalSchoolIndex(prev =>
                prev < medicalSchoolSuggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedMedicalSchoolIndex(prev => prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedMedicalSchoolIndex >= 0) {
            e.preventDefault();
            handleMedicalSchoolSelect(medicalSchoolSuggestions[selectedMedicalSchoolIndex]);
        } else if (e.key === 'Escape') {
            setShowMedicalSchoolSuggestions(false);
            setSelectedMedicalSchoolIndex(-1);
        }
    };
    
    const handleUsceSelect = (institution) => {
        handleChange('usceInstitution', institution);
        setShowUsceSuggestions(false);
        setSelectedUsceIndex(-1);
    };

    const handleUsceKeyDown = (e) => {
        if (!showUsceSuggestions || usceSuggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedUsceIndex(prev =>
                prev < usceSuggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedUsceIndex(prev => prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedUsceIndex >= 0) {
            e.preventDefault();
            handleUsceSelect(usceSuggestions[selectedUsceIndex]);
        } else if (e.key === 'Escape') {
            setShowUsceSuggestions(false);
            setSelectedUsceIndex(-1);
        }
    };
    
    const handleSpecialtySelect = (specialty) => {
        handleChange('specialty', specialty);
        setShowSpecialtySuggestions(false);
        setSelectedSpecialtyIndex(-1);
    };

    const handleSpecialtyKeyDown = (e) => {
        if (!showSpecialtySuggestions || specialtySuggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedSpecialtyIndex(prev =>
                prev < specialtySuggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedSpecialtyIndex(prev => prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedSpecialtyIndex >= 0) {
            e.preventDefault();
            handleSpecialtySelect(specialtySuggestions[selectedSpecialtyIndex]);
        } else if (e.key === 'Escape') {
            setShowSpecialtySuggestions(false);
            setSelectedSpecialtyIndex(-1);
        }
    };
    
    const handleHospitalSelect = (hospital) => {
        handleChange('preferredHospital', hospital.name);
        setShowHospitalSuggestions(false);
        setSelectedHospitalIndex(-1);
    };

    const handleHospitalKeyDown = (e) => {
        if (!showHospitalSuggestions || hospitalSuggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedHospitalIndex(prev =>
                prev < hospitalSuggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedHospitalIndex(prev => prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedHospitalIndex >= 0) {
            e.preventDefault();
            handleHospitalSelect(hospitalSuggestions[selectedHospitalIndex]);
        } else if (e.key === 'Escape') {
            setShowHospitalSuggestions(false);
            setSelectedHospitalIndex(-1);
        }
    };

    const handleInternationalToggle = (checked) => {
        setIsInternationalApplicant(checked);
        // Auto-update status based on toggle
        if (checked) {
            // If toggling to international, set default to IMG if status is empty or US
            if (!profile.status || profile.status === 'us-md' || profile.status === 'us-do') {
                handleChange('status', 'img');
            }
        } else {
            // If toggling to domestic, set default to US MD if status is IMG/FMG
            if (profile.status === 'img' || profile.status === 'fmg') {
                handleChange('status', 'us-md');
            }
        }
    };

    return (
        <div className="user-profile-form">
            <div className="profile-header">
                <h3>User {userNumber} Profile</h3>
                <div className="header-controls">
                    <label className="toggle-label">
                        <span className="toggle-text">International Applicant</span>
                        <input
                            type="checkbox"
                            className="toggle-switch"
                            checked={isInternationalApplicant}
                            onChange={(e) => handleInternationalToggle(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                    </label>
                    {onUploadClick && (
                        <button
                            className="upload-plus-button"
                            onClick={onUploadClick}
                        >
                            +
                        </button>
                    )}
                </div>
            </div>

            <div className="form-two-columns">
                <div className="form-column">
                    <div className="form-field">
                        <label>STATUS <span className="required">*</span></label>
                        <select
                            value={profile.status}
                            onChange={(e) => handleChange('status', e.target.value)}
                            className="form-input"
                        >
                            <option value="">Select</option>
                            <option value="us-md">US MD</option>
                            <option value="us-do">US DO</option>
                            <option value="img">IMG (International Medical Graduate)</option>
                            <option value="fmg">FMG (Foreign Medical Graduate)</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <label>YEAR OF GRADUATION <span className="required">*</span></label>
                        <input
                            type="number"
                            value={profile.yearOfGraduation}
                            onChange={(e) => handleChange('yearOfGraduation', e.target.value)}
                            placeholder="e.g., 2024"
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label>USMLE STEP 1 SCORE <span className="required">*</span></label>
                        <input
                            type="number"
                            min="0"
                            max="300"
                            value={profile.step1Score}
                            onChange={(e) => handleChange('step1Score', e.target.value)}
                            placeholder="e.g., 240"
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label>USMLE STEP 3 COMPLETED?</label>
                        <select
                            value={profile.step3Completed}
                            onChange={(e) => handleChange('step3Completed', e.target.value)}
                            className="form-input"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>

                    {isInternationalApplicant && (
                        <>
                            <div className="form-field">
                                <label>ECFMG CERTIFIED? <span className="required">*</span></label>
                                <select
                                    value={profile.ecfmgCertified}
                                    onChange={(e) => handleChange('ecfmgCertified', e.target.value)}
                                    className="form-input"
                                >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>

                            <div className="form-field autocomplete-container">
                                <label>USCE INSTITUTION</label>
                                <input
                                    type="text"
                                    value={profile.usceInstitution}
                                    onChange={(e) => handleChange('usceInstitution', e.target.value)}
                                    onKeyDown={handleUsceKeyDown}
                                    onFocus={() => {
                                        if (profile.usceInstitution && usceSuggestions.length > 0) {
                                            setShowUsceSuggestions(true);
                                        }
                                    }}
                                    onBlur={() => {
                                        // Delay hiding suggestions to allow click events
                                        setTimeout(() => setShowUsceSuggestions(false), 200);
                                    }}
                                    placeholder="Start typing institution name..."
                                    className="form-input"
                                    autoComplete="off"
                                />
                                {showUsceSuggestions && usceSuggestions.length > 0 && (
                                    <ul className="autocomplete-suggestions">
                                        {usceSuggestions.map((institution, index) => (
                                            <li
                                                key={index}
                                                className={index === selectedUsceIndex ? 'selected' : ''}
                                                onClick={() => handleUsceSelect(institution)}
                                                onMouseEnter={() => setSelectedUsceIndex(index)}
                                            >
                                                {institution}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </>
                    )}

                    <div className="form-field">
                        <label>PARTICIPATED IN THE MATCH?</label>
                        <select
                            value={profile.participatedInMatch}
                            onChange={(e) => handleChange('participatedInMatch', e.target.value)}
                            className="form-input"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <label>NUMBER OF LETTERS OF RECOMMENDATION</label>
                        <input
                            type="number"
                            min="0"
                            value={profile.usLettersOfRec}
                            onChange={(e) => handleChange('usLettersOfRec', e.target.value)}
                            placeholder="0"
                            className="form-input"
                        />
                    </div>
                </div>

                <div className="form-column">
                    <div className="form-field autocomplete-container">
                        <label>SPECIALTY <span className="required">*</span></label>
                        <input
                            type="text"
                            value={profile.specialty}
                            onChange={(e) => handleChange('specialty', e.target.value)}
                            onKeyDown={handleSpecialtyKeyDown}
                            onFocus={() => {
                                if (profile.specialty && specialtySuggestions.length > 0) {
                                    setShowSpecialtySuggestions(true);
                                }
                            }}
                            onBlur={() => {
                                // Delay hiding suggestions to allow click events
                                setTimeout(() => setShowSpecialtySuggestions(false), 200);
                            }}
                            placeholder="Start typing specialty name..."
                            className="form-input"
                            autoComplete="off"
                        />
                        {showSpecialtySuggestions && specialtySuggestions.length > 0 && (
                            <ul className="autocomplete-suggestions">
                                {specialtySuggestions.map((specialty, index) => (
                                    <li
                                        key={index}
                                        className={index === selectedSpecialtyIndex ? 'selected' : ''}
                                        onClick={() => handleSpecialtySelect(specialty)}
                                        onMouseEnter={() => setSelectedSpecialtyIndex(index)}
                                    >
                                        {specialty}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="form-field autocomplete-container">
                        <label>MEDICAL SCHOOL</label>
                        <input
                            type="text"
                            value={profile.medicalSchool}
                            onChange={(e) => handleChange('medicalSchool', e.target.value)}
                            onKeyDown={handleMedicalSchoolKeyDown}
                            onFocus={() => {
                                if (profile.medicalSchool && medicalSchoolSuggestions.length > 0) {
                                    setShowMedicalSchoolSuggestions(true);
                                }
                            }}
                            onBlur={() => {
                                // Delay hiding suggestions to allow click events
                                setTimeout(() => setShowMedicalSchoolSuggestions(false), 200);
                            }}
                            placeholder="Start typing medical school name..."
                            className="form-input"
                            autoComplete="off"
                        />
                        {showMedicalSchoolSuggestions && medicalSchoolSuggestions.length > 0 && (
                            <ul className="autocomplete-suggestions">
                                {medicalSchoolSuggestions.map((school, index) => (
                                    <li
                                        key={index}
                                        className={index === selectedMedicalSchoolIndex ? 'selected' : ''}
                                        onClick={() => handleMedicalSchoolSelect(school)}
                                        onMouseEnter={() => setSelectedMedicalSchoolIndex(index)}
                                    >
                                        {school}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="form-field">
                        <label>USMLE STEP 2 CK SCORE</label>
                        <input
                            type="number"
                            min="0"
                            max="300"
                            value={profile.step2Score}
                            onChange={(e) => handleChange('step2Score', e.target.value)}
                            placeholder="e.g., 250"
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label>DEGREE TYPE</label>
                        <select
                            value={profile.degreeType}
                            onChange={(e) => handleChange('degreeType', e.target.value)}
                            className="form-input"
                        >
                            <option value="MD">MD</option>
                            <option value="DO">DO</option>
                            <option value="MBBS">MBBS</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {isInternationalApplicant && (
                        <>
                            <div className="form-field">
                                <label>USCE EXPERIENCE?</label>
                                <select
                                    value={profile.usceExperience}
                                    onChange={(e) => handleChange('usceExperience', e.target.value)}
                                    className="form-input"
                                >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>

                            <div className="form-field">
                                <label>USCE DURATION (MONTHS)</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={profile.usceDuration}
                                    onChange={(e) => handleChange('usceDuration', e.target.value)}
                                    placeholder="e.g., 12"
                                    className="form-input"
                                />
                            </div>
                        </>
                    )}

                    <div className="form-field">
                        <label>NUMBER OF RESEARCH PUBLICATIONS <span className="required">*</span></label>
                        <input
                            type="number"
                            min="0"
                            value={profile.researchPublications}
                            onChange={(e) => handleChange('researchPublications', e.target.value)}
                            placeholder="0"
                            className="form-input"
                        />
                    </div>

                    <div className="form-field">
                        <label>AWAY ROTATIONS COMPLETED?</label>
                        <select
                            value={profile.awayRotations}
                            onChange={(e) => handleChange('awayRotations', e.target.value)}
                            className="form-input"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    
                    <div className="form-field autocomplete-container">
                        <label>PREFERRED HOSPITAL (OPTIONAL)</label>
                        <input
                            type="text"
                            value={profile.preferredHospital}
                            onChange={(e) => {
                                handleChange('preferredHospital', e.target.value);
                                // Clear hospital object when text changes manually
                                if (!hospitalSuggestions.find(h => h.name === e.target.value)) {
                                    handleChange('preferredHospitalObj', null);
                                }
                            }}
                            onKeyDown={handleHospitalKeyDown}
                            onFocus={() => {
                                if (profile.preferredHospital && hospitalSuggestions.length > 0) {
                                    setShowHospitalSuggestions(true);
                                }
                            }}
                            onBlur={() => {
                                // Delay hiding suggestions to allow click events
                                setTimeout(() => setShowHospitalSuggestions(false), 200);
                            }}
                            placeholder="Start typing hospital name..."
                            className="form-input"
                            autoComplete="off"
                        />
                        {showHospitalSuggestions && hospitalSuggestions.length > 0 && (
                            <ul className="autocomplete-suggestions">
                                {hospitalSuggestions.map((hospital, index) => (
                                    <li
                                        key={hospital.id}
                                        className={index === selectedHospitalIndex ? 'selected' : ''}
                                        onClick={() => handleHospitalSelect(hospital)}
                                        onMouseEnter={() => setSelectedHospitalIndex(index)}
                                    >
                                        <div>{hospital.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>{hospital.location}</div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}