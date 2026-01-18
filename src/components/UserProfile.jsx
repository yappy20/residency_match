import React, { useState } from 'react';
import { specialties } from '../data/specialties';
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
        awards: ''
    });

    const handleChange = (field, value) => {
        const updated = { ...profile, [field]: value };
        setProfile(updated);
        onProfileChange(updated);
    };

    return (
        <div className="user-profile-form">
            <div className="profile-header">
                <h3>User {userNumber} Profile</h3>
                {onUploadClick && (
                    <button
                        className="upload-plus-button"
                        onClick={onUploadClick}
                    >
                        +
                    </button>
                )}
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

                    <div className="form-field">
                        <label>ECFMG CERTIFIED?</label>
                        <select
                            value={profile.ecfmgCertified}
                            onChange={(e) => handleChange('ecfmgCertified', e.target.value)}
                            className="form-input"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <label>USCE INSTITUTION</label>
                        <input
                            type="text"
                            value={profile.usceInstitution}
                            onChange={(e) => handleChange('usceInstitution', e.target.value)}
                            placeholder="Institution name"
                            className="form-input"
                        />
                    </div>

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
                        <label>NUMBER OF US LETTERS OF RECOMMENDATION</label>
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
                    <div className="form-field">
                        <label>SPECIALTY <span className="required">*</span></label>
                        <input
                            type="text"
                            value={profile.specialty}
                            onChange={(e) => handleChange('specialty', e.target.value)}
                            placeholder="Internal Medicine, etc."
                            className="form-input"
                            list={`specialty-list-${userNumber}`}
                        />
                        <datalist id={`specialty-list-${userNumber}`}>
                            {specialties.map(s => (
                                <option key={s.id} value={s.name} />
                            ))}
                        </datalist>
                    </div>

                    <div className="form-field">
                        <label>MEDICAL SCHOOL</label>
                        <input
                            type="text"
                            value={profile.medicalSchool}
                            onChange={(e) => handleChange('medicalSchool', e.target.value)}
                            placeholder="Medical school name"
                            className="form-input"
                        />
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
                </div>
            </div>
        </div>
    );
}